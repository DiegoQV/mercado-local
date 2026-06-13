"use client";

import React from "react";
import { ClipboardList, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PedidosPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb] px-5 pt-6 pb-28">
      <div className="flex items-center gap-3 mb-8">
        <Link 
          href="/" 
          className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 active:scale-95 transition-transform"
        >
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-xl font-bold">Mis Pedidos</h1>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
          <ClipboardList size={24} />
        </div>
        <h3 className="text-lg font-bold text-gray-900">Aún no tienes pedidos</h3>
        <p className="text-sm text-gray-500 mt-1 max-w-[240px]">
          Tus compras realizadas aparecerán aquí para que puedas hacerles seguimiento.
        </p>
        <Link 
          href="/"
          className="mt-6 text-sm font-bold text-white bg-blue-600 px-8 py-3 rounded-xl shadow-md active:scale-95 transition-transform"
        >
          Empezar a comprar
        </Link>
      </div>
    </main>
  );
}
