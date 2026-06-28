"use client";

import React, { useState, useCallback } from "react";
import { Minus, Plus, Check, Zap } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
}

/**
 * AddToCartButton
 *
 * Renderiza el área de acción inferior de la tarjeta de producto.
 * Maneja dos estados visuales:
 *   1. Sin producto en carrito → badge "Entrega hoy" + botón "+" circular
 *   2. Con producto en carrito → selector de cantidad [-] n [+]
 *
 * Toda interacción llama e.stopPropagation() para evitar que el
 * <Link> padre navegue al hacer clic en los controles del carrito.
 */
export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { items, addToCart, updateQuantity, removeFromCart } = useCart();
  const [showCheck, setShowCheck] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const cartItem = items.find((item) => item.product.id === product.id);
  const quantity = cartItem?.quantity ?? 0;

  // Agrega al carrito y dispara la microanimación de confirmación
  const handleAdd = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (isAdding) return; // evita doble-tap
      setIsAdding(true);
      setShowCheck(true);
      addToCart(product);
      setTimeout(() => {
        setShowCheck(false);
        setIsAdding(false);
      }, 550);
    },
    [addToCart, product, isAdding]
  );

  const handleIncrease = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      updateQuantity(product.id, quantity + 1);
    },
    [updateQuantity, product.id, quantity]
  );

  const handleDecrease = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (quantity <= 1) {
        removeFromCart(product.id);
      } else {
        updateQuantity(product.id, quantity - 1);
      }
    },
    [updateQuantity, removeFromCart, product.id, quantity]
  );

  /* ── Estado: Producto NO está en el carrito ──────────────────────── */
  if (quantity === 0) {
    return (
      <div className="flex items-center justify-between gap-2 w-full">
        {/* Badge informativo — Entrega hoy */}
        <div
          className="inline-flex items-center gap-1 bg-blue-50 border border-blue-100 px-2 py-1 rounded-full flex-shrink-0"
          aria-hidden="true"
        >
          <Zap size={8} className="text-blue-500 fill-blue-500" />
          <span className="text-[9px] font-bold text-blue-600 leading-none whitespace-nowrap">
            Entrega hoy
          </span>
        </div>

        {/* Botón circular "+" */}
        <button
          onClick={handleAdd}
          aria-label={`Agregar ${product.name} al carrito`}
          disabled={isAdding}
          className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-90 disabled:opacity-70
                     text-white flex items-center justify-center shadow-sm
                     transition-all duration-150 flex-shrink-0"
        >
          {showCheck ? (
            <Check
              size={14}
              strokeWidth={3}
              className="animate-check-in"
              aria-hidden="true"
            />
          ) : (
            <Plus size={16} strokeWidth={2.5} aria-hidden="true" />
          )}
        </button>
      </div>
    );
  }

  /* ── Estado: Producto EN el carrito → selector de cantidad ───────── */
  return (
    <div
      className="flex items-center justify-between w-full bg-blue-50 border border-blue-100 rounded-full px-1 py-[3px] animate-cart-pop"
      role="group"
      aria-label={`Cantidad de ${product.name} en el carrito: ${quantity}`}
    >
      {/* Botón disminuir / eliminar */}
      <button
        onClick={handleDecrease}
        aria-label={
          quantity === 1
            ? `Eliminar ${product.name} del carrito`
            : `Disminuir cantidad de ${product.name}`
        }
        className="w-6 h-6 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-90
                   text-white flex items-center justify-center
                   transition-all duration-150 flex-shrink-0"
      >
        <Minus size={11} strokeWidth={2.5} aria-hidden="true" />
      </button>

      {/* Cantidad actual */}
      <span
        className="text-[13px] font-black text-blue-700 min-w-[1.5rem] text-center tabular-nums select-none"
        aria-live="polite"
      >
        {quantity}
      </span>

      {/* Botón aumentar */}
      <button
        onClick={handleIncrease}
        aria-label={`Aumentar cantidad de ${product.name}`}
        className="w-6 h-6 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-90
                   text-white flex items-center justify-center
                   transition-all duration-150 flex-shrink-0"
      >
        <Plus size={11} strokeWidth={2.5} aria-hidden="true" />
      </button>
    </div>
  );
};
