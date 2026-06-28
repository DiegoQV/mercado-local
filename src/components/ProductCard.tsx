"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { CATEGORY_STOCK_IMAGES } from "@/lib/mockData";
import { AddToCartButton } from "@/components/AddToCartButton";

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

  // Calcula el porcentaje de descuento real en lugar de mostrar "OFERTA" genérico
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <Link
      href={`/producto/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md active:scale-[0.97] transition-all duration-200 flex flex-col h-full"
    >
      {/* ① IMAGEN — Edge-to-edge, protagonista de la tarjeta */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          onError={handleError}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Badge de descuento con porcentaje real */}
        {discountPercent && (
          <div className="absolute top-2 left-2">
            <span className="bg-orange-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm">
              -{discountPercent}%
            </span>
          </div>
        )}
      </div>

      {/* ② CUERPO — Ritmo vertical con jerarquía clara */}
      <div className="px-3 pt-2.5 pb-3 flex flex-col flex-grow">

        {/* ② Nombre del producto */}
        <h3 className="text-[12px] font-bold text-gray-900 line-clamp-2 leading-snug mb-1.5 min-h-[2rem]">
          {product.name}
        </h3>

        {/* ③ Precio — mayor peso visual, solo aparece aquí */}
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="text-[15px] font-black text-blue-600 leading-none">
            S/{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-[10px] text-gray-400 line-through font-medium">
              S/{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* ④ Tienda + Estado de stock — información terciaria */}
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide truncate max-w-[65%]">
            {product.storeName}
          </span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-semibold text-emerald-600">En stock</span>
          </div>
        </div>

        {/* ⑤⑥ Área de acción — controlada por AddToCartButton */}
        <div className="mt-auto">
          <AddToCartButton product={product} />
        </div>
      </div>
    </Link>
  );
};
