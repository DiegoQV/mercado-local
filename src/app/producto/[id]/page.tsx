"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MessageCircle, Info, CheckCircle2, ChevronRight, Store } from "lucide-react";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import { Product, RepuestosProduct, ModaProduct, AbarrotesProduct, TecnologiaProduct } from "@/types/product";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  
  const product = MOCK_PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-5 text-center">
        <h2 className="text-xl font-bold mb-2">Producto no encontrado</h2>
        <Link href="/" className="text-indigo-600 font-medium">Volver al inicio</Link>
      </div>
    );
  }

  const handleWhatsAppAction = () => {
    const message = `¡Hola! Vi tu producto "${product.name}" con precio S/${product.price.toFixed(2)} en el Mercado Digital de la ciudad y estoy muy interesado. ¿Tienen disponibilidad en su tienda ${product.storeName}?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${product.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-white pb-32">
      {/* Product Image Header */}
      <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden rounded-b-[3rem] shadow-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
        {/* Back Button */}
        <Link 
          href={`/categoria/${product.category}`}
          className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-900 shadow-md active:scale-90 transition-transform"
        >
          <ArrowLeft size={24} />
        </Link>
      </div>

      <div className="px-6 pt-8">
        {/* Category & Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className={cn(
            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
            product.category === 'abarrotes' && "bg-emerald-50 text-emerald-600",
            product.category === 'repuestos' && "bg-orange-50 text-orange-600",
            product.category === 'moda' && "bg-purple-50 text-purple-600",
            product.category === 'tecnologia' && "bg-blue-50 text-blue-600",
          )}>
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
            <CheckCircle2 size={12} className="text-emerald-500" />
            Verificado
          </div>
        </div>

        {/* Title & Price */}
        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
          {product.name}
        </h1>
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-4xl font-extrabold text-[#6366f1]">
            S/{product.price.toFixed(2)}
          </span>
          <span className="text-gray-400 text-sm font-medium">IVA incluido</span>
        </div>

        {/* Store Card */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-3xl border border-gray-100 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm text-indigo-600">
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
            <Info size={20} className="text-indigo-600" />
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
          {product.category === 'abarrotes' && (
            <div className="flex items-center justify-between py-3 border-b border-gray-50">
              <span className="text-gray-500 text-sm">Unidad de medida</span>
              <span className="font-bold text-gray-900">{(product as AbarrotesProduct).attributes.unit}</span>
            </div>
          )}

          {/* Repuestos */}
          {product.category === 'repuestos' && (
            <div className="bg-orange-50/50 rounded-2xl p-4 border border-orange-100">
              <p className="text-xs font-bold text-orange-800 uppercase mb-3">Compatibilidad</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-orange-600 font-bold uppercase">Marca</p>
                  <p className="font-bold text-gray-900">{(product as RepuestosProduct).attributes.compatibility.brand}</p>
                </div>
                <div>
                  <p className="text-[10px] text-orange-600 font-bold uppercase">Modelo</p>
                  <p className="font-bold text-gray-900">{(product as RepuestosProduct).attributes.compatibility.model}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] text-orange-600 font-bold uppercase">Año</p>
                  <p className="font-bold text-gray-900">{(product as RepuestosProduct).attributes.compatibility.year}</p>
                </div>
              </div>
            </div>
          )}

          {/* Moda */}
          {product.category === 'moda' && (
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-3">Tallas disponibles</p>
                <div className="flex flex-wrap gap-2">
                  {(product as ModaProduct).attributes.sizes.map(size => (
                    <div key={size} className="w-10 h-10 rounded-xl border-2 border-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-3">Colores</p>
                <div className="flex flex-wrap gap-2">
                  {(product as ModaProduct).attributes.colors.map(color => (
                    <div key={color} className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs font-bold text-gray-700">
                      {color}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tecnologia */}
          {product.category === 'tecnologia' && (
             <div className="space-y-2">
              <div className="flex items-center justify-between py-2 border-b border-gray-50">
                <span className="text-gray-500 text-sm">Garantía</span>
                <span className="font-bold text-gray-900">{(product as TecnologiaProduct).attributes.warrantyMonths} meses</span>
              </div>
              {Object.entries((product as TecnologiaProduct).attributes.specs || {}).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">{key}</span>
                  <span className="font-bold text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fixed WhatsApp CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-white/0 z-50">
        <button
          onClick={handleWhatsAppAction}
          className="w-full bg-[#25D366] text-white py-5 rounded-[2rem] font-bold text-lg flex items-center justify-center gap-3 shadow-xl active:scale-[0.98] transition-all"
        >
          <MessageCircle size={24} fill="currentColor" />
          Pedir por WhatsApp
        </button>
      </div>
    </main>
  );
}
