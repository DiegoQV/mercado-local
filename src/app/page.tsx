"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Wrench, Shirt, Smartphone, MapPin, ChevronRight, Hammer, Pill, Utensils, Beer } from "lucide-react";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#171717] pb-28 font-sans">
      {/* Header & Search Bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-5">
          <div className="flex flex-col text-left">
            <h1 className="text-xl font-bold tracking-tight text-blue-600">
              Mercado<span className="text-gray-900">Digital</span>
            </h1>
            <div className="flex items-center gap-1 text-sm font-semibold text-gray-800 mt-0.5 cursor-pointer active:opacity-70 transition-opacity">
              <MapPin size={14} className="text-blue-600" />
              <span>📍 Chachapoyas <span className="text-[10px] ml-0.5 opacity-50">▼</span></span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-blue-600">Inicio</Link>
            <Link href="/buscar" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">Explorar</Link>
            <Link href="/pedidos" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">Mis Pedidos</Link>
            <Link href="/perfil" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">Perfil</Link>
          </nav>

          <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <ShoppingBag size={18} />
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="¿Qué necesitas hoy?"
            aria-label="Buscar productos"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100/80 border border-transparent rounded-xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/10 focus:bg-white transition-all outline-none"
          />
        </form>
      </header>

      {/* Promotional Banners Slider */}
      <section className="mt-4 px-5">
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar pb-2">
          {/* Banner 1: Bienvenida -> Abarrotes */}
          <Link href="/categoria/abarrotes" className="flex-shrink-0 w-full md:w-[60%] snap-start relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white shadow-md group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2 leading-tight">Tu mercado local en un solo lugar 🛒</h3>
                <p className="text-sm opacity-90 leading-snug max-w-[80%]">Compra en tiendas locales como Comercial Collantes con entrega directa.</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white w-fit px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 group-hover:bg-white group-hover:text-blue-600 transition-all">
                Explorar Abarrotes <ChevronRight size={14} />
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          </Link>

          {/* Banner 2: Motor -> Repuestos */}
          <Link href="/categoria/motor" className="flex-shrink-0 w-full md:w-[60%] snap-start relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-rose-600 p-8 text-white shadow-md group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2 leading-tight">¿Buscas repuestos para tu moto? 🔧</h3>
                <p className="text-sm opacity-90 leading-snug max-w-[80%]">Filtra por marca y año al instante en toda la ciudad.</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white w-fit px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 group-hover:bg-white group-hover:text-orange-600 transition-all">
                Ver Repuestos <ChevronRight size={14} />
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          </Link>
        </div>
      </section>

      {/* Hero Section / Categories Grid */}
      <section className="px-5 mt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold tracking-tight">Explorar Categorías</h2>
          <Link href="/buscar" className="text-sm font-semibold text-blue-600 active:opacity-60 transition-opacity">Ver todas</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 pb-4">
          {/* Categorías... */}
          {/* Supermercado */}
          <Link href="/categoria/abarrotes" className="group relative overflow-hidden rounded-2xl bg-emerald-50/50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-emerald-100/50 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm mb-2">
              <ShoppingBag size={20} />
            </div>
            <h3 className="font-bold text-emerald-950 text-[11px]">Supermercado</h3>
          </Link>

          {/* Motor */}
          <Link href="/categoria/motor" className="group relative overflow-hidden rounded-2xl bg-orange-50/50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-orange-100/50 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-orange-600 shadow-sm mb-2">
              <Wrench size={20} />
            </div>
            <h3 className="font-bold text-orange-950 text-[11px]">Repuestos</h3>
          </Link>

          {/* Outfit */}
          <Link href="/categoria/outfit" className="group relative overflow-hidden rounded-2xl bg-blue-50/50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-blue-100/50 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-2">
              <Shirt size={20} />
            </div>
            <h3 className="font-bold text-blue-950 text-[11px]">Moda y Ropa</h3>
          </Link>

          {/* Gadgets */}
          <Link href="/categoria/gadgets" className="group relative overflow-hidden rounded-2xl bg-blue-50/50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-blue-100/50 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-2">
              <Smartphone size={20} />
            </div>
            <h3 className="font-bold text-blue-950 text-[11px]">Tecnología</h3>
          </Link>

          {/* Ferreteria */}
          <Link href="/categoria/ferreteria" className="group relative overflow-hidden rounded-2xl bg-amber-50/50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-amber-100/50 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-amber-600 shadow-sm mb-2">
              <Hammer size={20} />
            </div>
            <h3 className="font-bold text-amber-950 text-[11px]">Ferretería</h3>
          </Link>

          {/* Farmacia */}
          <Link href="/categoria/farmacia" className="group relative overflow-hidden rounded-2xl bg-red-50/50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-red-100/50 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-red-600 shadow-sm mb-2">
              <Pill size={20} />
            </div>
            <h3 className="font-bold text-red-950 text-[11px]">Farmacia</h3>
          </Link>

          {/* Comidas */}
          <Link href="/categoria/comidas" className="group relative overflow-hidden rounded-2xl bg-rose-50/50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-rose-100/50 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-rose-600 shadow-sm mb-2">
              <Utensils size={20} />
            </div>
            <h3 className="font-bold text-rose-950 text-[11px]">Comidas</h3>
          </Link>

          {/* Bebidas */}
          <Link href="/categoria/bebidas" className="group relative overflow-hidden rounded-2xl bg-cyan-50/50 aspect-[16/9] p-3 flex flex-col items-center justify-center text-center active:scale-95 transition-transform cursor-pointer border border-cyan-100/50 shadow-sm">
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-cyan-600 shadow-sm mb-2">
              <Beer size={20} />
            </div>
            <h3 className="font-bold text-cyan-950 text-[11px]">Bebidas</h3>
          </Link>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="mt-8">
        <div className="flex items-center justify-between px-5 mb-4">
          <h2 className="text-lg font-bold tracking-tight">Destacados hoy</h2>
          <Link href="/buscar" className="text-sm font-semibold text-blue-600 active:opacity-60 transition-opacity">Ver más</Link>
        </div>
        
        <div className="flex md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 overflow-x-auto md:overflow-x-visible gap-4 px-5 pb-6 no-scrollbar snap-x snap-mandatory">
          {MOCK_PRODUCTS.slice(0, 12).map((product) => (
            <div key={product.id} className="flex-shrink-0 w-44 md:w-full snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
