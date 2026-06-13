"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ClipboardList, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BottomNavbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Buscar", href: "/buscar", icon: Search },
    { name: "Pedidos", href: "/pedidos", icon: ClipboardList },
    { name: "Mi Perfil", href: "/perfil", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 pt-3 pb-6 z-50 flex items-center justify-between shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(
              "flex flex-col items-center gap-1 transition-all active:scale-95",
              isActive ? "text-[#6366f1]" : "text-gray-400"
            )}
          >
            <Icon size={22} className={cn(isActive && "stroke-[2.5]")} />
            <span className={cn("text-[10px]", isActive ? "font-bold" : "font-medium")}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
