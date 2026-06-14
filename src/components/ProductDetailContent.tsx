"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Info, CheckCircle2, ChevronRight, Store, ShoppingBag } from "lucide-react";
import { CATEGORY_STOCK_IMAGES } from "@/lib/mockData";
import { Product, MotorProduct, OutfitProduct, AbarrotesProduct, GadgetProduct, FerreteriaProduct, FarmaciaProduct, ComidaProduct, BebidaProduct } from "@/types/product";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
}

export default function ProductDetailContent({ product }: Props) {
  const { addToCart } = useCart();
  const [imgSrc, setImgSrc] = useState(product.image || "");
  const [hasError, setHasError] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleError = () => {
    if (!hasError) {
      setImgSrc(CATEGORY_STOCK_IMAGES[product.category]);
      setHasError(true);
    }
  };

  return (
    <main className="min-h-screen bg-white pb-32 font-sans overflow-x-hidden">
      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-start md:px-8 md:py-8">
        {/* Product Image Header */}
        <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden md:rounded-3xl rounded-b-3xl shadow-md">
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            onError={handleError}
            className="object-cover"
            priority
          />
          {/* Back Button */}
          <Link 
            href={`/tienda/${product.storeId}`}
            aria-label="Volver a la tienda"
            className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-900 shadow-md active:scale-90 transition-transform"
          >
            <ArrowLeft size={24} />
          </Link>

          {product.originalPrice && (
            <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-2xl font-black text-sm shadow-lg flex flex-col items-center">
              <span className="text-[10px] leading-tight">OFERTA</span>
              <span className="leading-tight">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
            </div>
          )}
        </div>

        <div className="px-6 md:px-0 pt-8 md:pt-0">
          {/* Category & Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className={cn(
              "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
              product.category === 'abarrotes' && "bg-emerald-50 text-emerald-600",
              product.category === 'motor' && "bg-orange-50 text-orange-600",
              product.category === 'outfit' && "bg-blue-50 text-blue-600",
              product.category === 'gadgets' && "bg-blue-50 text-blue-600",
              product.category === 'ferreteria' && "bg-amber-50 text-amber-600",
              product.category === 'farmacia' && "bg-red-50 text-red-600",
              product.category === 'comidas' && "bg-rose-50 text-rose-600",
              product.category === 'bebidas' && "bg-cyan-50 text-cyan-600",
            )}>
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              <CheckCircle2 size={12} className="text-emerald-500" />
              Stock Disponible
            </div>
          </div>

          {/* Title & Price */}
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
            {product.name}
          </h1>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-extrabold text-blue-600">
              S/{product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through font-medium">
                S/{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Store Card */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-blue-600">
                <Store size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">Vendido por</p>
                <h4 className="text-sm font-bold text-gray-900">{product.storeName}</h4>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-300" />
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Info size={20} className="text-blue-600" />
              Descripción
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {product.description}
            </p>
          </div>

          {/* Attributes Section */}
          <div className="mb-8 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Detalles técnicos</h3>
            
            {/* Abarrotes */}
            {product.category === 'abarrotes' && (product as AbarrotesProduct).attributes?.unit && (
              <div className="flex items-center justify-between py-3 border-b border-gray-50">
                <span className="text-gray-500 text-sm">Unidad de medida</span>
                <span className="font-bold text-gray-900">{(product as AbarrotesProduct).attributes.unit}</span>
              </div>
            )}

            {/* Motor */}
            {product.category === 'motor' && (product as MotorProduct).attributes?.compatibility && (
              <div className="bg-orange-50/50 rounded-xl p-4 border border-orange-100/50">
                <p className="text-xs font-bold text-orange-800 uppercase mb-3">Compatibilidad</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-orange-600 font-bold uppercase">Marca</p>
                    <p className="font-bold text-gray-900">{(product as MotorProduct).attributes.compatibility.brand}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-orange-600 font-bold uppercase">Modelo</p>
                    <p className="font-bold text-gray-900">{(product as MotorProduct).attributes.compatibility.model}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[10px] text-orange-600 font-bold uppercase">Año</p>
                    <p className="font-bold text-gray-900">{(product as MotorProduct).attributes.compatibility.year}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Outfit */}
            {product.category === 'outfit' && (product as OutfitProduct).attributes?.sizes && (
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase mb-3">Tallas disponibles</p>
                  <div className="flex flex-wrap gap-2">
                    {(product as OutfitProduct).attributes.sizes.map(size => (
                      <div key={size} className="w-10 h-10 rounded-xl border-2 border-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase mb-3">Colores</p>
                  <div className="flex flex-wrap gap-2">
                    {(product as OutfitProduct).attributes.colors?.map(color => (
                      <div key={color} className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs font-bold text-gray-700">
                        {color}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Gadgets */}
            {product.category === 'gadgets' && (product as GadgetProduct).attributes?.warrantyMonths !== undefined && (
               <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Garantía</span>
                  <span className="font-bold text-gray-900">{(product as GadgetProduct).attributes.warrantyMonths} meses</span>
                </div>
                {Object.entries((product as GadgetProduct).attributes.specs || {}).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-500 text-sm">{key}</span>
                    <span className="font-bold text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Ferretería */}
            {product.category === 'ferreteria' && (product as FerreteriaProduct).attributes?.brand && (
              <div className="flex items-center justify-between py-3 border-b border-gray-50">
                <span className="text-gray-500 text-sm">Marca</span>
                <span className="font-bold text-gray-900">{(product as FerreteriaProduct).attributes.brand}</span>
              </div>
            )}

            {/* Farmacia */}
            {product.category === 'farmacia' && (product as FarmaciaProduct).attributes?.prescriptionRequired !== undefined && (
              <div className="flex items-center justify-between py-3 border-b border-gray-50">
                <span className="text-gray-500 text-sm">Requiere Receta</span>
                <span className={cn(
                  "font-bold",
                  (product as FarmaciaProduct).attributes.prescriptionRequired ? "text-red-500" : "text-emerald-500"
                )}>
                  {(product as FarmaciaProduct).attributes.prescriptionRequired ? 'SÍ' : 'NO'}
                </span>
              </div>
            )}

            {/* Comidas */}
            {product.category === 'comidas' && (product as ComidaProduct).attributes?.portion && (
              <div className="flex items-center justify-between py-3 border-b border-gray-50">
                <span className="text-gray-500 text-sm">Porción / Presentación</span>
                <span className="font-bold text-gray-900">{(product as ComidaProduct).attributes.portion}</span>
              </div>
            )}

            {/* Bebidas */}
            {product.category === 'bebidas' && (product as BebidaProduct).attributes?.unit && (
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500 text-sm">Presentación</span>
                <span className="font-bold text-gray-900">{(product as BebidaProduct).attributes.unit}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Button Wrapper (Non-fixed to allow scrolling above Navbar) */}
      <div className="mt-6 px-6 pb-2 md:px-8">
        <button
          onClick={handleAddToCart}
          className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-md active:scale-[0.98] transition-all md:max-w-xs md:ml-auto"
        >
          <ShoppingBag size={24} />
          Añadir al Carrito
        </button>
      </div>
    </main>
  );
}
