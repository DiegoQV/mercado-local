"use client";
import React, { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight, Upload, CheckCircle, Smartphone, Info, User, Phone, MapPin, AlertCircle, ShoppingBag, ShieldCheck, Store, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { DeliveryData, getServerUserSnapshot, getUserSnapshot, parseUserData, subscribeUserData, saveUserData } from "@/lib/userStorage";

type DeliveryMethod = "pickup" | "delivery";

const DELIVERY_FEE = 3;

export default function CheckoutPage() {
  const { items, subtotal, storeName, clearCart } = useCart();
  const [voucher, setVoucher] = useState<File | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("pickup");

  const deliveryFee = deliveryMethod === "delivery" ? DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee;
  const deliveryMethodLabel = deliveryMethod === "delivery" ? "Delivery" : "Recojo en tienda";
  const deliveryCostLabel = deliveryFee === 0 ? "Gratis" : `S/${deliveryFee.toFixed(2)}`;

  const serializedUser = useSyncExternalStore(subscribeUserData, getUserSnapshot, getServerUserSnapshot);
  const storedUser = useMemo(() => parseUserData(serializedUser), [serializedUser]);
  const [userDraft, setUserDraft] = useState<Partial<DeliveryData>>({});
  const userData = { ...storedUser, ...userDraft };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Strip < > to prevent basic XSS injections
    const sanitizedValue = value.replace(/[<>]/g, "");
    setUserDraft(prev => ({ ...prev, [name]: sanitizedValue }));
    setError(null);
  };

  const handleVoucherUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Security validation: File type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError("Formato no soportado. Sube solo imágenes (JPG, PNG o WEBP).");
      return;
    }

    // Security validation: File size (5MB)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      setError("La imagen es muy pesada. El límite es 5MB.");
      return;
    }

    setVoucher(file);
    setError(null);
  };

  const handleConfirmPayment = () => {
    const ADMIN_WHATSAPP = "978410457";
    // 1. Validate Delivery Data
    const fullNameVal = userData.fullName?.trim() || "";
    const phoneVal = userData.phone?.trim() || "";
    const addressVal = userData.address?.trim() || "";

    if (!fullNameVal || !phoneVal || !addressVal) {
      setError("Por favor, completa todos tus datos de entrega antes de continuar.");
      return;
    }

    // 2. Validate Voucher
    if (!voucher) {
      setError("Es obligatorio adjuntar la captura de tu comprobante de pago.");
      return;
    }

    setIsConfirming(true);

    // Save/update delivery data in localStorage / profile for future checkouts
    saveUserData({
      fullName: fullNameVal,
      phone: phoneVal,
      address: addressVal,
    });

    const orderId = `MD-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
    
    // Build the dynamic message with delivery data
    const message = `¡Nuevo Pago Registrado!
📦 Pedido #${orderId}
🏪 Tienda: ${storeName}
🚚 Método de entrega: ${deliveryMethodLabel}
Costo de entrega: ${deliveryCostLabel}
💰 Total: S/${total.toFixed(2)}

👤 CLIENTE:
Nombre: ${fullNameVal}
Teléfono: ${phoneVal}
📍 Dirección: ${addressVal}

----------------------------
Adjunto envío el voucher de verificación. Por favor procesar mi pedido.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/51${ADMIN_WHATSAPP}?text=${encodedMessage}`;

    // Clean cart and redirect
    setTimeout(() => {
      setIsConfirming(false);
      setIsCompleted(true);
      
      setTimeout(() => {
        clearCart();
        // Secure redirect opening
        const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
        window.location.href = "/"; // Return to home
      }, 1000);
    }, 1800);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#f9fafb] text-gray-900 font-sans">
        <div className="w-24 h-24 bg-white shadow-xl shadow-blue-900/5 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={40} className="text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold mb-3 tracking-tight">Tu carrito está vacío</h2>
        <p className="text-gray-500 mb-8 max-w-xs text-sm">Parece que aún no has seleccionado productos para comprar.</p>
        <Link 
          href="/" 
          className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20 text-center"
        >
          Explorar Tiendas
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f9fafb] pb-32 font-sans overflow-x-hidden relative">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 flex items-center gap-4 sticky top-0 z-30 border-b border-gray-100">
        <Link href="/" className="p-2 -ml-2 text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors active:scale-95" aria-label="Volver al inicio">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Finalizar Pago</h1>
      </div>

      <div className="p-6 space-y-6 max-w-md md:max-w-none mx-auto">
        {/* Step 1: Delivery Data */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 animate-fade-in-up hover:shadow-md hover:border-gray-200/80 transition-all duration-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin size={20} className="text-blue-600" />
            Datos de Entrega
          </h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-450 uppercase ml-1">Nombre Completo</label>
              <div className="relative group">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="text"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleInputChange}
                  placeholder="Ej. Juan Pérez"
                  className="w-full bg-gray-50 border border-transparent rounded-xl py-3 pl-11 pr-4 text-sm focus:bg-white focus:border-blue-100 focus:ring-2 focus:ring-blue-100/50 outline-none transition-all duration-200 text-gray-800"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-455 uppercase ml-1">Teléfono WhatsApp</label>
              <div className="relative group">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="tel"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                  placeholder="Ej. 987654321"
                  className="w-full bg-gray-50 border border-transparent rounded-xl py-3 pl-11 pr-4 text-sm focus:bg-white focus:border-blue-100 focus:ring-2 focus:ring-blue-100/50 outline-none transition-all duration-200 text-gray-800"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-455 uppercase ml-1">Dirección y Referencia</label>
              <div className="relative group">
                <MapPin size={16} className="absolute left-4 top-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <textarea 
                  name="address"
                  value={userData.address}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Ej. Jr. Ayacucho 123, frente a la Plaza..."
                  className="w-full bg-gray-50 border border-transparent rounded-xl py-3 pl-11 pr-4 text-sm focus:bg-white focus:border-blue-100 focus:ring-2 focus:ring-blue-100/50 outline-none transition-all duration-200 text-gray-800 resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Order Breakdown */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 animate-fade-in-up delay-100 hover:shadow-md hover:border-gray-200/80 transition-all duration-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <ShoppingBag size={20} className="text-blue-600" />
            Resumen del Pedido
          </h3>
          <div className="space-y-4">
            <div className="space-y-3.5">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center text-sm">
                  <div className="flex gap-3 items-center min-w-0 flex-1 pr-4">
                    <span className="text-blue-600 font-bold bg-blue-50/70 border border-blue-100/35 w-6.5 h-6.5 flex items-center justify-center rounded-lg text-xs shrink-0">
                      {item.quantity}
                    </span>
                    <span className="text-gray-700 font-medium truncate">{item.product.name}</span>
                  </div>
                  <span className="text-gray-900 font-bold shrink-0 tabular-nums">S/{(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <hr className="border-gray-100 my-3" />

            <div className="space-y-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Método de entrega</p>
              <div className="grid grid-cols-2 gap-1.5 bg-gray-100 p-1 rounded-xl" role="group" aria-label="Método de entrega">
                <button
                  type="button"
                  aria-pressed={deliveryMethod === "pickup"}
                  onClick={() => setDeliveryMethod("pickup")}
                  className={cn(
                    "min-h-11 px-3 rounded-lg flex items-center justify-center gap-2 text-xs font-bold transition-all duration-200 active:scale-[0.98]",
                    deliveryMethod === "pickup"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:bg-white/70"
                  )}
                >
                  <Store size={15} />
                  <span>Recojo en tienda</span>
                </button>
                <button
                  type="button"
                  aria-pressed={deliveryMethod === "delivery"}
                  onClick={() => setDeliveryMethod("delivery")}
                  className={cn(
                    "min-h-11 px-3 rounded-lg flex items-center justify-center gap-2 text-xs font-bold transition-all duration-200 active:scale-[0.98]",
                    deliveryMethod === "delivery"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:bg-white/70"
                  )}
                >
                  <Truck size={15} />
                  <span>Delivery</span>
                </button>
              </div>
            </div>
              
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Subtotal</span>
                <span className="text-gray-900 font-bold tabular-nums">S/{subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Costo de entrega</span>
                {deliveryFee === 0 ? (
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-lg text-[11px] border border-emerald-100/50">Gratis</span>
                ) : (
                  <span className="text-gray-900 font-bold tabular-nums">S/{deliveryFee.toFixed(2)}</span>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-150 mt-1">
              <span className="text-base font-extrabold text-gray-900">Total a Pagar</span>
              <span className="text-2xl font-black text-blue-600 tracking-tight tabular-nums">S/{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Step 3: Yape Section */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center animate-fade-in-up delay-150 hover:shadow-md hover:border-gray-200/80 transition-all duration-200">
          {/* Tag superior de seguridad */}
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full mb-4 border border-emerald-100/40">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Transacción protegida</span>
          </div>

          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#742484]/10 text-[#742484] px-4 py-1.5 rounded-full mb-3">
              <Smartphone size={16} fill="currentColor" />
              <span className="text-xs font-bold uppercase tracking-wider">Pago vía Yape</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Escanea el QR para Pagar</h3>
          </div>

          <div className="relative w-48 h-48 bg-gray-50 rounded-3xl mb-6 flex items-center justify-center border-2 border-gray-100 overflow-hidden shadow-inner hover:scale-[1.01] transition-transform duration-200">
            <Image src="/window.svg" alt="Yape QR" width={160} height={160} className="rounded-xl opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[10px] font-bold text-gray-400 text-center px-8 uppercase">Código QR Dinámico</span>
            </div>
          </div>

          {/* Pasos del Pago (Visual Stepper) */}
          <div className="w-full space-y-4 border-t border-gray-100 pt-6 mt-2">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 pl-1">Instrucciones de pago:</h4>
            
            {/* Paso 1 */}
            <div className="flex gap-3.5 items-start bg-gray-50/50 p-3.5 rounded-2xl border border-gray-100/50">
              <div className="w-7 h-7 bg-blue-50 text-blue-650 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 border border-blue-100/20">
                1
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                  <Smartphone size={15} className="text-gray-500" />
                  Escanea el QR o paga al número
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Yapea exactamente <span className="font-bold text-blue-600">S/{total.toFixed(2)}</span> al número <span className="font-bold text-gray-800">978 410 457</span> (Diego Quiroz).
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex gap-3.5 items-start bg-gray-50/50 p-3.5 rounded-2xl border border-gray-100/50">
              <div className="w-7 h-7 bg-blue-50 text-blue-655 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 border border-blue-100/20">
                2
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                  <Upload size={15} className="text-gray-500" />
                  Prepara tu comprobante
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Asegúrate de que el monto y la operación se vean con claridad.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex gap-3.5 items-start bg-gray-50/50 p-3.5 rounded-2xl border border-gray-100/50">
              <div className="w-7 h-7 bg-blue-50 text-blue-655 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 border border-blue-100/20">
                3
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-gray-500" />
                  Revisa tu información
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Verifica tus datos de entrega y el comprobante antes de continuar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Voucher Upload */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 animate-fade-in-up delay-200 hover:shadow-md hover:border-gray-200/80 transition-all duration-200">
          <label className="block text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-wider pl-1">Adjuntar Comprobante</label>
          <div className="relative group overflow-hidden transition-all duration-300">
            <input 
              type="file" 
              accept=".jpg,.jpeg,.png,.webp" 
              onChange={handleVoucherUpload} 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
            />
            <div className={cn(
              "border-2 border-dashed rounded-3xl p-7 flex flex-col items-center justify-center transition-all duration-200 ease-out transform",
              voucher 
                ? "border-emerald-400 bg-emerald-50/40 shadow-inner" 
                : "border-gray-200 bg-gray-50 group-hover:border-blue-400 group-hover:bg-blue-50/20 active:scale-[0.99]"
            )}>
              {voucher ? (
                <div className="flex flex-col items-center text-center animate-scale-up">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3 shadow-sm border border-emerald-250/25">
                    <CheckCircle size={24} className="animate-scale-up" />
                  </div>
                  <p className="text-sm font-bold text-emerald-800 flex items-center gap-1.5">
                    ✓ Comprobante seleccionado
                  </p>
                  <p className="text-xs text-gray-500 mt-1.5 truncate max-w-[240px] font-mono bg-white px-2.5 py-1 rounded-lg border border-emerald-100/50">
                    {voucher.name}
                  </p>
                  <span className="mt-4 text-xs font-bold text-emerald-700 bg-white hover:bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 shadow-sm transition-colors duration-200 z-30">
                    Cambiar imagen
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-50 text-blue-650 rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                    <Upload size={20} />
                  </div>
                  <p className="text-sm font-bold text-gray-800">Seleccionar Imagen</p>
                  <p className="text-xs text-gray-400 mt-1">Captura de pantalla del pago (JPG, PNG, WEBP)</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Step 5: Aviso Importante (Shown exactly once) */}
        <div className="bg-amber-50/80 border border-amber-100/50 rounded-3xl p-5 flex gap-3.5 items-start animate-fade-in-up delay-250">
          <div className="w-7 h-7 bg-amber-100 text-amber-800 rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-amber-200/20">
            <Info size={15} />
          </div>
          <div>
            <h4 className="text-[10px] font-black text-amber-900 tracking-wider uppercase mb-1">IMPORTANTE</h4>
            <p className="text-xs text-amber-800 font-semibold leading-relaxed">
              <span className="block">Al confirmar el pedido se abrirá WhatsApp.</span>
              <span className="block">Adjunta tu comprobante para validar tu compra.</span>
            </p>
          </div>
        </div>

        {/* Final confirmation action */}
        <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm animate-fade-in-up delay-250">
        {/* UI Validation Error */}
        {error && (
          <div className="mb-4 flex items-center gap-2.5 bg-red-50 text-red-700 p-4 rounded-2xl border border-red-100 text-xs font-bold animate-shake">
            <AlertCircle size={16} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <button
          onClick={handleConfirmPayment}
          disabled={isConfirming || isCompleted}
          className={cn(
            "w-full h-[4.5rem] rounded-2xl font-bold flex flex-col items-center justify-center transition-all duration-200 select-none border border-emerald-700/20 ring-4 ring-emerald-100 shadow-xl cursor-pointer",
            isCompleted
              ? "bg-emerald-600 text-white shadow-emerald-500/20"
              : isConfirming
              ? "bg-emerald-700/80 text-white cursor-not-allowed"
              : "bg-[#047857] hover:bg-emerald-600 text-white active:scale-[0.98] shadow-emerald-900/25"
          )}
        >
          {isCompleted ? (
            <div className="flex items-center gap-2 text-base font-bold py-1 animate-scale-up">
              <CheckCircle size={20} className="text-white" />
              <span>Pedido enviado</span>
            </div>
          ) : isConfirming ? (
            <div className="flex items-center gap-3 py-1 text-base font-bold">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Confirmando...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
                <span>Confirmar pedido</span>
                <ChevronRight size={18} />
              </div>
            </div>
          )}
        </button>
        </div>
      </div>
    </main>
  );
}
