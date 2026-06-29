"use client";

import React, { useMemo, useState, useSyncExternalStore, useCallback } from "react";
import { MapPin, User, Phone, Save, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { SimpleHeader } from "@/components/SimpleHeader";
import {
  DeliveryData,
  getServerUserSnapshot,
  getUserSnapshot,
  parseUserData,
  saveUserData,
  subscribeUserData,
} from "@/lib/userStorage";

type FormFields = "fullName" | "phone" | "address";

export default function PerfilPage() {
  const serializedUser = useSyncExternalStore(subscribeUserData, getUserSnapshot, getServerUserSnapshot);
  const storedData = useMemo(() => parseUserData(serializedUser), [serializedUser]);
  const [draft, setDraft] = useState<Partial<DeliveryData>>({});
  const formData = useMemo(() => ({ ...storedData, ...draft }), [storedData, draft]);

  // States for save flow
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Validation & accessibility tracking
  const [touched, setTouched] = useState<Record<FormFields, boolean>>({
    fullName: false,
    phone: false,
    address: false,
  });

  // Handle field touch/blur
  const handleBlur = (field: FormFields) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // Validators
  const validators = useMemo(() => {
    const isFullNameValid = formData.fullName.trim().length >= 3;
    const isPhoneValid = /^9\d{8}$/.test(formData.phone.trim());
    const isAddressValid = formData.address.trim().length >= 10;

    return {
      fullName: {
        isValid: isFullNameValid,
        error: "Ingrese su nombre completo (mínimo 3 letras).",
      },
      phone: {
        isValid: isPhoneValid,
        error: "Ingrese un número celular válido (9 dígitos, empieza con 9).",
      },
      address: {
        isValid: isAddressValid,
        error: "Ingrese una dirección y referencia válida (mínimo 10 caracteres).",
      },
    };
  }, [formData]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched to trigger visual validation
    setTouched({ fullName: true, phone: true, address: true });

    // Verify all valid
    if (!validators.fullName.isValid || !validators.phone.isValid || !validators.address.isValid) {
      return;
    }

    setIsSaving(true);
    setIsSaved(false);

    // Simulate database/API delay (approx 800ms) for high-end feel
    setTimeout(() => {
      saveUserData(formData);
      setDraft({});
      setIsSaving(false);
      setIsSaved(true);

      // Reset success state after exactly 1.2 seconds as requested
      setTimeout(() => {
        setIsSaved(false);
        // Clear touched state on success to return inputs to neutral if desired
        setTouched({ fullName: false, phone: false, address: false });
      }, 1200);
    }, 850);
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Strip tag brackets for safety
    const sanitized = value.replace(/[<>]/g, "");
    setDraft((prev) => ({ ...prev, [name]: sanitized }));
    setIsSaved(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9fafb] pb-32 font-sans selection:bg-blue-100">
      {/* Header */}
      <SimpleHeader title="Datos de Entrega" showBackButton={true} />

      <div className="px-5 mt-6 max-w-lg mx-auto">
        {/* ① Tarjeta de Información de Envío reducida (~20-25% más compacta) */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-5 text-white mb-6 shadow-md transition-all">
          <h2 className="text-base font-bold mb-0.5">Información de Envío</h2>
          <p className="text-xs opacity-90 leading-snug">
            Completa tus datos para recibir tus pedidos directo en tu puerta.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-5" noValidate>
          {/* Nombre Completo */}
          <div className="space-y-1.5">
            <label
              htmlFor="fullName"
              className="text-xs font-semibold text-gray-500 ml-2 flex items-center gap-2 select-none cursor-pointer"
            >
              <User size={14} className="text-blue-500" aria-hidden="true" />
              Nombre completo
            </label>
            <div className="relative">
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={() => handleBlur("fullName")}
                placeholder="Ej. Juan Pérez"
                aria-required="true"
                aria-invalid={touched.fullName && !validators.fullName.isValid}
                aria-describedby={touched.fullName && !validators.fullName.isValid ? "fullName-error" : undefined}
                className={`w-full bg-white border rounded-2xl py-4 pl-5 pr-11 text-sm outline-none shadow-sm transition-all duration-200 ease-in-out
                  ${
                    touched.fullName && !validators.fullName.isValid
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                      : "border-gray-100 hover:border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10"
                  }`}
                required
              />
              {/* Check de validación verde discreto */}
              {validators.fullName.isValid && formData.fullName.trim() !== "" && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-emerald-500 animate-check-in pointer-events-none">
                  <CheckCircle2 size={16} className="fill-emerald-50 text-emerald-500" />
                </div>
              )}
            </div>
            {/* Mensaje de error discreto */}
            {touched.fullName && !validators.fullName.isValid && (
              <p id="fullName-error" className="text-[11px] text-red-500 ml-2 flex items-center gap-1 font-medium animate-fadeIn">
                <AlertCircle size={10} />
                {validators.fullName.error}
              </p>
            )}
          </div>

          {/* Teléfono WhatsApp */}
          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="text-xs font-semibold text-gray-500 ml-2 flex items-center gap-2 select-none cursor-pointer"
            >
              <Phone size={14} className="text-emerald-500" aria-hidden="true" />
              Teléfono WhatsApp
            </label>
            <div className="relative">
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur("phone")}
                placeholder="Ej. 987654321"
                aria-required="true"
                aria-invalid={touched.phone && !validators.phone.isValid}
                aria-describedby={touched.phone && !validators.phone.isValid ? "phone-error" : undefined}
                className={`w-full bg-white border rounded-2xl py-4 pl-5 pr-11 text-sm outline-none shadow-sm transition-all duration-200 ease-in-out
                  ${
                    touched.phone && !validators.phone.isValid
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                      : "border-gray-100 hover:border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10"
                  }`}
                required
              />
              {/* Check de validación verde discreto */}
              {validators.phone.isValid && formData.phone.trim() !== "" && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-emerald-500 animate-check-in pointer-events-none">
                  <CheckCircle2 size={16} className="fill-emerald-50 text-emerald-500" />
                </div>
              )}
            </div>
            {/* Mensaje de error discreto */}
            {touched.phone && !validators.phone.isValid && (
              <p id="phone-error" className="text-[11px] text-red-500 ml-2 flex items-center gap-1 font-medium animate-fadeIn">
                <AlertCircle size={10} />
                {validators.phone.error}
              </p>
            )}
          </div>

          {/* Dirección y Referencia */}
          <div className="space-y-1.5">
            <label
              htmlFor="address"
              className="text-xs font-semibold text-gray-500 ml-2 flex items-center gap-2 select-none cursor-pointer"
            >
              <MapPin size={14} className="text-rose-500" aria-hidden="true" />
              Dirección y referencia
            </label>
            <div className="relative">
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                onBlur={() => handleBlur("address")}
                placeholder="Ej. Jr. Ayacucho 123, frente a la Plaza de Armas"
                rows={3}
                aria-required="true"
                aria-invalid={touched.address && !validators.address.isValid}
                aria-describedby={touched.address && !validators.address.isValid ? "address-error" : undefined}
                className={`w-full bg-white border rounded-2xl py-4 pl-5 pr-11 text-sm outline-none shadow-sm resize-none transition-all duration-200 ease-in-out
                  ${
                    touched.address && !validators.address.isValid
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                      : "border-gray-100 hover:border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10"
                  }`}
                required
              />
              {/* Check de validación verde discreto */}
              {validators.address.isValid && formData.address.trim() !== "" && (
                <div className="absolute right-4 top-4 flex items-center justify-center text-emerald-500 animate-check-in pointer-events-none">
                  <CheckCircle2 size={16} className="fill-emerald-50 text-emerald-500" />
                </div>
              )}
            </div>
            {/* Mensaje de error discreto */}
            {touched.address && !validators.address.isValid && (
              <p id="address-error" className="text-[11px] text-red-500 ml-2 flex items-center gap-1 font-medium animate-fadeIn">
                <AlertCircle size={10} />
                {validators.address.error}
              </p>
            )}
          </div>

          {/* ④ Botón principal mejorado — Con espacio superior de 8-12px incrementado (mt-9 / pt-3) */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isSaving || isSaved}
              className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-md 
                         transition-all duration-200 ease-in-out active:scale-[0.98] cursor-pointer touch-manipulation min-h-[56px]
                         ${
                           isSaved
                             ? "bg-emerald-600 text-white shadow-emerald-500/10 cursor-default"
                             : isSaving
                             ? "bg-emerald-600/80 text-white cursor-wait opacity-90"
                             : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/10 active:bg-emerald-800"
                         }`}
            >
              {isSaving ? (
                <>
                  <Loader2 size={22} className="animate-spin" />
                  <span>Guardando...</span>
                </>
              ) : isSaved ? (
                <>
                  <CheckCircle2 size={22} className="animate-check-in text-white" />
                  <span>✓ Información guardada correctamente</span>
                </>
              ) : (
                <>
                  <Save size={22} />
                  <span>Guardar información</span>
                </>
              )}
            </button>
          </div>
        </form>

        <p className="text-center text-[10px] text-gray-400 mt-10 uppercase font-semibold tracking-widest px-10 leading-loose">
          Tus datos se guardan solo en este dispositivo para tu comodidad.
        </p>
      </div>
    </div>
  );
}
