"use client";

import React, { useState, useMemo, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, SlidersHorizontal, ChevronDown, ShoppingBag } from "lucide-react";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import { Category, Product, RepuestosProduct, ModaProduct } from "@/types/product";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug as Category;

  const [sortBy, setSortBy] = useState<"asc" | "desc" | "none">("none");
  const [filterBrand, setFilterBrand] = useState<string>("all");
  const [filterSize, setFilterSize] = useState<string>("all");

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = MOCK_PRODUCTS.filter((p) => p.category === slug);

    // Category Specific Filters
    if (slug === "repuestos" && filterBrand !== "all") {
      result = result.filter(
        (p) => (p as RepuestosProduct).attributes.compatibility.brand === filterBrand
      );
    }

    if (slug === "moda" && filterSize !== "all") {
      result = result.filter((p) =>
        (p as ModaProduct).attributes.sizes.includes(filterSize)
      );
    }

    // Common Sorting
    if (sortBy === "asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [slug, sortBy, filterBrand, filterSize]);

  // Derived Filter Options
  const brands = useMemo(() => {
    if (slug !== "repuestos") return [];
    const allBrands = MOCK_PRODUCTS.filter((p) => p.category === "repuestos").map(
      (p) => (p as RepuestosProduct).attributes.compatibility.brand
    );
    return Array.from(new Set(allBrands));
  }, [slug]);

  const sizes = useMemo(() => {
    if (slug !== "moda") return [];
    const allSizes = MOCK_PRODUCTS.filter((p) => p.category === "moda").flatMap(
      (p) => (p as ModaProduct).attributes.sizes
    );
    return Array.from(new Set(allSizes));
  }, [slug]);

  const categoryTitles: Record<Category, string> = {
    abarrotes: "Supermercado local",
    repuestos: "Repuestos y Motores",
    moda: "Moda y Estilo",
    tecnologia: "Tecnología y Gadgets",
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-5 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 active:scale-90 transition-transform"
        >
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-lg font-bold capitalize">{categoryTitles[slug] || slug}</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </header>

      {/* Smart Filters Section */}
      <section className="px-5 py-4 bg-white border-b border-gray-100 flex gap-3 overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-bold border border-indigo-100">
          <SlidersHorizontal size={14} />
          Filtros
        </div>

        {/* Repuestos Specific Filters */}
        {slug === "repuestos" && (
          <div className="relative flex-shrink-0">
            <select 
              className="appearance-none bg-gray-50 border border-gray-100 text-gray-700 text-xs font-semibold rounded-xl pl-3 pr-8 py-2 focus:ring-2 focus:ring-indigo-500/20 outline-none"
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
            >
              <option value="all">Todas las Marcas</option>
              {brands.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        )}

        {/* Moda Specific Filters */}
        {slug === "moda" && (
          <div className="relative flex-shrink-0">
            <select 
              className="appearance-none bg-gray-50 border border-gray-100 text-gray-700 text-xs font-semibold rounded-xl pl-3 pr-8 py-2 focus:ring-2 focus:ring-indigo-500/20 outline-none"
              value={filterSize}
              onChange={(e) => setFilterSize(e.target.value)}
            >
              <option value="all">Todas las Tallas</option>
              {sizes.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        )}

        {/* Price Sort (For all) */}
        <div className="relative flex-shrink-0">
          <select 
            className="appearance-none bg-gray-50 border border-gray-100 text-gray-700 text-xs font-semibold rounded-xl pl-3 pr-8 py-2 focus:ring-2 focus:ring-indigo-500/20 outline-none"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="none">Ordenar por precio</option>
            <option value="asc">Menor a Mayor</option>
            <option value="desc">Mayor a Menor</option>
          </select>
          <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-5 py-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            {filteredProducts.length} Resultados encontrados
          </span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/producto/${product.id}`}
                className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm active:scale-95 transition-all p-2"
              >
                <div className="relative aspect-square rounded-[1.75rem] overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-gray-800 shadow-sm">
                    S/{product.price.toFixed(2)}
                  </div>
                </div>
                <div className="p-2 pt-3">
                  <h3 className="text-xs font-bold text-gray-900 line-clamp-2 leading-tight mb-1 h-8">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-[10px] text-gray-500 font-medium truncate max-w-[70%]">
                      {product.storeName}
                    </p>
                    <div className="bg-indigo-50 p-1.5 rounded-xl text-indigo-600">
                      <ShoppingBag size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-100 p-6 rounded-full mb-4 text-gray-400">
              <ShoppingBag size={48} />
            </div>
            <h3 className="font-bold text-gray-900">No encontramos productos</h3>
            <p className="text-sm text-gray-500 mt-1 px-10">Intenta ajustando los filtros para ver otras opciones.</p>
          </div>
        )}
      </section>
    </main>
  );
}
