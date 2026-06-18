"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, MapPin } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export const Header: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white w-full border-b border-gray-100 px-5 pt-6 pb-4 shadow-sm">
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
  );
};
