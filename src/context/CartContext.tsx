"use client";

import React, { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import { CartItem, Product } from "@/types/product";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  storeName: string | null;
}

const CART_EVENT = "mercado-digital-cart-change";
const EMPTY_CART = "[]";
const CartContext = createContext<CartContextType | undefined>(undefined);

function subscribeToCart(callback: () => void) {
  window.addEventListener(CART_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CART_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getCartSnapshot() {
  return localStorage.getItem("cart") ?? EMPTY_CART;
}

function getServerCartSnapshot() {
  return EMPTY_CART;
}

function parseCart(serialized: string): CartItem[] {
  try {
    return JSON.parse(serialized) as CartItem[];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  localStorage.setItem("cart", JSON.stringify(items));
  window.dispatchEvent(new Event(CART_EVENT));
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const serializedCart = useSyncExternalStore(subscribeToCart, getCartSnapshot, getServerCartSnapshot);
  const items = useMemo(() => parseCart(serializedCart), [serializedCart]);

  const addToCart = (product: Product, quantity = 1) => {
    if (items.length > 0 && items[0].product.storeName !== product.storeName) {
      alert(`Solo puedes añadir productos de la tienda "${items[0].product.storeName}" actualmente. Vacía tu carrito para comprar en otra tienda.`);
      return;
    }
    const existingItem = items.find((item) => item.product.id === product.id);
    saveCart(existingItem
      ? items.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      : [...items, { product, quantity }]
    );
  };

  const removeFromCart = (productId: string) => {
    saveCart(items.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    saveCart(items.map((item) => item.product.id === productId ? { ...item, quantity } : item));
  };

  const clearCart = () => saveCart([]);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const storeName = items[0]?.product.storeName ?? null;

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, subtotal, storeName }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
