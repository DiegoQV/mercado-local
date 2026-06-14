"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight, Upload, CheckCircle, Smartphone, Info, User, Phone, MapPin, AlertCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, subtotal, commission, total, storeName, clearCart } = useCart();
  const [voucher, setVoucher] = useState<File | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // User Delivery Data
  const [userData, setUserData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });

  // Admin Info
  const ADMIN_WHATSAPP = "978410457";

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("mercado_digital_user");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setUserData({
          fullName: parsed.fullName || "",
          phone: parsed.phone || "",
          address: parsed.address || "",
        });
      } catch (e) {
        console.error("Error parsing user data", e);
      }
    }
  }, []);

  const sanitizeInput = (text: string) => {
    return text.replace(/<[^>]*>?/gm, '').trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Basic sanitization on input
    const sanitizedValue = value.replace(/[<>]/g, '');
    setUserData(prev => ({ ...prev, [name]: sanitizedValue }));
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
    // 1. Validate Delivery Data
    if (!userData.fullName.trim() || !userData.phone.trim() || !userData.address.trim()) {
      setError("Por favor, completa todos tus datos de entrega antes de continuar.");
      return;
    }

    // 2. Validate Voucher
    if (!voucher) {
      setError("Es obligatorio adjuntar la captura de tu voucher de éxito.");
      return;
    }

    setIsConfirming(true);

    const orderId = `MD-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
    
    // Build the dynamic message with delivery data
    const message = `¡Nuevo Pago Registrado!
📦 Pedido #${orderId}
🏪 Tienda: ${storeName}
💰 Total Pago: S/. ${total.toFixed(2)}

👤 CLIENTE:
Nombre: ${userData.fullName}
Teléfono: ${userData.phone}
📍 Dirección: ${userData.address}

----------------------------
Adjunto envío el voucher de verificación. Por favor procesar mi pedido.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/51${ADMIN_WHATSAPP}?text=${encodedMessage}`;

    // Clean cart and redirect
    setTimeout(() => {
      clearCart();
      // Secure redirect opening
      const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
      window.location.href = "/"; // Return to home
    }, 1500);
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
          className="w-full max-w-xs bg-blue-600 text-white py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20"
        >
          Explorar Tiendas
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f9fafb] pb-52 font-sans overflow-x-hidden">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 flex items-center gap-4 sticky top-0 z-30 border-b border-gray-100">
        <Link href="/" className="p-2 -ml-2 text-gray-900 bg-gray-50 rounded-full" aria-label="Volver al inicio">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Finalizar Pago</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Step 1: Delivery Data */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin size={20} className="text-blue-600" />
            Datos de Entrega
          </h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Nombre Completo</label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleInputChange}
                  placeholder="Ej. Juan Pérez"
                  className="w-full bg-gray-50 border border-transparent rounded-xl py-3 pl-11 pr-4 text-sm focus:bg-white focus:border-blue-100 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Teléfono WhatsApp</label>
              <div className="relative">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="tel"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                  placeholder="Ej. 987654321"
                  className="w-full bg-gray-50 border border-transparent rounded-xl py-3 pl-11 pr-4 text-sm focus:bg-white focus:border-blue-100 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Dirección y Referencia</label>
              <div className="relative">
                <MapPin size={16} className="absolute left-4 top-4 text-gray-400" />
                <textarea 
                  name="address"
                  value={userData.address}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Ej. Jr. Ayacucho 123, frente a la Plaza..."
                  className="w-full bg-gray-50 border border-transparent rounded-xl py-3 pl-11 pr-4 text-sm focus:bg-white focus:border-blue-100 outline-none transition-all resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Order Breakdown */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Resumen del Pedido</h3>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between items-center text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-blue-600 font-bold bg-blue-50 w-6 h-6 flex items-center justify-center rounded-lg text-[10px] shrink-0">
                    {item.quantity}
                  </span>
                  <span className="text-gray-700 font-medium line-clamp-1">{item.product.name}</span>
                </div>
                <span className="text-gray-900 font-bold shrink-0">S/{(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            
            <hr className="border-gray-50 my-2" />
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Subtotal</span>
              <span className="text-gray-900 font-bold">S/{subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium uppercase text-[10px] tracking-wider">Costo de Envío (Delivery)</span>
              <span className="text-emerald-600 font-bold">Gratis</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Comisión M. Digital (3%)</span>
              <span className="text-gray-900 font-bold">+ S/{commission.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-lg font-bold text-gray-900">Total a Pagar</span>
              <span className="text-2xl font-extrabold text-blue-600">S/{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Step 3: Yape Section */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#742484]/10 text-[#742484] px-4 py-1.5 rounded-full mb-3">
              <Smartphone size={16} fill="currentColor" />
              <span className="text-xs font-bold uppercase tracking-wider">Pago Seguro vía Yape</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Escanea el QR para Pagar</h3>
          </div>

          <div className="relative w-48 h-48 bg-gray-50 rounded-3xl mb-8 flex items-center justify-center border-2 border-gray-100 overflow-hidden shadow-inner">
            <Image src="/window.svg" alt="Yape QR" width={160} height={160} className="rounded-xl opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[10px] font-bold text-gray-400 text-center px-8 uppercase">Código QR Dinámico</span>
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Yapea exactamente <span className="font-bold text-blue-600">S/{total.toFixed(2)}</span> al número <strong>978 410 457</strong>.</p>
            </div>
            <div className="flex gap-4 items-start border-t border-gray-50 pt-4">
              <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Sube la captura de tu voucher aquí abajo para validar tu pedido.</p>
            </div>
          </div>
        </div>

        {/* Step 4: Voucher Upload */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <label className="block text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider text-[10px]">Paso Final: Adjuntar Comprobante</label>
          <div className="relative group">
            <input 
              type="file" 
              accept=".jpg,.jpeg,.png,.webp" 
              onChange={handleVoucherUpload} 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
            />
            <div className={cn(
              "border-2 border-dashed rounded-3xl p-8 flex flex-col items-center transition-all duration-300",
              voucher ? "border-emerald-200 bg-emerald-50" : "border-gray-200 bg-gray-50 group-hover:border-blue-300"
            )}>
              {voucher ? (
                <>
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-3 shadow-lg shadow-emerald-200">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-sm font-bold text-emerald-800 truncate max-w-[200px]">{voucher.name}</p>
                  <p className="text-xs text-emerald-600 mt-1 uppercase font-black">Voucher Listo</p>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3 shadow-lg shadow-blue-200">
                    <Upload size={20} />
                  </div>
                  <p className="text-sm font-bold text-gray-900">Seleccionar Imagen</p>
                  <p className="text-[10px] text-gray-400 mt-1 font-medium">Captura de pantalla del pago</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Confirm Action */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100 z-50 md:shadow-2xl md:max-w-6xl md:mx-auto">
        {/* Explicit Warning Card */}
        <div className="mb-4 flex items-start gap-3 bg-orange-50 p-4 rounded-2xl border border-orange-100">
          <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
            <Info size={14} />
          </div>
          <p className="text-[11px] text-orange-800 leading-relaxed font-medium">
            <span className="font-bold block uppercase mb-1">Aviso Importante:</span>
            Al presionar el botón se abrirá WhatsApp con el resumen de tu pedido. <span className="underline decoration-orange-300 font-bold">Por favor, recuerda adjuntar la foto de tu comprobante de pago manualmente</span> en el chat de WhatsApp para que el administrador pueda validar tu compra.
          </p>
        </div>

        {/* UI Validation Error */}
        {error && (
          <div className="mb-4 flex items-center gap-2 bg-red-50 text-red-600 p-4 rounded-2xl border border-red-100 text-sm font-bold animate-shake">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        <button
          onClick={handleConfirmPayment}
          disabled={isConfirming}
          className={cn(
            "w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg transition-all active:scale-[0.98]",
            !isConfirming ? "bg-emerald-600 text-white shadow-emerald-500/20" : "bg-gray-100 text-gray-400 cursor-not-allowed"
          )}
        >
          {isConfirming ? (
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              Procesando Pedido...
            </div>
          ) : (
            <>
              Confirmar Pedido y Enviar WhatsApp
              <ChevronRight size={22} />
            </>
          )}
        </button>
      </div>
    </main>
  );
}
