"use client";

import React from "react";
import { ClipboardList } from "lucide-react";
import Link from "next/link";
import { SimpleHeader } from "@/components/SimpleHeader";

export default function PedidosPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb] pb-28">
      <SimpleHeader title="Mis Pedidos" showBackButton={true} />
      <div className="px-5">

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
      </div>
    </div>
  );
}
