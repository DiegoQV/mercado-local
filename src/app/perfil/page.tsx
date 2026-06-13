"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, MapPin, User, Phone, Save, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PerfilPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });
  const [isSaved, setIsSaved] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("mercado_digital_user");
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {
        console.error("Error parsing saved data", e);
      }
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("mercado_digital_user", JSON.stringify(formData));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] pb-32">
      {/* Header */}
      <div className="bg-white px-5 pt-6 pb-6 border-b border-gray-100 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <Link 
            href="/" 
            className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 active:scale-95 transition-transform"
          >
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold">Datos de Entrega</h1>
        </div>
      </div>

      <div className="px-5 mt-8">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[2.5rem] p-6 text-white mb-8 shadow-lg shadow-indigo-100">
          <h2 className="text-lg font-bold mb-1">Información de Envío</h2>
          <p className="text-sm opacity-80 leading-relaxed">
            Completa tus datos para que las tiendas puedan llevar tus pedidos directamente a tu puerta.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          {/* Nombre Completo */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase ml-2 flex items-center gap-2">
              <User size={14} className="text-indigo-500" />
              Nombre Completo
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Ej. Juan Pérez"
              className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/30 transition-all outline-none shadow-sm"
              required
            />
          </div>

          {/* Teléfono WhatsApp */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase ml-2 flex items-center gap-2">
              <Phone size={14} className="text-emerald-500" />
              Teléfono WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ej. 987654321"
              className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/30 transition-all outline-none shadow-sm"
              required
            />
          </div>

          {/* Dirección y Referencia */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase ml-2 flex items-center gap-2">
              <MapPin size={14} className="text-rose-500" />
              Dirección y Referencia
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Ej. Jr. Ayacucho 123, frente a la Plaza de Armas"
              rows={3}
              className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/30 transition-all outline-none shadow-sm resize-none"
              required
            ></textarea>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            disabled={isSaved}
            className={`w-full py-5 rounded-[2rem] font-bold text-lg flex items-center justify-center gap-3 shadow-xl transition-all active:scale-[0.98] ${
              isSaved 
                ? "bg-emerald-500 text-white shadow-emerald-100" 
                : "bg-[#6366f1] text-white shadow-indigo-100"
            }`}
          >
            {isSaved ? (
              <>
                <CheckCircle2 size={24} />
                ¡Datos Guardados!
              </>
            ) : (
              <>
                <Save size={24} />
                Guardar Información
              </>
            )}
          </button>
        </form>

        <p className="text-center text-[10px] text-gray-400 mt-10 uppercase font-medium tracking-widest px-10 leading-loose">
          Tus datos se guardan solo en este dispositivo para tu comodidad.
        </p>
      </div>
    </main>
  );
}
