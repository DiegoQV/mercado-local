"use client";

import React from "react";
import Link from "next/link";
import { Search, ShoppingBag, Wrench, Shirt, Smartphone, MapPin, Hammer, Pill, Utensils, Beer } from "lucide-react";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ProductCard } from "@/components/ProductCard";
import { HeroSlider } from "@/components/HeroSlider";

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

      {/* Hero Slider */}
      <section className="mt-4 px-5">
        <HeroSlider />
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
