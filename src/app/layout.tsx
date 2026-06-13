import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Mercado Digital | Compra Local",
  description: "La plataforma unificada de comercio local para tu ciudad. Abarrotes, Repuestos, Moda y Tecnología en un solo lugar.",
};

import { CartProvider } from "@/context/CartContext";
import CartButton from "@/components/CartButton";
import BottomNavbar from "@/components/BottomNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f9fafb]">
        <CartProvider>
          {children}
          <CartButton />
          <BottomNavbar />
        </CartProvider>
      </body>
    </html>
  );
}
