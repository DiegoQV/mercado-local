"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import { ProductCard } from "@/components/ProductCard";
import { Search, ChevronLeft } from "lucide-react";
import Link from "next/link";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const searchLower = query.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="px-5 pt-6 pb-28">
      <div className="flex items-center gap-3 mb-6">
        <Link 
          href="/" 
          className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 active:scale-95 transition-transform"
        >
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-xl font-bold">
          {query ? `Resultados para "${query}"` : "Explorar Productos"}
        </h1>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
            <Search size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">No encontramos resultados</h3>
          <p className="text-sm text-gray-500 mt-1 max-w-[200px]">
            Intenta con otras palabras clave o busca por categorías.
          </p>
          <Link 
            href="/"
            className="mt-6 text-sm font-bold text-blue-600 bg-blue-50 px-6 py-2 rounded-full"
          >
            Volver al inicio
          </Link>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      }>
        <SearchResults />
      </Suspense>
    </main>
  );
}
