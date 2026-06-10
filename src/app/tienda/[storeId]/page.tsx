"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingBag, Store, MapPin, Search } from "lucide-react";
import { MOCK_PRODUCTS, STORES } from "@/lib/mockData";

import { ProductCard } from "@/components/ProductCard";

interface PageProps {
  params: Promise<{ storeId: string }>;
}

export default function StorePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const storeId = resolvedParams.storeId;

  const store = STORES.find((s) => s.id === storeId);
  const storeProducts = MOCK_PRODUCTS.filter((p) => p.storeId === storeId);

  if (!store) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-5 text-center">
        <h2 className="text-xl font-bold mb-2">Tienda no encontrada</h2>
        <Link href="/" className="text-indigo-600 font-medium">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f9fafb] pb-20 font-sans">
      {/* Store Header Banner */}
      <div className="relative w-full h-48 bg-gradient-to-br from-indigo-600 to-violet-700 overflow-hidden lg:rounded-b-[3rem] shadow-lg">
        <div className="absolute inset-0 opacity-20 flex items-center justify-center scale-[3]">
           <Store size={100} />
        </div>
        <Link 
          href={`/`}
          className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-md active:scale-90 transition-transform"
        >
          <ArrowLeft size={24} />
        </Link>
      </div>

      {/* Store Info Card */}
      <div className="px-5 -mt-20 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-indigo-100 border border-gray-50">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 shadow-inner">
               <Store size={40} />
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 leading-tight mb-1">{store.name}</h1>
            <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4">
              <MapPin size={12} className="text-indigo-500" />
              Chachapoyas, Amazonas
            </div>
            <p className="text-sm text-gray-500 max-w-xs">{store.description}</p>
          </div>
        </div>
      </div>

      {/* Product List Section */}
      <section className="px-5 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Catálogo ({storeProducts.length})</h2>
          <div className="text-gray-400">
            <Search size={20} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {storeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Back Navigation */}
        <div className="mt-12 mb-8">
          <Link 
            href={`/categoria/${store.category}`}
            className="w-full border-2 border-dashed border-gray-200 text-gray-400 py-4 rounded-3xl flex items-center justify-center gap-3 font-bold hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={18} />
            Volver a categorías
          </Link>
        </div>
      </section>
    </main>
  );
}
