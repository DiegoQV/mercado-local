import { Product, Category } from "@/types/product";

/**
 * ESTÁNDARES DE MOCKS - MERCADO DIGITAL LOCAL
 * ==========================================
 * Este archivo contiene la data estática definitiva del MVP.
 * Para añadir nuevas tiendas o productos, siga la estructura manual establecida.
 */

export interface StoreDefinition {
  id: string;
  name: string;
  category: Category;
  whatsapp: string;
  description?: string;
}

/**
 * DIRECTORIO DE TIENDAS
 * Añada aquí las tiendas reales de Chachapoyas.
 */
export const STORES: StoreDefinition[] = [
  { 
    id: 'comercial-collantes', 
    name: 'Comercial Collantes', 
    category: 'abarrotes', // Mapeado a la carpeta /public/images/Supermercado/
    whatsapp: '978410457', 
    description: 'Venta de abarrotes de primera necesidad por mayor y menor.' 
  },
  // Añadir más tiendas aquí siguiendo la misma estructura...
];

/**
 * CATÁLOGO GLOBAL DE PRODUCTOS
 * Mapeado manual y estricto a archivos locales en la carpeta /public/
 */
export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-collantes-aceite-primor',
    name: 'Aceite Vegetal Primor',
    price: 9.50,
    description: 'Aceite vegetal Primor de 1 Litro, ideal para todo tipo de comidas.',
    image: '/images/Supermercado/Comercial Collantes/aceite-vegetal-primor.png',
    category: 'abarrotes',
    storeName: 'Comercial Collantes',
    storeId: 'comercial-collantes',
    whatsappNumber: '978410457',
    attributes: { unit: '1 litro' }
  },
  {
    id: 'prod-collantes-arroz-costeno',
    name: 'Arroz Extra Costeño',
    price: 4.80,
    description: 'Arroz Extra Costeño de 1kg, grano largo y seleccionado.',
    image: '/images/Supermercado/Comercial Collantes/arroz-extra-costeno.png',
    category: 'abarrotes',
    storeName: 'Comercial Collantes',
    storeId: 'comercial-collantes',
    whatsappNumber: '978410457',
    attributes: { unit: '1 kg' }
  },
  {
    id: 'prod-collantes-cafe-altomayo',
    name: 'Café Tostado Alto Mayo',
    price: 18.20,
    description: 'Café gourmet Alto Mayo, tostado y molido, de 250g.',
    image: '/images/Supermercado/Comercial Collantes/cafe-tasted-altomayo.png',
    category: 'abarrotes',
    storeName: 'Comercial Collantes',
    storeId: 'comercial-collantes',
    whatsappNumber: '978410457',
    attributes: { unit: '250 g' }
  },
  {
    id: 'prod-collantes-fideos-vittorio',
    name: 'Fideos Cortos Don Vittorio',
    price: 3.20,
    description: 'Fideos cortos Don Vittorio de 500g, el punto ideal para tus pastas.',
    image: '/images/Supermercado/Comercial Collantes/fideos-cortos-don-vittorio.png',
    category: 'abarrotes',
    storeName: 'Comercial Collantes',
    storeId: 'comercial-collantes',
    whatsappNumber: '978410457',
    attributes: { unit: '500 g' }
  },
  {
    id: 'prod-collantes-leche-gloria',
    name: 'Leche Evaporada Gloria',
    price: 4.20,
    description: 'Leche Gloria Tarro Azul de 400g, enriquecida con vitaminas.',
    image: '/images/Supermercado/Comercial Collantes/leche-evaporada-gloria.png',
    category: 'abarrotes',
    storeName: 'Comercial Collantes',
    storeId: 'comercial-collantes',
    whatsappNumber: '978410457',
    attributes: { unit: '400 g' }
  },
  {
    id: 'prod-collantes-miel-chanchamiel',
    name: 'Miel Silvestre Chanchamiel',
    price: 25.00,
    description: 'Miel silvestre 100% natural de la región Chanchamayo, de 500ml.',
    image: '/images/Supermercado/Comercial Collantes/miel-silvestre-chanchamiel.png',
    category: 'abarrotes',
    storeName: 'Comercial Collantes',
    storeId: 'comercial-collantes',
    whatsappNumber: '978410457',
    attributes: { unit: '500 ml' }
  },
  // Seguir añadiendo productos manualmente aquí...
];
