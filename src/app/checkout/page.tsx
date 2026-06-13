"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight, Upload, CheckCircle, Smartphone, Info } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, subtotal, commission, total, storeName, clearCart } = useCart();
  const [voucher, setVoucher] = useState<File | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);

  // Admin Info
  const ADMIN_WHATSAPP = "978410457";

  const handleVoucherUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVoucher(e.target.files[0]);
    }
  };

  const handleConfirmPayment = () => {
    if (!voucher) {
      alert("Por favor, adjunta la captura de tu voucher de Yape para continuar.");
      return;
    }

    // Get delivery data from localStorage
    const savedData = localStorage.getItem("mercado_digital_user");
    let userData = { fullName: "No proporcionado", phone: "No proporcionado", address: "No proporcionada" };
    if (savedData) {
      try {
        userData = JSON.parse(savedData);
      } catch (e) {
        console.error("Error parsing user data", e);
      }
    }

    setIsConfirming(true);

    const orderId = `MD-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
    
    // Build the dynamic message with delivery data
    const message = `¡Nuevo Pago Registrado!
📦 Pedido #${orderId}
🏪 Tienda: ${storeName}
💰 Total Yapeado: S/. ${total.toFixed(2)}

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
      window.open(whatsappUrl, "_blank");
      window.location.href = "/"; // Return to home
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white text-gray-900">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <Smartphone size={40} className="text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold mb-3">Tu carrito está vacío</h2>
        <p className="text-gray-500 mb-8 max-w-xs">Parece que aún no has seleccionado productos para comprar.</p>
        <Link 
          href="/" 
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold transition-all active:scale-95"
        >
          Explorar Tiendas
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f9fafb] pb-40">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 flex items-center gap-4 sticky top-0 z-30 shadow-sm shadow-gray-100">
        <Link href="/" className="p-2 -ml-2 text-gray-900" aria-label="Volver al inicio">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Finalizar Pago</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Order Breakdown */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Resumen del Pedido</h3>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between items-center text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-blue-600 font-bold bg-blue-50 w-6 h-6 flex items-center justify-center rounded-lg text-[10px]">
                    {item.quantity}
                  </span>
                  <span className="text-gray-700 font-medium">{item.product.name}</span>
                </div>
                <span className="text-gray-900 font-bold">S/{(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            
            <hr className="border-gray-50 my-2" />
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium font-outfit">Subtotal</span>
              <span className="text-gray-900 font-bold">S/{subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">Comisión M. Digital (3%)</span>
              </div>
              <span className="text-emerald-500 font-bold">+ S/{commission.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-lg font-bold text-gray-900">Total a Pagar</span>
              <span className="text-2xl font-extrabold text-blue-600">S/{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Yape Section */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#742484]/10 text-[#742484] px-4 py-1.5 rounded-full mb-3">
              <Smartphone size={16} fill="currentColor" />
              <span className="text-xs font-bold uppercase tracking-wider">Pago Seguro vía Yape</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Escanea el QR para Pagar</h3>
          </div>

          {/* QR Placeholder (Using verified placeholder image) */}
          <div className="relative w-48 h-48 bg-gray-50 rounded-3xl mb-8 flex items-center justify-center border-2 border-gray-200 overflow-hidden shadow-inner font-outfit">
            <Image
              src="/window.svg"
              alt="Yape QR Code"
              width={160}
              height={160}
              className="rounded-xl opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[10px] font-bold text-gray-400 text-center px-8 uppercase">Código QR Dinámico en desarrollo</span>
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
              <p className="text-sm text-gray-600 font-medium">Escanea el código QR o yapea directamente al número <strong>978 410 457</strong>.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
              <p className="text-sm text-gray-600 font-medium">Adjunta la captura de tu voucher de éxito aquí abajo.</p>
            </div>
          </div>
        </div>

        {/* Voucher Upload */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <label className="block text-sm font-bold text-gray-900 mb-4">Sube tu Voucher</label>
          <div className="relative group">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleVoucherUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className={cn(
              "border-2 border-dashed rounded-3xl p-8 flex flex-col items-center transition-all",
              voucher ? "border-emerald-200 bg-emerald-50" : "border-gray-200 bg-gray-50 group-hover:border-blue-300"
            )}>
              {voucher ? (
                <>
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-3">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-sm font-bold text-emerald-800 truncate max-w-[200px]">{voucher.name}</p>
                  <p className="text-xs text-emerald-600 mt-1">Voucher adjuntado correctamente</p>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3 shadow-md">
                    <Upload size={20} />
                  </div>
                  <p className="text-sm font-bold text-gray-900">Haz clic o arrastra aquí</p>
                  <p className="text-xs text-gray-400 mt-1">Solo imágenes (.jpg, .png)</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Confirm Action */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100 z-50">
        <div className="mb-4 flex items-start gap-3 bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
            <Info size={12} />
          </div>
          <p className="text-[11px] text-blue-700 leading-relaxed font-medium">
            Al presionar el botón, se abrirá WhatsApp para enviar tu pedido. <span className="font-bold">Recuerda adjuntar la foto de tu comprobante de pago</span> en el chat de WhatsApp para validar tu compra.
          </p>
        </div>
        <button
          onClick={handleConfirmPayment}
          disabled={isConfirming}
          className={cn(
            "w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg transition-all active:scale-[0.98]",
            voucher && !isConfirming 
              ? "bg-emerald-600 text-white shadow-emerald-50" 
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          )}
        >
          {isConfirming ? (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Procesando...
            </div>
          ) : (
            <>
              Confirmar Pago
              <ChevronRight size={20} />
            </>
          )}
        </button>
      </div>
    </main>
  );
}
