"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Wrench, Shirt, Smartphone, MapPin, Home, ClipboardList, User, ChevronRight, Hammer, Pill } from "lucide-react";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import { cn } from "@/lib/utils";

import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#171717] pb-28 font-sans">
      {/* Header & Search Bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-5">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-[#6366f1]">
              Mercado<span className="text-gray-900">Digital</span>
            </h1>
            <div className="flex items-center gap-1 text-sm font-semibold text-gray-800 mt-0.5 cursor-pointer active:opacity-70 transition-opacity">
              <MapPin size={14} className="text-[#6366f1]" />
              <span>📍 Chachapoyas <span className="text-[10px] ml-0.5 opacity-50">▼</span></span>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
            <ShoppingBag size={18} />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#6366f1] transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="¿Qué necesitas hoy?"
            className="w-full bg-gray-100/80 border border-transparent rounded-xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/10 focus:bg-white transition-all outline-none"
          />
        </div>
      </header>

      {/* Promotional Banners Slider */}
      <section className="mt-4 px-5">
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar pb-2">
          {/* Banner 1: Bienvenida */}
          <div className="flex-shrink-0 w-full snap-start relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-6 text-white shadow-lg shadow-indigo-200">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 leading-tight">Tu mercado local en un solo lugar 🛒</h3>
              <p className="text-sm opacity-90 leading-snug max-w-[80%] mb-4">Compra en tiendas locales con entrega directa a tu WhatsApp.</p>
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                Explorar Ahora <ChevronRight size={14} />
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Banner 2: Motor */}
          <div className="flex-shrink-0 w-full snap-start relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 p-6 text-white shadow-lg shadow-orange-200">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 leading-tight">¿Buscas repuestos para tu moto? 🔧</h3>
              <p className="text-sm opacity-90 leading-snug max-w-[80%] mb-4">Filtra por marca y año al instante en toda la ciudad.</p>
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                Ver Repuestos <ChevronRight size={14} />
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Hero Section / Categories Grid */}
      <section className="px-5 mt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold tracking-tight">Explorar Categorías</h2>
          <button className="text-sm font-semibold text-indigo-600 active:opacity-60 transition-opacity">Ver todas</button>
        </div>
        
        <div className="grid grid-cols-2 gap-3 pb-4">
          {/* Supermercado */}
          <Link href="/categoria/abarrotes" className="group relative overflow-hidden rounded-2xl bg-emerald-50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-emerald-100 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm mb-2">
              <ShoppingBag size={20} />
            </div>
            <h3 className="font-bold text-emerald-950 text-[11px]">Supermercado</h3>
          </Link>

          {/* Motor */}
          <Link href="/categoria/motor" className="group relative overflow-hidden rounded-2xl bg-orange-50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-orange-100 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-orange-600 shadow-sm mb-2">
              <Wrench size={20} />
            </div>
            <h3 className="font-bold text-orange-950 text-[11px]">Repuestos</h3>
          </Link>

          {/* Outfit */}
          <Link href="/categoria/outfit" className="group relative overflow-hidden rounded-2xl bg-purple-50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-purple-100 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-purple-600 shadow-sm mb-2">
              <Shirt size={20} />
            </div>
            <h3 className="font-bold text-purple-950 text-[11px]">Moda y Ropa</h3>
          </Link>

          {/* Gadgets */}
          <Link href="/categoria/gadgets" className="group relative overflow-hidden rounded-2xl bg-blue-50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-blue-100 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-2">
              <Smartphone size={20} />
            </div>
            <h3 className="font-bold text-blue-950 text-[11px]">Tecnología</h3>
          </Link>

          {/* Ferreteria */}
          <Link href="/categoria/ferreteria" className="group relative overflow-hidden rounded-2xl bg-amber-50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-amber-100 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-amber-600 shadow-sm mb-2">
              <Hammer size={20} />
            </div>
            <h3 className="font-bold text-amber-950 text-[11px]">Ferretería</h3>
          </Link>

          {/* Farmacia */}
          <Link href="/categoria/farmacia" className="group relative overflow-hidden rounded-2xl bg-red-50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-red-100 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-red-600 shadow-sm mb-2">
              <Pill size={20} />
            </div>
            <h3 className="font-bold text-red-950 text-[11px]">Farmacia</h3>
          </Link>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="mt-8">
        <div className="flex items-center justify-between px-5 mb-4">
          <h2 className="text-lg font-bold tracking-tight">Destacados hoy</h2>
          <button className="text-sm font-semibold text-indigo-600 active:opacity-60 transition-opacity">Ver más</button>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-5 pb-6 no-scrollbar snap-x snap-mandatory">
          {MOCK_PRODUCTS.slice(0, 15).map((product) => (
            <div key={product.id} className="flex-shrink-0 w-44 snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Modern Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 pt-3 pb-6 z-50 flex items-center justify-between shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col items-center gap-1 text-[#6366f1] active:opacity-70 transition-opacity">
          <Home size={22} className="stroke-[2.5]" />
          <span className="text-[10px] font-bold">Inicio</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 active:opacity-70 transition-opacity">
          <Search size={22} />
          <span className="text-[10px] font-medium">Buscar</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 active:opacity-70 transition-opacity">
          <ClipboardList size={22} />
          <span className="text-[10px] font-medium">Pedidos</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400 active:opacity-70 transition-opacity">
          <User size={22} />
          <span className="text-[10px] font-medium">Mi Perfil</span>
        </div>
      </nav>
    </main>
  );
}
