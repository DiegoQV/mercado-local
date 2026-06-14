import React from "react";
import Link from "next/link";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import { Metadata } from "next";
import ProductDetailContent from "@/components/ProductDetailContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Producto no encontrado | Mercado Digital",
    };
  }

  return {
    title: `${product.name} | Mercado Digital Chachapoyas`,
    description: `Compra ${product.name} en ${product.storeName}. ${product.description.slice(0, 150)}...`,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-5 text-center">
        <h2 className="text-xl font-bold mb-2">Producto no encontrado</h2>
        <Link href="/" className="text-blue-600 font-medium">Volver al inicio</Link>
      </div>
    );
  }

  return <ProductDetailContent product={product} />;
}
