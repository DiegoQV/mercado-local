"use client";

import React, { use } from "react";
import Link from "next/link";
import { ArrowLeft, Store, ChevronRight, MapPin } from "lucide-react";
import { STORES } from "@/lib/mockData";
import { Category } from "@/types/product";


interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug as Category;

  const filteredStores = STORES.filter((s) => s.category === slug);

  const categoryTitles: Record<Category, string> = {
    abarrotes: "Supermercado local",
    motor: "Repuestos y Motores",
    outfit: "Moda y Estilo",
    gadgets: "Tecnología y Gadgets",
    ferreteria: "Ferretería y Construcción",
    farmacia: "Salud y Farmacia",
    comidas: "Restaurantes y Comidas",
    bebidas: "Licorería y Bebidas",
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] pb-20 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-5 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          aria-label="Volver al inicio"
          className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 active:scale-90 transition-transform"
        >
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-lg font-bold capitalize">{categoryTitles[slug] || slug}</h1>
        <div className="w-10"></div>
      </header>

      {/* Stores List */}
      <section className="px-5 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">Tiendas en Chachapoyas</h2>
          <p className="text-gray-500 text-sm mt-1">Selecciona un establecimiento para ver sus productos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStores.length > 0 ? (
            filteredStores.map((store) => (
              <Link 
                key={store.id} 
                href={`/tienda/${store.id}`}
                className="block bg-white rounded-3xl p-6 shadow-sm border border-gray-100 active:scale-[0.98] transition-all group h-full"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Store size={32} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {store.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] text-gray-400 font-bold uppercase mt-1">
                        <MapPin size={10} />
                        Chachapoyas, Centro
                      </div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                    <ChevronRight size={20} />
                  </div>
                </div>
                
                {store.description && (
                  <p className="mt-4 text-sm text-gray-500 leading-relaxed pl-2 border-l-2 border-blue-100">
                    {store.description}
                  </p>
                )}

                <div className="mt-6 flex items-center justify-center py-3 bg-gray-50 rounded-2xl text-xs font-bold text-gray-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                  Entrar a la tienda
                </div>
              </Link>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-gray-100 p-6 rounded-full mb-4 text-gray-400">
                <Store size={48} />
              </div>
              <h3 className="font-bold text-gray-900">No hay tiendas disponibles</h3>
              <p className="text-sm text-gray-500 mt-1">Estamos trabajando para agregar más establecimientos pronto.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Back Button Footer (Optional but helpful) */}
      <div className="px-5 pt-4">
        <Link 
          href="/"
          className="flex items-center justify-center gap-2 text-sm font-bold text-blue-600 py-4"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
