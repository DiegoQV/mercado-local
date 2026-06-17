import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Mercado Digital Chachapoyas | Compra Local Online",
  description: "Accede a las mejores tiendas locales de Chachapoyas. Abarrotes, repuestos, moda y más con entrega rápida y pago seguro vía Yape.",
  keywords: ["Chachapoyas", "Marketplace local", "Abarrotes Chachapoyas", "Repuestos Chachapoyas", "Compra online Chachapoyas"],
  openGraph: {
    title: "Mercado Digital Chachapoyas | Compra Local",
    description: "Tu mercado local en un solo lugar. Compra en Comercial Collantes y establecimientos favoritos de Chachapoyas.",
    type: "website",
    locale: "es_PE",
    siteName: "Mercado Digital",
  },
};

import { CartProvider } from "@/context/CartContext";
import CartButton from "@/components/CartButton";
import BottomNavbar from "@/components/BottomNavbar";
import { AnnouncementBar } from "@/components/AnnouncementBar";

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
      <body className="min-h-full flex flex-col bg-[#f9fafb] antialiased">
        <CartProvider>
          <div className="flex-grow w-full max-w-md md:max-w-4xl lg:max-w-6xl mx-auto bg-white md:shadow-xl md:shadow-blue-900/5 min-h-screen relative overflow-x-hidden">
            <AnnouncementBar />
            {children}
          </div>
          <CartButton />
          <div className="md:hidden">
            <BottomNavbar />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
