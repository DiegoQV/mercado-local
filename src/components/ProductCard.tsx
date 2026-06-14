"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/types/product";
import { CATEGORY_STOCK_IMAGES } from "@/lib/mockData";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imgSrc, setImgSrc] = useState(product.image);
  const [hasError, setHasError] = useState(false);

  // Lógica de fallback: si la imagen local falla, usamos la de stock de la categoría
  const handleError = () => {
    if (!hasError) {
      setImgSrc(CATEGORY_STOCK_IMAGES[product.category]);
      setHasError(true);
    }
  };

  return (
    <Link 
      href={`/producto/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm active:scale-95 transition-all p-2 flex flex-col h-full"
    >
      <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50">
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          onError={handleError}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        
        {/* Badge de Precio */}
        <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
          {product.originalPrice && (
            <div className="bg-orange-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full shadow-sm animate-pulse">
              OFERTA
            </div>
          )}
          <div className="bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-gray-800 shadow-sm">
            S/{product.price.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="p-2 pt-3 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">{product.storeName}</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[8px] font-bold text-emerald-600 uppercase">Stock</span>
          </div>
        </div>
        
        <h3 className="text-[11px] font-bold text-gray-900 line-clamp-2 leading-tight mb-2 min-h-[2rem]">
          {product.name}
        </h3>
        
        {/* Precios y Oferta */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] font-black text-blue-600">S/{product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-[9px] text-gray-400 line-through font-medium">
              S/{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto bg-gray-50 group-hover:bg-blue-600 p-1.5 rounded-xl transition-all duration-300">
          <span className="text-[9px] font-bold text-blue-600 group-hover:text-white uppercase pl-1 transition-colors">Entrega Hoy</span>
          <div className="bg-white p-1 rounded-lg text-blue-600 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
            <ShoppingBag size={12} />
          </div>
        </div>
      </div>
    </Link>
  );
};
