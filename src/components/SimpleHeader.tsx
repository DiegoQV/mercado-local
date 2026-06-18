"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, MapPin, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface SimpleHeaderProps {
  title?: string;
  showBackButton?: boolean;
}

export const SimpleHeader: React.FC<SimpleHeaderProps> = ({ title, showBackButton = false }) => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white w-full border-b border-gray-100 px-5 pt-6 pb-4 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          {showBackButton && (
            <button
              onClick={() => router.back()}
              className="p-2 -ml-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-900" />
            </button>
          )}
          <div className="flex flex-col text-left">
            <Link href="/">
              <h1 className="text-xl font-bold tracking-tight text-blue-600">
                Mercado<span className="text-gray-900">Digital</span>
              </h1>
            </Link>
            <div className="flex items-center gap-1 text-sm font-semibold text-gray-800 mt-0.5 cursor-pointer active:opacity-70 transition-opacity">
              <MapPin size={14} className="text-blue-600" />
              <span>📍 Chachapoyas <span className="text-[10px] ml-0.5 opacity-50">▼</span></span>
            </div>
          </div>
        </div>

        <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
          <ShoppingBag size={18} />
        </div>
      </div>
      {title && (
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
      )}
    </header>
  );
};
