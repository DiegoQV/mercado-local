"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <Link
      href="/checkout"
      className="fixed bottom-28 right-6 w-16 h-16 bg-[#6366f1] rounded-full flex items-center justify-center text-white shadow-2xl shadow-indigo-300 z-40 active:scale-95 transition-transform"
    >
      <div className="relative">
        <ShoppingBag size={28} />
        <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
          {totalItems}
        </span>
      </div>
    </Link>
  );
}
