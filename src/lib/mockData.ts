import { Product, Category } from "@/types/product";

/**
 * ESTÁNDARES DE MOCKS - MERCADO DIGITAL LOCAL
 * ==========================================
 * Este archivo contiene la data estática definitiva del MVP.
 * 30 Tiendas Reales | 600 Productos con Lógica Predictiva de Imágenes.
 */

export interface StoreDefinition {
  id: string;
  name: string;
  category: Category;
  whatsapp: string;
  description?: string;
}

export const CATEGORY_STOCK_IMAGES: Record<Category, string> = {
  abarrotes: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
  farmacia: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
  ferreteria: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
  outfit: "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
  gadgets: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
  motor: "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
  comidas: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
  bebidas: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?q=80&w=800"
};

const OUTFIT_PRODUCT_IMAGES: Record<string, string> = {
  "Polo Algodón Pima": "/images/Moda-Ropa/polo-algodon-pima.jpg",
  "Jeans Slim Fit": "/images/Moda-Ropa/jeans-slim-fit.jpg",
  "Zapatillas Urbanas": "/images/Moda-Ropa/zapatillas-urbanas.jpg",
  "Casaca Cortavientos": "/images/Moda-Ropa/casaca-cortavientos.jpg",
  "Camisa Manga Larga": "/images/Moda-Ropa/camisa-manga-larga.jpg",
  "Short de Verano": "/images/Moda-Ropa/short-de-verano.jpg",
  "Vestido de Noche": "/images/Moda-Ropa/vestido-de-noche.jpg",
  "Blusa de Seda": "/images/Moda-Ropa/blusa-de-seda.jpg",
  "Falda Plisada": "/images/Moda-Ropa/falda-plisada.jpg",
  "Casaca de Cuero Sintético": "/images/Moda-Ropa/casaca-de-cuero-sintetico.jpg",
  "Gorra Amazon View": "/images/Moda-Ropa/gorra-amazon-view.jpg",
  "Lentes de Sol Polarizados": "/images/Moda-Ropa/lentes-de-sol-polarizados.jpg",
  "Reloj de Pulsera Análogo": "/images/Moda-Ropa/reloj-de-pulsera-analogo.jpg",
  "Cinturón de Cuero": "/images/Moda-Ropa/cinturon-de-cuero.jpg",
  "Medias Deportivas x3": "/images/Moda-Ropa/medias-deportivasx3.jpg",
  "Zapatos de Vestir": "/images/Moda-Ropa/zapatos-de-vestir.jpg",
  "Mocasines Casuales": "/images/Moda-Ropa/mocasines-casuales.jpg",
  "Cartera de Mano": "/images/Moda-Ropa/cartera-de-mano.jpg",
  "Mochila Urbana": "/images/Moda-Ropa/mochila-urbana.jpg",
  "Billetera de Cuero": "/images/Moda-Ropa/billetera-de-cuero.jpg"
};

export const STORES: StoreDefinition[] = [
  {
    "id": "comercial-collantes",
    "name": "Comercial Collantes",
    "category": "abarrotes",
    "whatsapp": "978410457",
    "description": "Los mejores productos de Supermercado en Comercial Collantes. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "supermercado-el-bosque",
    "name": "Supermercado El Bosque",
    "category": "abarrotes",
    "whatsapp": "945678123",
    "description": "Los mejores productos de Supermercado en Supermercado El Bosque. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "minimarket-la-estrecha",
    "name": "Minimarket La Estrecha",
    "category": "abarrotes",
    "whatsapp": "912345678",
    "description": "Los mejores productos de Supermercado en Minimarket La Estrecha. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "super-el-sol",
    "name": "Super El Sol",
    "category": "abarrotes",
    "whatsapp": "987654321",
    "description": "Los mejores productos de Supermercado en Super El Sol. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "abarrotes-san-juan",
    "name": "Abarrotes San Juan",
    "category": "abarrotes",
    "whatsapp": "934567890",
    "description": "Los mejores productos de Supermercado en Abarrotes San Juan. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "botica-amazonas",
    "name": "Botica Amazonas",
    "category": "farmacia",
    "whatsapp": "945123456",
    "description": "Los mejores productos de Farmacia en Botica Amazonas. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "inkafarma",
    "name": "Inkafarma",
    "category": "farmacia",
    "whatsapp": "956234567",
    "description": "Los mejores productos de Farmacia en Inkafarma. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "mifarma",
    "name": "MiFarma",
    "category": "farmacia",
    "whatsapp": "967345678",
    "description": "Los mejores productos de Farmacia en MiFarma. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "botica-salud",
    "name": "Botica Salud",
    "category": "farmacia",
    "whatsapp": "978456789",
    "description": "Los mejores productos de Farmacia en Botica Salud. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "farmacia-chachapoyas",
    "name": "Farmacia Chachapoyas",
    "category": "farmacia",
    "whatsapp": "989567890",
    "description": "Los mejores productos de Farmacia en Farmacia Chachapoyas. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "ferreteria-el-progreso",
    "name": "Ferretería El Progreso",
    "category": "ferreteria",
    "whatsapp": "912123456",
    "description": "Los mejores productos de Ferretería en Ferretería El Progreso. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "comercial-hidro",
    "name": "Comercial Hidro",
    "category": "ferreteria",
    "whatsapp": "923234567",
    "description": "Los mejores productos de Ferretería en Comercial Hidro. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "ferreteria-la-solucion",
    "name": "Ferretería La Solución",
    "category": "ferreteria",
    "whatsapp": "934345678",
    "description": "Los mejores productos de Ferretería en Ferretería La Solución. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "el-martillo",
    "name": "El Martillo",
    "category": "ferreteria",
    "whatsapp": "945456789",
    "description": "Los mejores productos de Ferretería en El Martillo. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "construye-facil",
    "name": "Construye Fácil",
    "category": "ferreteria",
    "whatsapp": "956567890",
    "description": "Los mejores productos de Ferretería en Construye Fácil. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "boutique-pasarela",
    "name": "Boutique Pasarela",
    "category": "outfit",
    "whatsapp": "911111111",
    "description": "Los mejores productos de Ropa y Calzado en Boutique Pasarela. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "calzado-real",
    "name": "Calzado Real",
    "category": "outfit",
    "whatsapp": "922222222",
    "description": "Los mejores productos de Ropa y Calzado en Calzado Real. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "moda-amazonas",
    "name": "Moda Amazonas",
    "category": "outfit",
    "whatsapp": "933333333",
    "description": "Los mejores productos de Ropa y Calzado en Moda Amazonas. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "sport-center",
    "name": "Sport Center",
    "category": "outfit",
    "whatsapp": "944444444",
    "description": "Los mejores productos de Ropa y Calzado en Sport Center. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "textil-chacha",
    "name": "Textil Chacha",
    "category": "outfit",
    "whatsapp": "955555555",
    "description": "Los mejores productos de Ropa y Calzado en Textil Chacha. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "amazonas-tech",
    "name": "Amazonas Tech",
    "category": "gadgets",
    "whatsapp": "966666666",
    "description": "Los mejores productos de Tecnología en Amazonas Tech. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "mundo-celular",
    "name": "Mundo Celular",
    "category": "gadgets",
    "whatsapp": "977777777",
    "description": "Los mejores productos de Tecnología en Mundo Celular. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "pc-fast",
    "name": "PC Fast",
    "category": "gadgets",
    "whatsapp": "988888888",
    "description": "Los mejores productos de Tecnología en PC Fast. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "smart-store",
    "name": "Smart Store",
    "category": "gadgets",
    "whatsapp": "999999999",
    "description": "Los mejores productos de Tecnología en Smart Store. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "gadget-place",
    "name": "Gadget Place",
    "category": "gadgets",
    "whatsapp": "900000000",
    "description": "Los mejores productos de Tecnología en Gadget Place. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "repuestos-el-cholo",
    "name": "Repuestos El Cholo",
    "category": "motor",
    "whatsapp": "912312312",
    "description": "Los mejores productos de Repuestos en Repuestos El Cholo. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "motorepuestos-san-pedro",
    "name": "Motorepuestos San Pedro",
    "category": "motor",
    "whatsapp": "923423423",
    "description": "Los mejores productos de Repuestos en Motorepuestos San Pedro. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "todo-motor",
    "name": "Todo Motor",
    "category": "motor",
    "whatsapp": "934534534",
    "description": "Los mejores productos de Repuestos en Todo Motor. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "mecanica-pro",
    "name": "Mecánica Pro",
    "category": "motor",
    "whatsapp": "945645645",
    "description": "Los mejores productos de Repuestos en Mecánica Pro. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "el-ciguenal",
    "name": "El Cigüeñal",
    "category": "motor",
    "whatsapp": "956756756",
    "description": "Los mejores productos de Repuestos en El Cigüeñal. Calidad garantizada en Chachapoyas."
  },
  {
    "id": "el-horno-pollerya",
    "name": "El Horno Pollería",
    "category": "comidas",
    "whatsapp": "981234567",
    "description": "El mejor Pollo a la Brasa y platos típicos de Chachapoyas en El Horno Pollería."
  },
  {
    "id": "licorerya-el-brindis",
    "name": "Licorería El Brindis",
    "category": "bebidas",
    "whatsapp": "982345678",
    "description": "Gran variedad de licores, gaseosas y bebidas frías en Licorería El Brindis."
  }
];

const RAW_MOCK_PRODUCTS: Product[] = [
  {
    "id": "prod-comer-aceite-vegetal--0",
    "name": "Aceite Vegetal Primor",
    "price": 63,
    "description": "Aceite Vegetal Primor de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/aceite-vegetal-primor.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-arroz-extra-cos-1",
    "name": "Arroz Extra Costeño",
    "price": 81,
    "description": "Arroz Extra Costeño de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/arroz-extra-costeño.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-cafe-tostado-al-2",
    "name": "Café Tostado Alto Mayo",
    "price": 28,
    "description": "Café Tostado Alto Mayo de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/cafe-tostado-alto-mayo.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-fideos-don-vitt-3",
    "name": "Fideos Don Vittorio",
    "price": 60,
    "description": "Fideos Don Vittorio de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/fideos-cortos-don-vittorio.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-leche-evaporada-4",
    "name": "Leche Evaporada Gloria",
    "price": 27,
    "description": "Leche Evaporada Gloria de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/leche-evaporada-gloria.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-miel-silvestre--5",
    "name": "Miel Silvestre Chanchamiel",
    "price": 59,
    "description": "Miel Silvestre Chanchamiel de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/miel-silvestre-chanchamiel.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-azucar-rubia-ca-6",
    "name": "Azúcar Rubia Cartavio",
    "price": 72,
    "description": "Azúcar Rubia Cartavio de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/azucar-rubia-cartavio.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-atun-real-en-tr-7",
    "name": "Atún Real en Trozos",
    "price": 75,
    "description": "Atún Real en Trozos de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/atun-real-en-trozos.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-lentejas-costen-8",
    "name": "Lentejas Costeño",
    "price": 30,
    "description": "Lentejas Costeño de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/lentejas-costeño.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-avena-3-ositos-9",
    "name": "Avena 3 Ositos",
    "price": 68,
    "description": "Avena 3 Ositos de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/avena-3-ositos.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-yogurt-gloria-f-10",
    "name": "Yogurt Gloria Fresa",
    "price": 19,
    "description": "Yogurt Gloria Fresa de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/yogurt-gloria-fresa.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-galletas-soda-f-11",
    "name": "Galletas Soda Field",
    "price": 42,
    "description": "Galletas Soda Field de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/galletas-soda-field.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-detergente-opal-12",
    "name": "Detergente Opal",
    "price": 47,
    "originalPrice": 59,
    "description": "Detergente Opal de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/detergente-opal.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-jabon-bolivar-13",
    "name": "Jabón Bolívar",
    "price": 72,
    "originalPrice": 91,
    "description": "Jabón Bolívar de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/jabon-bolivar.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-papel-higienico-14",
    "name": "Papel Higiénico Elite",
    "price": 73,
    "description": "Papel Higiénico Elite de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/papel-higienico-elite.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-aceite-de-oliva-15",
    "name": "Aceite de Oliva Extra Virgen",
    "price": 32,
    "originalPrice": 41,
    "description": "Aceite de Oliva Extra Virgen de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/aceite-de-oliva-extra-virgen.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-sal-de-maras-16",
    "name": "Sal de Maras",
    "price": 72,
    "originalPrice": 91,
    "description": "Sal de Maras de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/sal-de-maras.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-quinua-real-1kg-17",
    "name": "Quinua Real 1kg",
    "price": 41,
    "description": "Quinua Real 1kg de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/quinua-real-1kg.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-filete-de-cabal-18",
    "name": "Filete de Caballa",
    "price": 13,
    "description": "Filete de Caballa de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/filete-de-caballa.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "comercial-collantes-mayonesa-alacen-19",
    "name": "Mayonesa Alacena",
    "price": 54,
    "description": "Mayonesa Alacena de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/comercial-collantes/mayonesa-alacena.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-aceite-vegetal--0",
    "name": "Aceite Vegetal Primor",
    "price": 18,
    "description": "Aceite Vegetal Primor de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-arroz-extra-cos-1",
    "name": "Arroz Extra Costeño",
    "price": 29,
    "description": "Arroz Extra Costeño de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-cafe-tostado-al-2",
    "name": "Café Tostado Alto Mayo",
    "price": 45,
    "description": "Café Tostado Alto Mayo de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-fideos-don-vitt-3",
    "name": "Fideos Don Vittorio",
    "price": 80,
    "description": "Fideos Don Vittorio de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-leche-evaporada-4",
    "name": "Leche Evaporada Gloria",
    "price": 28,
    "description": "Leche Evaporada Gloria de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-miel-silvestre--5",
    "name": "Miel Silvestre Chanchamiel",
    "price": 22,
    "originalPrice": 28,
    "description": "Miel Silvestre Chanchamiel de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-azucar-rubia-ca-6",
    "name": "Azúcar Rubia Cartavio",
    "price": 37,
    "originalPrice": 47,
    "description": "Azúcar Rubia Cartavio de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-atun-real-en-tr-7",
    "name": "Atún Real en Trozos",
    "price": 75,
    "description": "Atún Real en Trozos de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-lentejas-costen-8",
    "name": "Lentejas Costeño",
    "price": 55,
    "description": "Lentejas Costeño de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-avena-3-ositos-9",
    "name": "Avena 3 Ositos",
    "price": 32,
    "description": "Avena 3 Ositos de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-yogurt-gloria-f-10",
    "name": "Yogurt Gloria Fresa",
    "price": 83,
    "description": "Yogurt Gloria Fresa de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-galletas-soda-f-11",
    "name": "Galletas Soda Field",
    "price": 47,
    "description": "Galletas Soda Field de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-detergente-opal-12",
    "name": "Detergente Opal",
    "price": 72,
    "description": "Detergente Opal de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-jabon-bolivar-13",
    "name": "Jabón Bolívar",
    "price": 69,
    "description": "Jabón Bolívar de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-papel-higienico-14",
    "name": "Papel Higiénico Elite",
    "price": 21,
    "description": "Papel Higiénico Elite de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-aceite-de-oliva-15",
    "name": "Aceite de Oliva Extra Virgen",
    "price": 38,
    "originalPrice": 48,
    "description": "Aceite de Oliva Extra Virgen de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-sal-de-maras-16",
    "name": "Sal de Maras",
    "price": 52,
    "originalPrice": 66,
    "description": "Sal de Maras de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-quinua-real-1kg-17",
    "name": "Quinua Real 1kg",
    "price": 30,
    "description": "Quinua Real 1kg de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-filete-de-cabal-18",
    "name": "Filete de Caballa",
    "price": 25,
    "description": "Filete de Caballa de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "supermercado-el-bosque-mayonesa-alacen-19",
    "name": "Mayonesa Alacena",
    "price": 90,
    "description": "Mayonesa Alacena de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-aceite-vegetal--0",
    "name": "Aceite Vegetal Primor",
    "price": 17,
    "description": "Aceite Vegetal Primor de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-arroz-extra-cos-1",
    "name": "Arroz Extra Costeño",
    "price": 30,
    "description": "Arroz Extra Costeño de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-cafe-tostado-al-2",
    "name": "Café Tostado Alto Mayo",
    "price": 60,
    "description": "Café Tostado Alto Mayo de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-fideos-don-vitt-3",
    "name": "Fideos Don Vittorio",
    "price": 84,
    "description": "Fideos Don Vittorio de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-leche-evaporada-4",
    "name": "Leche Evaporada Gloria",
    "price": 32,
    "originalPrice": 41,
    "description": "Leche Evaporada Gloria de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-miel-silvestre--5",
    "name": "Miel Silvestre Chanchamiel",
    "price": 51,
    "description": "Miel Silvestre Chanchamiel de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-azucar-rubia-ca-6",
    "name": "Azúcar Rubia Cartavio",
    "price": 47,
    "description": "Azúcar Rubia Cartavio de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-atun-real-en-tr-7",
    "name": "Atún Real en Trozos",
    "price": 31,
    "description": "Atún Real en Trozos de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-lentejas-costen-8",
    "name": "Lentejas Costeño",
    "price": 77,
    "description": "Lentejas Costeño de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-avena-3-ositos-9",
    "name": "Avena 3 Ositos",
    "price": 69,
    "description": "Avena 3 Ositos de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-yogurt-gloria-f-10",
    "name": "Yogurt Gloria Fresa",
    "price": 81,
    "description": "Yogurt Gloria Fresa de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-galletas-soda-f-11",
    "name": "Galletas Soda Field",
    "price": 27,
    "originalPrice": 34,
    "description": "Galletas Soda Field de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-detergente-opal-12",
    "name": "Detergente Opal",
    "price": 22,
    "originalPrice": 28,
    "description": "Detergente Opal de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-jabon-bolivar-13",
    "name": "Jabón Bolívar",
    "price": 75,
    "description": "Jabón Bolívar de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-papel-higienico-14",
    "name": "Papel Higiénico Elite",
    "price": 40,
    "originalPrice": 50,
    "description": "Papel Higiénico Elite de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-aceite-de-oliva-15",
    "name": "Aceite de Oliva Extra Virgen",
    "price": 32,
    "description": "Aceite de Oliva Extra Virgen de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-sal-de-maras-16",
    "name": "Sal de Maras",
    "price": 57,
    "originalPrice": 72,
    "description": "Sal de Maras de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-quinua-real-1kg-17",
    "name": "Quinua Real 1kg",
    "price": 90,
    "description": "Quinua Real 1kg de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-filete-de-cabal-18",
    "name": "Filete de Caballa",
    "price": 27,
    "description": "Filete de Caballa de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "minimarket-la-estrecha-mayonesa-alacen-19",
    "name": "Mayonesa Alacena",
    "price": 36,
    "description": "Mayonesa Alacena de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-aceite-vegetal--0",
    "name": "Aceite Vegetal Primor",
    "price": 77,
    "description": "Aceite Vegetal Primor de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-arroz-extra-cos-1",
    "name": "Arroz Extra Costeño",
    "price": 91,
    "description": "Arroz Extra Costeño de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-cafe-tostado-al-2",
    "name": "Café Tostado Alto Mayo",
    "price": 55,
    "description": "Café Tostado Alto Mayo de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-fideos-don-vitt-3",
    "name": "Fideos Don Vittorio",
    "price": 29,
    "description": "Fideos Don Vittorio de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-leche-evaporada-4",
    "name": "Leche Evaporada Gloria",
    "price": 67,
    "description": "Leche Evaporada Gloria de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-miel-silvestre--5",
    "name": "Miel Silvestre Chanchamiel",
    "price": 38,
    "description": "Miel Silvestre Chanchamiel de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-azucar-rubia-ca-6",
    "name": "Azúcar Rubia Cartavio",
    "price": 67,
    "description": "Azúcar Rubia Cartavio de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-atun-real-en-tr-7",
    "name": "Atún Real en Trozos",
    "price": 88,
    "description": "Atún Real en Trozos de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-lentejas-costen-8",
    "name": "Lentejas Costeño",
    "price": 13,
    "description": "Lentejas Costeño de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-avena-3-ositos-9",
    "name": "Avena 3 Ositos",
    "price": 18,
    "description": "Avena 3 Ositos de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-yogurt-gloria-f-10",
    "name": "Yogurt Gloria Fresa",
    "price": 20,
    "originalPrice": 26,
    "description": "Yogurt Gloria Fresa de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-galletas-soda-f-11",
    "name": "Galletas Soda Field",
    "price": 50,
    "originalPrice": 63,
    "description": "Galletas Soda Field de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-detergente-opal-12",
    "name": "Detergente Opal",
    "price": 34,
    "description": "Detergente Opal de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-jabon-bolivar-13",
    "name": "Jabón Bolívar",
    "price": 67,
    "description": "Jabón Bolívar de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-papel-higienico-14",
    "name": "Papel Higiénico Elite",
    "price": 57,
    "originalPrice": 72,
    "description": "Papel Higiénico Elite de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-aceite-de-oliva-15",
    "name": "Aceite de Oliva Extra Virgen",
    "price": 69,
    "description": "Aceite de Oliva Extra Virgen de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-sal-de-maras-16",
    "name": "Sal de Maras",
    "price": 75,
    "description": "Sal de Maras de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-quinua-real-1kg-17",
    "name": "Quinua Real 1kg",
    "price": 83,
    "description": "Quinua Real 1kg de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-filete-de-cabal-18",
    "name": "Filete de Caballa",
    "price": 56,
    "originalPrice": 71,
    "description": "Filete de Caballa de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "super-el-sol-mayonesa-alacen-19",
    "name": "Mayonesa Alacena",
    "price": 52,
    "originalPrice": 65,
    "description": "Mayonesa Alacena de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-aceite-vegetal--0",
    "name": "Aceite Vegetal Primor",
    "price": 71,
    "originalPrice": 89,
    "description": "Aceite Vegetal Primor de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-arroz-extra-cos-1",
    "name": "Arroz Extra Costeño",
    "price": 9,
    "originalPrice": 12,
    "description": "Arroz Extra Costeño de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-cafe-tostado-al-2",
    "name": "Café Tostado Alto Mayo",
    "price": 58,
    "originalPrice": 73,
    "description": "Café Tostado Alto Mayo de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-fideos-don-vitt-3",
    "name": "Fideos Don Vittorio",
    "price": 70,
    "description": "Fideos Don Vittorio de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-leche-evaporada-4",
    "name": "Leche Evaporada Gloria",
    "price": 38,
    "description": "Leche Evaporada Gloria de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-miel-silvestre--5",
    "name": "Miel Silvestre Chanchamiel",
    "price": 63,
    "description": "Miel Silvestre Chanchamiel de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-azucar-rubia-ca-6",
    "name": "Azúcar Rubia Cartavio",
    "price": 87,
    "description": "Azúcar Rubia Cartavio de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-atun-real-en-tr-7",
    "name": "Atún Real en Trozos",
    "price": 24,
    "description": "Atún Real en Trozos de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-lentejas-costen-8",
    "name": "Lentejas Costeño",
    "price": 48,
    "description": "Lentejas Costeño de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-avena-3-ositos-9",
    "name": "Avena 3 Ositos",
    "price": 30,
    "description": "Avena 3 Ositos de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-yogurt-gloria-f-10",
    "name": "Yogurt Gloria Fresa",
    "price": 21,
    "originalPrice": 27,
    "description": "Yogurt Gloria Fresa de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-galletas-soda-f-11",
    "name": "Galletas Soda Field",
    "price": 14,
    "description": "Galletas Soda Field de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-detergente-opal-12",
    "name": "Detergente Opal",
    "price": 84,
    "description": "Detergente Opal de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-jabon-bolivar-13",
    "name": "Jabón Bolívar",
    "price": 30,
    "description": "Jabón Bolívar de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-papel-higienico-14",
    "name": "Papel Higiénico Elite",
    "price": 56,
    "description": "Papel Higiénico Elite de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-aceite-de-oliva-15",
    "name": "Aceite de Oliva Extra Virgen",
    "price": 69,
    "description": "Aceite de Oliva Extra Virgen de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-sal-de-maras-16",
    "name": "Sal de Maras",
    "price": 60,
    "description": "Sal de Maras de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-quinua-real-1kg-17",
    "name": "Quinua Real 1kg",
    "price": 54,
    "description": "Quinua Real 1kg de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-filete-de-cabal-18",
    "name": "Filete de Caballa",
    "price": 15,
    "description": "Filete de Caballa de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "abarrotes-san-juan-mayonesa-alacen-19",
    "name": "Mayonesa Alacena",
    "price": 41,
    "description": "Mayonesa Alacena de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "botica-amazonas-paracetamol-500-0",
    "name": "Paracetamol 500mg",
    "price": 36,
    "description": "Paracetamol 500mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-ibuprofeno-400m-1",
    "name": "Ibuprofeno 400mg",
    "price": 49,
    "description": "Ibuprofeno 400mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-amoxicilina-500-2",
    "name": "Amoxicilina 500mg",
    "price": 42,
    "description": "Amoxicilina 500mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-loratadina-10mg-3",
    "name": "Loratadina 10mg",
    "price": 14,
    "description": "Loratadina 10mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-vitamina-c-redo-4",
    "name": "Vitamina C Redoxon",
    "price": 66,
    "description": "Vitamina C Redoxon de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-alcohol-en-gel--5",
    "name": "Alcohol en Gel 500ml",
    "price": 49,
    "description": "Alcohol en Gel 500ml de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-mascarillas-kn9-6",
    "name": "Mascarillas KN95 x10",
    "price": 80,
    "description": "Mascarillas KN95 x10 de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-termometro-digi-7",
    "name": "Termómetro Digital",
    "price": 14,
    "originalPrice": 18,
    "description": "Termómetro Digital de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-gasas-esteriles-8",
    "name": "Gasas Estériles",
    "price": 44,
    "description": "Gasas Estériles de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-panadol-antigri-9",
    "name": "Panadol Antigripal",
    "price": 26,
    "description": "Panadol Antigripal de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-omeprazol-20mg-10",
    "name": "Omeprazol 20mg",
    "price": 34,
    "originalPrice": 43,
    "description": "Omeprazol 20mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-simvastatina-20-11",
    "name": "Simvastatina 20mg",
    "price": 76,
    "description": "Simvastatina 20mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-metformina-850m-12",
    "name": "Metformina 850mg",
    "price": 90,
    "description": "Metformina 850mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-diclofenaco-gel-13",
    "name": "Diclofenaco Gel",
    "price": 34,
    "description": "Diclofenaco Gel de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-suero-fisiologi-14",
    "name": "Suero Fisiológico",
    "price": 16,
    "description": "Suero Fisiológico de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-multivitaminico-15",
    "name": "Multivitamínico Centrum",
    "price": 86,
    "description": "Multivitamínico Centrum de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-colirio-ocular-16",
    "name": "Colirio Ocular",
    "price": 61,
    "originalPrice": 77,
    "description": "Colirio Ocular de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-crema-hidratant-17",
    "name": "Crema Hidratante Cerave",
    "price": 17,
    "description": "Crema Hidratante Cerave de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-bloqueador-sola-18",
    "name": "Bloqueador Solar FPS50",
    "price": 82,
    "description": "Bloqueador Solar FPS50 de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-amazonas-jabon-liquido-n-19",
    "name": "Jabón Líquido Neutro",
    "price": 55,
    "description": "Jabón Líquido Neutro de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-paracetamol-500-0",
    "name": "Paracetamol 500mg",
    "price": 82,
    "description": "Paracetamol 500mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-ibuprofeno-400m-1",
    "name": "Ibuprofeno 400mg",
    "price": 74,
    "description": "Ibuprofeno 400mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-amoxicilina-500-2",
    "name": "Amoxicilina 500mg",
    "price": 62,
    "originalPrice": 78,
    "description": "Amoxicilina 500mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-loratadina-10mg-3",
    "name": "Loratadina 10mg",
    "price": 53,
    "description": "Loratadina 10mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-vitamina-c-redo-4",
    "name": "Vitamina C Redoxon",
    "price": 64,
    "description": "Vitamina C Redoxon de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-alcohol-en-gel--5",
    "name": "Alcohol en Gel 500ml",
    "price": 53,
    "originalPrice": 67,
    "description": "Alcohol en Gel 500ml de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-mascarillas-kn9-6",
    "name": "Mascarillas KN95 x10",
    "price": 23,
    "originalPrice": 29,
    "description": "Mascarillas KN95 x10 de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-termometro-digi-7",
    "name": "Termómetro Digital",
    "price": 14,
    "description": "Termómetro Digital de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-gasas-esteriles-8",
    "name": "Gasas Estériles",
    "price": 42,
    "description": "Gasas Estériles de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-panadol-antigri-9",
    "name": "Panadol Antigripal",
    "price": 75,
    "description": "Panadol Antigripal de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-omeprazol-20mg-10",
    "name": "Omeprazol 20mg",
    "price": 21,
    "description": "Omeprazol 20mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-simvastatina-20-11",
    "name": "Simvastatina 20mg",
    "price": 64,
    "description": "Simvastatina 20mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-metformina-850m-12",
    "name": "Metformina 850mg",
    "price": 17,
    "description": "Metformina 850mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-diclofenaco-gel-13",
    "name": "Diclofenaco Gel",
    "price": 19,
    "originalPrice": 24,
    "description": "Diclofenaco Gel de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-suero-fisiologi-14",
    "name": "Suero Fisiológico",
    "price": 84,
    "description": "Suero Fisiológico de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-multivitaminico-15",
    "name": "Multivitamínico Centrum",
    "price": 64,
    "originalPrice": 81,
    "description": "Multivitamínico Centrum de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-colirio-ocular-16",
    "name": "Colirio Ocular",
    "price": 34,
    "originalPrice": 43,
    "description": "Colirio Ocular de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-crema-hidratant-17",
    "name": "Crema Hidratante Cerave",
    "price": 68,
    "originalPrice": 86,
    "description": "Crema Hidratante Cerave de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-bloqueador-sola-18",
    "name": "Bloqueador Solar FPS50",
    "price": 91,
    "description": "Bloqueador Solar FPS50 de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "inkafarma-jabon-liquido-n-19",
    "name": "Jabón Líquido Neutro",
    "price": 56,
    "originalPrice": 71,
    "description": "Jabón Líquido Neutro de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-paracetamol-500-0",
    "name": "Paracetamol 500mg",
    "price": 34,
    "description": "Paracetamol 500mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-ibuprofeno-400m-1",
    "name": "Ibuprofeno 400mg",
    "price": 72,
    "originalPrice": 90,
    "description": "Ibuprofeno 400mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-amoxicilina-500-2",
    "name": "Amoxicilina 500mg",
    "price": 59,
    "description": "Amoxicilina 500mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-loratadina-10mg-3",
    "name": "Loratadina 10mg",
    "price": 45,
    "description": "Loratadina 10mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-vitamina-c-redo-4",
    "name": "Vitamina C Redoxon",
    "price": 33,
    "description": "Vitamina C Redoxon de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-alcohol-en-gel--5",
    "name": "Alcohol en Gel 500ml",
    "price": 54,
    "description": "Alcohol en Gel 500ml de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-mascarillas-kn9-6",
    "name": "Mascarillas KN95 x10",
    "price": 60,
    "originalPrice": 76,
    "description": "Mascarillas KN95 x10 de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-termometro-digi-7",
    "name": "Termómetro Digital",
    "price": 48,
    "description": "Termómetro Digital de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-gasas-esteriles-8",
    "name": "Gasas Estériles",
    "price": 56,
    "originalPrice": 71,
    "description": "Gasas Estériles de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-panadol-antigri-9",
    "name": "Panadol Antigripal",
    "price": 57,
    "description": "Panadol Antigripal de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-omeprazol-20mg-10",
    "name": "Omeprazol 20mg",
    "price": 88,
    "description": "Omeprazol 20mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-simvastatina-20-11",
    "name": "Simvastatina 20mg",
    "price": 12,
    "description": "Simvastatina 20mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-metformina-850m-12",
    "name": "Metformina 850mg",
    "price": 16,
    "originalPrice": 21,
    "description": "Metformina 850mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-diclofenaco-gel-13",
    "name": "Diclofenaco Gel",
    "price": 70,
    "description": "Diclofenaco Gel de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-suero-fisiologi-14",
    "name": "Suero Fisiológico",
    "price": 51,
    "description": "Suero Fisiológico de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-multivitaminico-15",
    "name": "Multivitamínico Centrum",
    "price": 15,
    "description": "Multivitamínico Centrum de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-colirio-ocular-16",
    "name": "Colirio Ocular",
    "price": 83,
    "description": "Colirio Ocular de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-crema-hidratant-17",
    "name": "Crema Hidratante Cerave",
    "price": 73,
    "description": "Crema Hidratante Cerave de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-bloqueador-sola-18",
    "name": "Bloqueador Solar FPS50",
    "price": 55,
    "originalPrice": 69,
    "description": "Bloqueador Solar FPS50 de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "mifarma-jabon-liquido-n-19",
    "name": "Jabón Líquido Neutro",
    "price": 50,
    "originalPrice": 63,
    "description": "Jabón Líquido Neutro de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-paracetamol-500-0",
    "name": "Paracetamol 500mg",
    "price": 14,
    "description": "Paracetamol 500mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-ibuprofeno-400m-1",
    "name": "Ibuprofeno 400mg",
    "price": 43,
    "description": "Ibuprofeno 400mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-amoxicilina-500-2",
    "name": "Amoxicilina 500mg",
    "price": 46,
    "originalPrice": 58,
    "description": "Amoxicilina 500mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-loratadina-10mg-3",
    "name": "Loratadina 10mg",
    "price": 20,
    "description": "Loratadina 10mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-vitamina-c-redo-4",
    "name": "Vitamina C Redoxon",
    "price": 32,
    "description": "Vitamina C Redoxon de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-alcohol-en-gel--5",
    "name": "Alcohol en Gel 500ml",
    "price": 17,
    "originalPrice": 22,
    "description": "Alcohol en Gel 500ml de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-mascarillas-kn9-6",
    "name": "Mascarillas KN95 x10",
    "price": 90,
    "description": "Mascarillas KN95 x10 de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-termometro-digi-7",
    "name": "Termómetro Digital",
    "price": 12,
    "description": "Termómetro Digital de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-gasas-esteriles-8",
    "name": "Gasas Estériles",
    "price": 63,
    "originalPrice": 79,
    "description": "Gasas Estériles de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-panadol-antigri-9",
    "name": "Panadol Antigripal",
    "price": 58,
    "description": "Panadol Antigripal de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-omeprazol-20mg-10",
    "name": "Omeprazol 20mg",
    "price": 27,
    "originalPrice": 34,
    "description": "Omeprazol 20mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-simvastatina-20-11",
    "name": "Simvastatina 20mg",
    "price": 38,
    "description": "Simvastatina 20mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-metformina-850m-12",
    "name": "Metformina 850mg",
    "price": 84,
    "description": "Metformina 850mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-diclofenaco-gel-13",
    "name": "Diclofenaco Gel",
    "price": 12,
    "description": "Diclofenaco Gel de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-suero-fisiologi-14",
    "name": "Suero Fisiológico",
    "price": 68,
    "originalPrice": 85,
    "description": "Suero Fisiológico de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-multivitaminico-15",
    "name": "Multivitamínico Centrum",
    "price": 53,
    "description": "Multivitamínico Centrum de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-colirio-ocular-16",
    "name": "Colirio Ocular",
    "price": 39,
    "originalPrice": 49,
    "description": "Colirio Ocular de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-crema-hidratant-17",
    "name": "Crema Hidratante Cerave",
    "price": 79,
    "description": "Crema Hidratante Cerave de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-bloqueador-sola-18",
    "name": "Bloqueador Solar FPS50",
    "price": 78,
    "description": "Bloqueador Solar FPS50 de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "botica-salud-jabon-liquido-n-19",
    "name": "Jabón Líquido Neutro",
    "price": 48,
    "description": "Jabón Líquido Neutro de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-paracetamol-500-0",
    "name": "Paracetamol 500mg",
    "price": 37,
    "description": "Paracetamol 500mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-ibuprofeno-400m-1",
    "name": "Ibuprofeno 400mg",
    "price": 43,
    "description": "Ibuprofeno 400mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-amoxicilina-500-2",
    "name": "Amoxicilina 500mg",
    "price": 14,
    "description": "Amoxicilina 500mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-loratadina-10mg-3",
    "name": "Loratadina 10mg",
    "price": 45,
    "description": "Loratadina 10mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-vitamina-c-redo-4",
    "name": "Vitamina C Redoxon",
    "price": 40,
    "description": "Vitamina C Redoxon de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-alcohol-en-gel--5",
    "name": "Alcohol en Gel 500ml",
    "price": 22,
    "description": "Alcohol en Gel 500ml de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-mascarillas-kn9-6",
    "name": "Mascarillas KN95 x10",
    "price": 85,
    "description": "Mascarillas KN95 x10 de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-termometro-digi-7",
    "name": "Termómetro Digital",
    "price": 58,
    "description": "Termómetro Digital de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-gasas-esteriles-8",
    "name": "Gasas Estériles",
    "price": 30,
    "originalPrice": 38,
    "description": "Gasas Estériles de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-panadol-antigri-9",
    "name": "Panadol Antigripal",
    "price": 75,
    "description": "Panadol Antigripal de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-omeprazol-20mg-10",
    "name": "Omeprazol 20mg",
    "price": 65,
    "originalPrice": 82,
    "description": "Omeprazol 20mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-simvastatina-20-11",
    "name": "Simvastatina 20mg",
    "price": 16,
    "description": "Simvastatina 20mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-metformina-850m-12",
    "name": "Metformina 850mg",
    "price": 67,
    "description": "Metformina 850mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-diclofenaco-gel-13",
    "name": "Diclofenaco Gel",
    "price": 80,
    "description": "Diclofenaco Gel de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-suero-fisiologi-14",
    "name": "Suero Fisiológico",
    "price": 15,
    "originalPrice": 19,
    "description": "Suero Fisiológico de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-multivitaminico-15",
    "name": "Multivitamínico Centrum",
    "price": 79,
    "description": "Multivitamínico Centrum de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-colirio-ocular-16",
    "name": "Colirio Ocular",
    "price": 25,
    "description": "Colirio Ocular de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-crema-hidratant-17",
    "name": "Crema Hidratante Cerave",
    "price": 50,
    "originalPrice": 63,
    "description": "Crema Hidratante Cerave de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-bloqueador-sola-18",
    "name": "Bloqueador Solar FPS50",
    "price": 60,
    "originalPrice": 76,
    "description": "Bloqueador Solar FPS50 de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "farmacia-chachapoyas-jabon-liquido-n-19",
    "name": "Jabón Líquido Neutro",
    "price": 72,
    "description": "Jabón Líquido Neutro de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "prescriptionRequired": false,
      "dosage": "Ver empaque"
    }
  },
  {
    "id": "ferreteria-el-progreso-martillo-de-car-0",
    "name": "Martillo de Carpintero",
    "price": 16,
    "description": "Martillo de Carpintero de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-juego-de-destor-1",
    "name": "Juego de Destornilladores",
    "price": 26,
    "description": "Juego de Destornilladores de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-taladro-percuto-2",
    "name": "Taladro Percutor 600W",
    "price": 80,
    "description": "Taladro Percutor 600W de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-alicate-univers-3",
    "name": "Alicate Universal",
    "price": 33,
    "description": "Alicate Universal de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-cinta-metrica-5-4",
    "name": "Cinta Métrica 5m",
    "price": 58,
    "description": "Cinta Métrica 5m de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-pintura-latex-b-5",
    "name": "Pintura Látex Blanca 1gal",
    "price": 9,
    "originalPrice": 12,
    "description": "Pintura Látex Blanca 1gal de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-brocha-de-3-pul-6",
    "name": "Brocha de 3 pulgadas",
    "price": 56,
    "description": "Brocha de 3 pulgadas de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-sierra-para-met-7",
    "name": "Sierra para Metales",
    "price": 34,
    "description": "Sierra para Metales de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-llave-inglesa-1-8",
    "name": "Llave Inglesa 10\"",
    "price": 43,
    "description": "Llave Inglesa 10\" de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-nivel-de-burbuj-9",
    "name": "Nivel de Burbuja",
    "price": 49,
    "description": "Nivel de Burbuja de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-lija-de-agua-nr-10",
    "name": "Lija de Agua Nro 80",
    "price": 10,
    "originalPrice": 13,
    "description": "Lija de Agua Nro 80 de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-pegamento-pvc-11",
    "name": "Pegamento PVC",
    "price": 50,
    "description": "Pegamento PVC de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-tornillos-para--12",
    "name": "Tornillos para Madera x100",
    "price": 16,
    "originalPrice": 21,
    "description": "Tornillos para Madera x100 de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-clavos-de-2-pul-13",
    "name": "Clavos de 2 pulgadas x1kg",
    "price": 74,
    "description": "Clavos de 2 pulgadas x1kg de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-candado-de-segu-14",
    "name": "Candado de Seguridad",
    "price": 35,
    "description": "Candado de Seguridad de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-manguera-de-rie-15",
    "name": "Manguera de Riego 15m",
    "price": 16,
    "description": "Manguera de Riego 15m de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-escalera-de-alu-16",
    "name": "Escalera de Aluminio",
    "price": 46,
    "description": "Escalera de Aluminio de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-guantes-de-prot-17",
    "name": "Guantes de Protección",
    "price": 57,
    "description": "Guantes de Protección de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-casco-de-obra-18",
    "name": "Casco de Obra",
    "price": 38,
    "description": "Casco de Obra de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-el-progreso-linterna-led-po-19",
    "name": "Linterna LED Potente",
    "price": 77,
    "description": "Linterna LED Potente de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-martillo-de-car-0",
    "name": "Martillo de Carpintero",
    "price": 82,
    "description": "Martillo de Carpintero de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-juego-de-destor-1",
    "name": "Juego de Destornilladores",
    "price": 66,
    "originalPrice": 83,
    "description": "Juego de Destornilladores de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-taladro-percuto-2",
    "name": "Taladro Percutor 600W",
    "price": 43,
    "originalPrice": 54,
    "description": "Taladro Percutor 600W de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-alicate-univers-3",
    "name": "Alicate Universal",
    "price": 91,
    "description": "Alicate Universal de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-cinta-metrica-5-4",
    "name": "Cinta Métrica 5m",
    "price": 54,
    "description": "Cinta Métrica 5m de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-pintura-latex-b-5",
    "name": "Pintura Látex Blanca 1gal",
    "price": 60,
    "originalPrice": 76,
    "description": "Pintura Látex Blanca 1gal de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-brocha-de-3-pul-6",
    "name": "Brocha de 3 pulgadas",
    "price": 34,
    "description": "Brocha de 3 pulgadas de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-sierra-para-met-7",
    "name": "Sierra para Metales",
    "price": 79,
    "description": "Sierra para Metales de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-llave-inglesa-1-8",
    "name": "Llave Inglesa 10\"",
    "price": 31,
    "description": "Llave Inglesa 10\" de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-nivel-de-burbuj-9",
    "name": "Nivel de Burbuja",
    "price": 71,
    "originalPrice": 89,
    "description": "Nivel de Burbuja de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-lija-de-agua-nr-10",
    "name": "Lija de Agua Nro 80",
    "price": 87,
    "description": "Lija de Agua Nro 80 de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-pegamento-pvc-11",
    "name": "Pegamento PVC",
    "price": 28,
    "originalPrice": 35,
    "description": "Pegamento PVC de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-tornillos-para--12",
    "name": "Tornillos para Madera x100",
    "price": 36,
    "description": "Tornillos para Madera x100 de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-clavos-de-2-pul-13",
    "name": "Clavos de 2 pulgadas x1kg",
    "price": 18,
    "description": "Clavos de 2 pulgadas x1kg de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-candado-de-segu-14",
    "name": "Candado de Seguridad",
    "price": 55,
    "originalPrice": 69,
    "description": "Candado de Seguridad de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-manguera-de-rie-15",
    "name": "Manguera de Riego 15m",
    "price": 39,
    "description": "Manguera de Riego 15m de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-escalera-de-alu-16",
    "name": "Escalera de Aluminio",
    "price": 52,
    "originalPrice": 66,
    "description": "Escalera de Aluminio de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-guantes-de-prot-17",
    "name": "Guantes de Protección",
    "price": 42,
    "originalPrice": 53,
    "description": "Guantes de Protección de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-casco-de-obra-18",
    "name": "Casco de Obra",
    "price": 35,
    "originalPrice": 44,
    "description": "Casco de Obra de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "comercial-hidro-linterna-led-po-19",
    "name": "Linterna LED Potente",
    "price": 82,
    "description": "Linterna LED Potente de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-martillo-de-car-0",
    "name": "Martillo de Carpintero",
    "price": 15,
    "originalPrice": 19,
    "description": "Martillo de Carpintero de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-juego-de-destor-1",
    "name": "Juego de Destornilladores",
    "price": 56,
    "originalPrice": 70,
    "description": "Juego de Destornilladores de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-taladro-percuto-2",
    "name": "Taladro Percutor 600W",
    "price": 27,
    "originalPrice": 34,
    "description": "Taladro Percutor 600W de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-alicate-univers-3",
    "name": "Alicate Universal",
    "price": 42,
    "description": "Alicate Universal de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-cinta-metrica-5-4",
    "name": "Cinta Métrica 5m",
    "price": 55,
    "originalPrice": 69,
    "description": "Cinta Métrica 5m de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-pintura-latex-b-5",
    "name": "Pintura Látex Blanca 1gal",
    "price": 18,
    "description": "Pintura Látex Blanca 1gal de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-brocha-de-3-pul-6",
    "name": "Brocha de 3 pulgadas",
    "price": 75,
    "description": "Brocha de 3 pulgadas de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-sierra-para-met-7",
    "name": "Sierra para Metales",
    "price": 51,
    "description": "Sierra para Metales de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-llave-inglesa-1-8",
    "name": "Llave Inglesa 10\"",
    "price": 65,
    "description": "Llave Inglesa 10\" de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-nivel-de-burbuj-9",
    "name": "Nivel de Burbuja",
    "price": 44,
    "originalPrice": 55,
    "description": "Nivel de Burbuja de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-lija-de-agua-nr-10",
    "name": "Lija de Agua Nro 80",
    "price": 28,
    "description": "Lija de Agua Nro 80 de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-pegamento-pvc-11",
    "name": "Pegamento PVC",
    "price": 84,
    "description": "Pegamento PVC de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-tornillos-para--12",
    "name": "Tornillos para Madera x100",
    "price": 60,
    "description": "Tornillos para Madera x100 de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-clavos-de-2-pul-13",
    "name": "Clavos de 2 pulgadas x1kg",
    "price": 18,
    "description": "Clavos de 2 pulgadas x1kg de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-candado-de-segu-14",
    "name": "Candado de Seguridad",
    "price": 61,
    "description": "Candado de Seguridad de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-manguera-de-rie-15",
    "name": "Manguera de Riego 15m",
    "price": 24,
    "description": "Manguera de Riego 15m de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-escalera-de-alu-16",
    "name": "Escalera de Aluminio",
    "price": 63,
    "description": "Escalera de Aluminio de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-guantes-de-prot-17",
    "name": "Guantes de Protección",
    "price": 17,
    "description": "Guantes de Protección de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-casco-de-obra-18",
    "name": "Casco de Obra",
    "price": 12,
    "description": "Casco de Obra de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "ferreteria-la-solucion-linterna-led-po-19",
    "name": "Linterna LED Potente",
    "price": 56,
    "description": "Linterna LED Potente de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-martillo-de-car-0",
    "name": "Martillo de Carpintero",
    "price": 40,
    "description": "Martillo de Carpintero de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-juego-de-destor-1",
    "name": "Juego de Destornilladores",
    "price": 58,
    "description": "Juego de Destornilladores de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-taladro-percuto-2",
    "name": "Taladro Percutor 600W",
    "price": 43,
    "originalPrice": 54,
    "description": "Taladro Percutor 600W de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-alicate-univers-3",
    "name": "Alicate Universal",
    "price": 72,
    "originalPrice": 91,
    "description": "Alicate Universal de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-cinta-metrica-5-4",
    "name": "Cinta Métrica 5m",
    "price": 17,
    "originalPrice": 22,
    "description": "Cinta Métrica 5m de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-pintura-latex-b-5",
    "name": "Pintura Látex Blanca 1gal",
    "price": 12,
    "originalPrice": 15,
    "description": "Pintura Látex Blanca 1gal de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-brocha-de-3-pul-6",
    "name": "Brocha de 3 pulgadas",
    "price": 52,
    "description": "Brocha de 3 pulgadas de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-sierra-para-met-7",
    "name": "Sierra para Metales",
    "price": 71,
    "description": "Sierra para Metales de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-llave-inglesa-1-8",
    "name": "Llave Inglesa 10\"",
    "price": 19,
    "description": "Llave Inglesa 10\" de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-nivel-de-burbuj-9",
    "name": "Nivel de Burbuja",
    "price": 77,
    "description": "Nivel de Burbuja de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-lija-de-agua-nr-10",
    "name": "Lija de Agua Nro 80",
    "price": 69,
    "description": "Lija de Agua Nro 80 de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-pegamento-pvc-11",
    "name": "Pegamento PVC",
    "price": 72,
    "originalPrice": 91,
    "description": "Pegamento PVC de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-tornillos-para--12",
    "name": "Tornillos para Madera x100",
    "price": 66,
    "description": "Tornillos para Madera x100 de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-clavos-de-2-pul-13",
    "name": "Clavos de 2 pulgadas x1kg",
    "price": 47,
    "description": "Clavos de 2 pulgadas x1kg de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-candado-de-segu-14",
    "name": "Candado de Seguridad",
    "price": 82,
    "description": "Candado de Seguridad de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-manguera-de-rie-15",
    "name": "Manguera de Riego 15m",
    "price": 15,
    "description": "Manguera de Riego 15m de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-escalera-de-alu-16",
    "name": "Escalera de Aluminio",
    "price": 31,
    "description": "Escalera de Aluminio de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-guantes-de-prot-17",
    "name": "Guantes de Protección",
    "price": 59,
    "description": "Guantes de Protección de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-casco-de-obra-18",
    "name": "Casco de Obra",
    "price": 12,
    "description": "Casco de Obra de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "el-martillo-ma-linterna-led-po-19",
    "name": "Linterna LED Potente",
    "price": 23,
    "description": "Linterna LED Potente de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-martillo-de-car-0",
    "name": "Martillo de Carpintero",
    "price": 73,
    "description": "Martillo de Carpintero de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-juego-de-destor-1",
    "name": "Juego de Destornilladores",
    "price": 49,
    "description": "Juego de Destornilladores de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-taladro-percuto-2",
    "name": "Taladro Percutor 600W",
    "price": 84,
    "description": "Taladro Percutor 600W de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-alicate-univers-3",
    "name": "Alicate Universal",
    "price": 44,
    "description": "Alicate Universal de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-cinta-metrica-5-4",
    "name": "Cinta Métrica 5m",
    "price": 26,
    "originalPrice": 33,
    "description": "Cinta Métrica 5m de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-pintura-latex-b-5",
    "name": "Pintura Látex Blanca 1gal",
    "price": 30,
    "description": "Pintura Látex Blanca 1gal de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-brocha-de-3-pul-6",
    "name": "Brocha de 3 pulgadas",
    "price": 81,
    "description": "Brocha de 3 pulgadas de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-sierra-para-met-7",
    "name": "Sierra para Metales",
    "price": 80,
    "description": "Sierra para Metales de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-llave-inglesa-1-8",
    "name": "Llave Inglesa 10\"",
    "price": 84,
    "description": "Llave Inglesa 10\" de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-nivel-de-burbuj-9",
    "name": "Nivel de Burbuja",
    "price": 41,
    "description": "Nivel de Burbuja de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-lija-de-agua-nr-10",
    "name": "Lija de Agua Nro 80",
    "price": 14,
    "originalPrice": 18,
    "description": "Lija de Agua Nro 80 de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-pegamento-pvc-11",
    "name": "Pegamento PVC",
    "price": 85,
    "description": "Pegamento PVC de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-tornillos-para--12",
    "name": "Tornillos para Madera x100",
    "price": 33,
    "description": "Tornillos para Madera x100 de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-clavos-de-2-pul-13",
    "name": "Clavos de 2 pulgadas x1kg",
    "price": 59,
    "description": "Clavos de 2 pulgadas x1kg de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-candado-de-segu-14",
    "name": "Candado de Seguridad",
    "price": 60,
    "originalPrice": 76,
    "description": "Candado de Seguridad de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-manguera-de-rie-15",
    "name": "Manguera de Riego 15m",
    "price": 23,
    "description": "Manguera de Riego 15m de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-escalera-de-alu-16",
    "name": "Escalera de Aluminio",
    "price": 52,
    "originalPrice": 66,
    "description": "Escalera de Aluminio de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-guantes-de-prot-17",
    "name": "Guantes de Protección",
    "price": 71,
    "description": "Guantes de Protección de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-casco-de-obra-18",
    "name": "Casco de Obra",
    "price": 90,
    "description": "Casco de Obra de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "construye-facil-linterna-led-po-19",
    "name": "Linterna LED Potente",
    "price": 71,
    "description": "Linterna LED Potente de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "boutique-pasarela-polo-algodon-pi-0",
    "name": "Polo Algodón Pima",
    "price": 16,
    "description": "Polo Algodón Pima de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-jeans-slim-fit-1",
    "name": "Jeans Slim Fit",
    "price": 46,
    "originalPrice": 58,
    "description": "Jeans Slim Fit de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-zapatillas-urba-2",
    "name": "Zapatillas Urbanas",
    "price": 89,
    "description": "Zapatillas Urbanas de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-casaca-cortavie-3",
    "name": "Casaca Cortavientos",
    "price": 71,
    "description": "Casaca Cortavientos de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-camisa-manga-la-4",
    "name": "Camisa Manga Larga",
    "price": 42,
    "description": "Camisa Manga Larga de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-short-de-verano-5",
    "name": "Short de Verano",
    "price": 64,
    "description": "Short de Verano de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-vestido-de-noch-6",
    "name": "Vestido de Noche",
    "price": 75,
    "description": "Vestido de Noche de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-blusa-de-seda-7",
    "name": "Blusa de Seda",
    "price": 18,
    "originalPrice": 23,
    "description": "Blusa de Seda de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-falda-plisada-8",
    "name": "Falda Plisada",
    "price": 52,
    "originalPrice": 66,
    "description": "Falda Plisada de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-casaca-de-cuero-9",
    "name": "Casaca de Cuero Sintético",
    "price": 70,
    "originalPrice": 88,
    "description": "Casaca de Cuero Sintético de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-gorra-amazon-vi-10",
    "name": "Gorra Amazon View",
    "price": 34,
    "description": "Gorra Amazon View de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-lentes-de-sol-p-11",
    "name": "Lentes de Sol Polarizados",
    "price": 12,
    "description": "Lentes de Sol Polarizados de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-reloj-de-pulser-12",
    "name": "Reloj de Pulsera Análogo",
    "price": 66,
    "description": "Reloj de Pulsera Análogo de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-cinturon-de-cue-13",
    "name": "Cinturón de Cuero",
    "price": 48,
    "description": "Cinturón de Cuero de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-medias-deportiv-14",
    "name": "Medias Deportivas x3",
    "price": 14,
    "originalPrice": 18,
    "description": "Medias Deportivas x3 de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-zapatos-de-vest-15",
    "name": "Zapatos de Vestir",
    "price": 33,
    "originalPrice": 42,
    "description": "Zapatos de Vestir de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-mocasines-casua-16",
    "name": "Mocasines Casuales",
    "price": 90,
    "description": "Mocasines Casuales de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-cartera-de-mano-17",
    "name": "Cartera de Mano",
    "price": 66,
    "originalPrice": 83,
    "description": "Cartera de Mano de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-mochila-urbana-18",
    "name": "Mochila Urbana",
    "price": 16,
    "originalPrice": 20,
    "description": "Mochila Urbana de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "boutique-pasarela-billetera-de-cu-19",
    "name": "Billetera de Cuero",
    "price": 13,
    "description": "Billetera de Cuero de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-polo-algodon-pi-0",
    "name": "Polo Algodón Pima",
    "price": 69,
    "description": "Polo Algodón Pima de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-jeans-slim-fit-1",
    "name": "Jeans Slim Fit",
    "price": 90,
    "description": "Jeans Slim Fit de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-zapatillas-urba-2",
    "name": "Zapatillas Urbanas",
    "price": 68,
    "description": "Zapatillas Urbanas de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-casaca-cortavie-3",
    "name": "Casaca Cortavientos",
    "price": 76,
    "description": "Casaca Cortavientos de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-camisa-manga-la-4",
    "name": "Camisa Manga Larga",
    "price": 80,
    "description": "Camisa Manga Larga de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-short-de-verano-5",
    "name": "Short de Verano",
    "price": 71,
    "description": "Short de Verano de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-vestido-de-noch-6",
    "name": "Vestido de Noche",
    "price": 44,
    "originalPrice": 56,
    "description": "Vestido de Noche de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-blusa-de-seda-7",
    "name": "Blusa de Seda",
    "price": 76,
    "description": "Blusa de Seda de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-falda-plisada-8",
    "name": "Falda Plisada",
    "price": 36,
    "description": "Falda Plisada de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-casaca-de-cuero-9",
    "name": "Casaca de Cuero Sintético",
    "price": 87,
    "description": "Casaca de Cuero Sintético de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-gorra-amazon-vi-10",
    "name": "Gorra Amazon View",
    "price": 48,
    "description": "Gorra Amazon View de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-lentes-de-sol-p-11",
    "name": "Lentes de Sol Polarizados",
    "price": 36,
    "description": "Lentes de Sol Polarizados de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-reloj-de-pulser-12",
    "name": "Reloj de Pulsera Análogo",
    "price": 24,
    "description": "Reloj de Pulsera Análogo de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-cinturon-de-cue-13",
    "name": "Cinturón de Cuero",
    "price": 30,
    "originalPrice": 38,
    "description": "Cinturón de Cuero de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-medias-deportiv-14",
    "name": "Medias Deportivas x3",
    "price": 60,
    "description": "Medias Deportivas x3 de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-zapatos-de-vest-15",
    "name": "Zapatos de Vestir",
    "price": 50,
    "originalPrice": 63,
    "description": "Zapatos de Vestir de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-mocasines-casua-16",
    "name": "Mocasines Casuales",
    "price": 27,
    "description": "Mocasines Casuales de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-cartera-de-mano-17",
    "name": "Cartera de Mano",
    "price": 43,
    "description": "Cartera de Mano de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-mochila-urbana-18",
    "name": "Mochila Urbana",
    "price": 18,
    "description": "Mochila Urbana de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "calzado-real-billetera-de-cu-19",
    "name": "Billetera de Cuero",
    "price": 73,
    "description": "Billetera de Cuero de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--polo-algodon-pi-0",
    "name": "Polo Algodón Pima",
    "price": 60,
    "description": "Polo Algodón Pima de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--jeans-slim-fit-1",
    "name": "Jeans Slim Fit",
    "price": 83,
    "description": "Jeans Slim Fit de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--zapatillas-urba-2",
    "name": "Zapatillas Urbanas",
    "price": 14,
    "description": "Zapatillas Urbanas de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--casaca-cortavie-3",
    "name": "Casaca Cortavientos",
    "price": 25,
    "originalPrice": 32,
    "description": "Casaca Cortavientos de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--camisa-manga-la-4",
    "name": "Camisa Manga Larga",
    "price": 50,
    "description": "Camisa Manga Larga de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--short-de-verano-5",
    "name": "Short de Verano",
    "price": 88,
    "description": "Short de Verano de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--vestido-de-noch-6",
    "name": "Vestido de Noche",
    "price": 12,
    "description": "Vestido de Noche de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--blusa-de-seda-7",
    "name": "Blusa de Seda",
    "price": 37,
    "description": "Blusa de Seda de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--falda-plisada-8",
    "name": "Falda Plisada",
    "price": 61,
    "description": "Falda Plisada de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--casaca-de-cuero-9",
    "name": "Casaca de Cuero Sintético",
    "price": 78,
    "description": "Casaca de Cuero Sintético de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--gorra-amazon-vi-10",
    "name": "Gorra Amazon View",
    "price": 36,
    "originalPrice": 45,
    "description": "Gorra Amazon View de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--lentes-de-sol-p-11",
    "name": "Lentes de Sol Polarizados",
    "price": 18,
    "originalPrice": 23,
    "description": "Lentes de Sol Polarizados de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--reloj-de-pulser-12",
    "name": "Reloj de Pulsera Análogo",
    "price": 30,
    "description": "Reloj de Pulsera Análogo de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--cinturon-de-cue-13",
    "name": "Cinturón de Cuero",
    "price": 66,
    "description": "Cinturón de Cuero de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--medias-deportiv-14",
    "name": "Medias Deportivas x3",
    "price": 84,
    "description": "Medias Deportivas x3 de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--zapatos-de-vest-15",
    "name": "Zapatos de Vestir",
    "price": 40,
    "originalPrice": 51,
    "description": "Zapatos de Vestir de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--mocasines-casua-16",
    "name": "Mocasines Casuales",
    "price": 29,
    "description": "Mocasines Casuales de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--cartera-de-mano-17",
    "name": "Cartera de Mano",
    "price": 60,
    "originalPrice": 75,
    "description": "Cartera de Mano de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--mochila-urbana-18",
    "name": "Mochila Urbana",
    "price": 17,
    "description": "Mochila Urbana de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "moda-amazonas--billetera-de-cu-19",
    "name": "Billetera de Cuero",
    "price": 57,
    "description": "Billetera de Cuero de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-polo-algodon-pi-0",
    "name": "Polo Algodón Pima",
    "price": 47,
    "originalPrice": 59,
    "description": "Polo Algodón Pima de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-jeans-slim-fit-1",
    "name": "Jeans Slim Fit",
    "price": 18,
    "description": "Jeans Slim Fit de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-zapatillas-urba-2",
    "name": "Zapatillas Urbanas",
    "price": 62,
    "description": "Zapatillas Urbanas de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-casaca-cortavie-3",
    "name": "Casaca Cortavientos",
    "price": 90,
    "description": "Casaca Cortavientos de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-camisa-manga-la-4",
    "name": "Camisa Manga Larga",
    "price": 88,
    "description": "Camisa Manga Larga de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-short-de-verano-5",
    "name": "Short de Verano",
    "price": 15,
    "description": "Short de Verano de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-vestido-de-noch-6",
    "name": "Vestido de Noche",
    "price": 39,
    "originalPrice": 49,
    "description": "Vestido de Noche de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-blusa-de-seda-7",
    "name": "Blusa de Seda",
    "price": 60,
    "originalPrice": 76,
    "description": "Blusa de Seda de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-falda-plisada-8",
    "name": "Falda Plisada",
    "price": 52,
    "description": "Falda Plisada de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-casaca-de-cuero-9",
    "name": "Casaca de Cuero Sintético",
    "price": 60,
    "description": "Casaca de Cuero Sintético de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-gorra-amazon-vi-10",
    "name": "Gorra Amazon View",
    "price": 10,
    "originalPrice": 13,
    "description": "Gorra Amazon View de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-lentes-de-sol-p-11",
    "name": "Lentes de Sol Polarizados",
    "price": 65,
    "originalPrice": 82,
    "description": "Lentes de Sol Polarizados de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-reloj-de-pulser-12",
    "name": "Reloj de Pulsera Análogo",
    "price": 41,
    "description": "Reloj de Pulsera Análogo de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-cinturon-de-cue-13",
    "name": "Cinturón de Cuero",
    "price": 15,
    "description": "Cinturón de Cuero de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-medias-deportiv-14",
    "name": "Medias Deportivas x3",
    "price": 12,
    "originalPrice": 16,
    "description": "Medias Deportivas x3 de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-zapatos-de-vest-15",
    "name": "Zapatos de Vestir",
    "price": 88,
    "description": "Zapatos de Vestir de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-mocasines-casua-16",
    "name": "Mocasines Casuales",
    "price": 33,
    "description": "Mocasines Casuales de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-cartera-de-mano-17",
    "name": "Cartera de Mano",
    "price": 36,
    "description": "Cartera de Mano de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-mochila-urbana-18",
    "name": "Mochila Urbana",
    "price": 41,
    "description": "Mochila Urbana de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "sport-center-billetera-de-cu-19",
    "name": "Billetera de Cuero",
    "price": 13,
    "originalPrice": 17,
    "description": "Billetera de Cuero de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-polo-algodon-pi-0",
    "name": "Polo Algodón Pima",
    "price": 26,
    "originalPrice": 33,
    "description": "Polo Algodón Pima de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-jeans-slim-fit-1",
    "name": "Jeans Slim Fit",
    "price": 56,
    "description": "Jeans Slim Fit de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-zapatillas-urba-2",
    "name": "Zapatillas Urbanas",
    "price": 42,
    "description": "Zapatillas Urbanas de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-casaca-cortavie-3",
    "name": "Casaca Cortavientos",
    "price": 62,
    "originalPrice": 78,
    "description": "Casaca Cortavientos de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-camisa-manga-la-4",
    "name": "Camisa Manga Larga",
    "price": 56,
    "originalPrice": 70,
    "description": "Camisa Manga Larga de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-short-de-verano-5",
    "name": "Short de Verano",
    "price": 73,
    "description": "Short de Verano de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-vestido-de-noch-6",
    "name": "Vestido de Noche",
    "price": 12,
    "originalPrice": 16,
    "description": "Vestido de Noche de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-blusa-de-seda-7",
    "name": "Blusa de Seda",
    "price": 52,
    "description": "Blusa de Seda de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-falda-plisada-8",
    "name": "Falda Plisada",
    "price": 72,
    "description": "Falda Plisada de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-casaca-de-cuero-9",
    "name": "Casaca de Cuero Sintético",
    "price": 16,
    "originalPrice": 21,
    "description": "Casaca de Cuero Sintético de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-gorra-amazon-vi-10",
    "name": "Gorra Amazon View",
    "price": 85,
    "description": "Gorra Amazon View de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-lentes-de-sol-p-11",
    "name": "Lentes de Sol Polarizados",
    "price": 52,
    "description": "Lentes de Sol Polarizados de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-reloj-de-pulser-12",
    "name": "Reloj de Pulsera Análogo",
    "price": 52,
    "description": "Reloj de Pulsera Análogo de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-cinturon-de-cue-13",
    "name": "Cinturón de Cuero",
    "price": 48,
    "description": "Cinturón de Cuero de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-medias-deportiv-14",
    "name": "Medias Deportivas x3",
    "price": 65,
    "originalPrice": 82,
    "description": "Medias Deportivas x3 de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-zapatos-de-vest-15",
    "name": "Zapatos de Vestir",
    "price": 22,
    "description": "Zapatos de Vestir de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-mocasines-casua-16",
    "name": "Mocasines Casuales",
    "price": 67,
    "description": "Mocasines Casuales de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-cartera-de-mano-17",
    "name": "Cartera de Mano",
    "price": 12,
    "description": "Cartera de Mano de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-mochila-urbana-18",
    "name": "Mochila Urbana",
    "price": 81,
    "description": "Mochila Urbana de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "textil-chacha-billetera-de-cu-19",
    "name": "Billetera de Cuero",
    "price": 9,
    "originalPrice": 12,
    "description": "Billetera de Cuero de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "https://images.unsplash.com/photo-1441984969133-35d0da4f014e?q=80&w=800",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "Negro",
        "Azul"
      ]
    }
  },
  {
    "id": "amazonas-tech-smartphone-andr-0",
    "name": "Smartphone Android 128GB",
    "price": 25,
    "description": "Smartphone Android 128GB de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-audifonos-bluet-1",
    "name": "Audífonos Bluetooth Pro",
    "price": 49,
    "originalPrice": 62,
    "description": "Audífonos Bluetooth Pro de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-smartwatch-seri-2",
    "name": "Smartwatch Serie 7",
    "price": 67,
    "originalPrice": 84,
    "description": "Smartwatch Serie 7 de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-laptop-core-i5--3",
    "name": "Laptop Core i5 8GB",
    "price": 57,
    "description": "Laptop Core i5 8GB de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-tablet-10-pulga-4",
    "name": "Tablet 10 Pulgadas",
    "price": 43,
    "originalPrice": 54,
    "description": "Tablet 10 Pulgadas de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-mouse-inalambri-5",
    "name": "Mouse Inalámbrico",
    "price": 89,
    "description": "Mouse Inalámbrico de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-teclado-mecanic-6",
    "name": "Teclado Mecánico RGB",
    "price": 27,
    "originalPrice": 34,
    "description": "Teclado Mecánico RGB de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-camara-web-full-7",
    "name": "Cámara Web Full HD",
    "price": 50,
    "originalPrice": 63,
    "description": "Cámara Web Full HD de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-router-wifi-6-8",
    "name": "Router WiFi 6",
    "price": 17,
    "originalPrice": 22,
    "description": "Router WiFi 6 de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-disco-duro-exte-9",
    "name": "Disco Duro Externo 1TB",
    "price": 17,
    "originalPrice": 22,
    "description": "Disco Duro Externo 1TB de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-parlante-blueto-10",
    "name": "Parlante Bluetooth WaterProof",
    "price": 32,
    "originalPrice": 40,
    "description": "Parlante Bluetooth WaterProof de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-cargador-rapido-11",
    "name": "Cargador Rápido 20W",
    "price": 63,
    "description": "Cargador Rápido 20W de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-power-bank-1000-12",
    "name": "Power Bank 10000mAh",
    "price": 53,
    "description": "Power Bank 10000mAh de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-funda-para-lapt-13",
    "name": "Funda para Laptop",
    "price": 47,
    "description": "Funda para Laptop de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-monitor-24-ips-14",
    "name": "Monitor 24\" IPS",
    "price": 63,
    "description": "Monitor 24\" IPS de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-soporte-para-ce-15",
    "name": "Soporte para Celular",
    "price": 55,
    "description": "Soporte para Celular de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-aro-de-luz-led-16",
    "name": "Aro de Luz LED",
    "price": 50,
    "description": "Aro de Luz LED de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-microfono-para--17",
    "name": "Micrófono para Streaming",
    "price": 54,
    "description": "Micrófono para Streaming de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-adaptador-usb-c-18",
    "name": "Adaptador USB-C Hub",
    "price": 69,
    "description": "Adaptador USB-C Hub de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "amazonas-tech-cable-hdmi-4k-19",
    "name": "Cable HDMI 4K",
    "price": 80,
    "description": "Cable HDMI 4K de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-smartphone-andr-0",
    "name": "Smartphone Android 128GB",
    "price": 63,
    "description": "Smartphone Android 128GB de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-audifonos-bluet-1",
    "name": "Audífonos Bluetooth Pro",
    "price": 18,
    "description": "Audífonos Bluetooth Pro de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-smartwatch-seri-2",
    "name": "Smartwatch Serie 7",
    "price": 10,
    "originalPrice": 13,
    "description": "Smartwatch Serie 7 de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-laptop-core-i5--3",
    "name": "Laptop Core i5 8GB",
    "price": 80,
    "description": "Laptop Core i5 8GB de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-tablet-10-pulga-4",
    "name": "Tablet 10 Pulgadas",
    "price": 60,
    "originalPrice": 76,
    "description": "Tablet 10 Pulgadas de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-mouse-inalambri-5",
    "name": "Mouse Inalámbrico",
    "price": 82,
    "description": "Mouse Inalámbrico de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-teclado-mecanic-6",
    "name": "Teclado Mecánico RGB",
    "price": 42,
    "originalPrice": 53,
    "description": "Teclado Mecánico RGB de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-camara-web-full-7",
    "name": "Cámara Web Full HD",
    "price": 27,
    "description": "Cámara Web Full HD de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-router-wifi-6-8",
    "name": "Router WiFi 6",
    "price": 56,
    "originalPrice": 71,
    "description": "Router WiFi 6 de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-disco-duro-exte-9",
    "name": "Disco Duro Externo 1TB",
    "price": 43,
    "description": "Disco Duro Externo 1TB de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-parlante-blueto-10",
    "name": "Parlante Bluetooth WaterProof",
    "price": 90,
    "description": "Parlante Bluetooth WaterProof de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-cargador-rapido-11",
    "name": "Cargador Rápido 20W",
    "price": 24,
    "description": "Cargador Rápido 20W de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-power-bank-1000-12",
    "name": "Power Bank 10000mAh",
    "price": 73,
    "description": "Power Bank 10000mAh de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-funda-para-lapt-13",
    "name": "Funda para Laptop",
    "price": 57,
    "description": "Funda para Laptop de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-monitor-24-ips-14",
    "name": "Monitor 24\" IPS",
    "price": 30,
    "description": "Monitor 24\" IPS de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-soporte-para-ce-15",
    "name": "Soporte para Celular",
    "price": 79,
    "description": "Soporte para Celular de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-aro-de-luz-led-16",
    "name": "Aro de Luz LED",
    "price": 50,
    "description": "Aro de Luz LED de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-microfono-para--17",
    "name": "Micrófono para Streaming",
    "price": 28,
    "description": "Micrófono para Streaming de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-adaptador-usb-c-18",
    "name": "Adaptador USB-C Hub",
    "price": 31,
    "description": "Adaptador USB-C Hub de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "mundo-celular-cable-hdmi-4k-19",
    "name": "Cable HDMI 4K",
    "price": 38,
    "originalPrice": 48,
    "description": "Cable HDMI 4K de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-smartphone-andr-0",
    "name": "Smartphone Android 128GB",
    "price": 64,
    "description": "Smartphone Android 128GB de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-audifonos-bluet-1",
    "name": "Audífonos Bluetooth Pro",
    "price": 34,
    "description": "Audífonos Bluetooth Pro de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-smartwatch-seri-2",
    "name": "Smartwatch Serie 7",
    "price": 41,
    "description": "Smartwatch Serie 7 de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-laptop-core-i5--3",
    "name": "Laptop Core i5 8GB",
    "price": 52,
    "description": "Laptop Core i5 8GB de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-tablet-10-pulga-4",
    "name": "Tablet 10 Pulgadas",
    "price": 36,
    "description": "Tablet 10 Pulgadas de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-mouse-inalambri-5",
    "name": "Mouse Inalámbrico",
    "price": 63,
    "originalPrice": 79,
    "description": "Mouse Inalámbrico de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-teclado-mecanic-6",
    "name": "Teclado Mecánico RGB",
    "price": 22,
    "description": "Teclado Mecánico RGB de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-camara-web-full-7",
    "name": "Cámara Web Full HD",
    "price": 30,
    "originalPrice": 38,
    "description": "Cámara Web Full HD de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-router-wifi-6-8",
    "name": "Router WiFi 6",
    "price": 56,
    "originalPrice": 70,
    "description": "Router WiFi 6 de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-disco-duro-exte-9",
    "name": "Disco Duro Externo 1TB",
    "price": 29,
    "description": "Disco Duro Externo 1TB de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-parlante-blueto-10",
    "name": "Parlante Bluetooth WaterProof",
    "price": 12,
    "originalPrice": 15,
    "description": "Parlante Bluetooth WaterProof de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-cargador-rapido-11",
    "name": "Cargador Rápido 20W",
    "price": 28,
    "description": "Cargador Rápido 20W de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-power-bank-1000-12",
    "name": "Power Bank 10000mAh",
    "price": 68,
    "description": "Power Bank 10000mAh de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-funda-para-lapt-13",
    "name": "Funda para Laptop",
    "price": 52,
    "description": "Funda para Laptop de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-monitor-24-ips-14",
    "name": "Monitor 24\" IPS",
    "price": 76,
    "description": "Monitor 24\" IPS de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-soporte-para-ce-15",
    "name": "Soporte para Celular",
    "price": 33,
    "description": "Soporte para Celular de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-aro-de-luz-led-16",
    "name": "Aro de Luz LED",
    "price": 24,
    "description": "Aro de Luz LED de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-microfono-para--17",
    "name": "Micrófono para Streaming",
    "price": 58,
    "description": "Micrófono para Streaming de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-adaptador-usb-c-18",
    "name": "Adaptador USB-C Hub",
    "price": 12,
    "originalPrice": 16,
    "description": "Adaptador USB-C Hub de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "pc-fast-fa-cable-hdmi-4k-19",
    "name": "Cable HDMI 4K",
    "price": 53,
    "originalPrice": 67,
    "description": "Cable HDMI 4K de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-smartphone-andr-0",
    "name": "Smartphone Android 128GB",
    "price": 75,
    "description": "Smartphone Android 128GB de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-audifonos-bluet-1",
    "name": "Audífonos Bluetooth Pro",
    "price": 88,
    "description": "Audífonos Bluetooth Pro de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-smartwatch-seri-2",
    "name": "Smartwatch Serie 7",
    "price": 63,
    "description": "Smartwatch Serie 7 de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-laptop-core-i5--3",
    "name": "Laptop Core i5 8GB",
    "price": 76,
    "description": "Laptop Core i5 8GB de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-tablet-10-pulga-4",
    "name": "Tablet 10 Pulgadas",
    "price": 45,
    "description": "Tablet 10 Pulgadas de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-mouse-inalambri-5",
    "name": "Mouse Inalámbrico",
    "price": 45,
    "description": "Mouse Inalámbrico de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-teclado-mecanic-6",
    "name": "Teclado Mecánico RGB",
    "price": 63,
    "description": "Teclado Mecánico RGB de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-camara-web-full-7",
    "name": "Cámara Web Full HD",
    "price": 64,
    "originalPrice": 81,
    "description": "Cámara Web Full HD de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-router-wifi-6-8",
    "name": "Router WiFi 6",
    "price": 46,
    "originalPrice": 58,
    "description": "Router WiFi 6 de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-disco-duro-exte-9",
    "name": "Disco Duro Externo 1TB",
    "price": 74,
    "description": "Disco Duro Externo 1TB de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-parlante-blueto-10",
    "name": "Parlante Bluetooth WaterProof",
    "price": 41,
    "description": "Parlante Bluetooth WaterProof de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-cargador-rapido-11",
    "name": "Cargador Rápido 20W",
    "price": 42,
    "originalPrice": 53,
    "description": "Cargador Rápido 20W de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-power-bank-1000-12",
    "name": "Power Bank 10000mAh",
    "price": 78,
    "description": "Power Bank 10000mAh de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-funda-para-lapt-13",
    "name": "Funda para Laptop",
    "price": 14,
    "description": "Funda para Laptop de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-monitor-24-ips-14",
    "name": "Monitor 24\" IPS",
    "price": 11,
    "originalPrice": 14,
    "description": "Monitor 24\" IPS de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-soporte-para-ce-15",
    "name": "Soporte para Celular",
    "price": 64,
    "description": "Soporte para Celular de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-aro-de-luz-led-16",
    "name": "Aro de Luz LED",
    "price": 81,
    "description": "Aro de Luz LED de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-microfono-para--17",
    "name": "Micrófono para Streaming",
    "price": 69,
    "originalPrice": 87,
    "description": "Micrófono para Streaming de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-adaptador-usb-c-18",
    "name": "Adaptador USB-C Hub",
    "price": 79,
    "description": "Adaptador USB-C Hub de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "smart-store-cable-hdmi-4k-19",
    "name": "Cable HDMI 4K",
    "price": 46,
    "originalPrice": 58,
    "description": "Cable HDMI 4K de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-smartphone-andr-0",
    "name": "Smartphone Android 128GB",
    "price": 72,
    "description": "Smartphone Android 128GB de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-audifonos-bluet-1",
    "name": "Audífonos Bluetooth Pro",
    "price": 81,
    "description": "Audífonos Bluetooth Pro de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-smartwatch-seri-2",
    "name": "Smartwatch Serie 7",
    "price": 72,
    "description": "Smartwatch Serie 7 de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-laptop-core-i5--3",
    "name": "Laptop Core i5 8GB",
    "price": 50,
    "description": "Laptop Core i5 8GB de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-tablet-10-pulga-4",
    "name": "Tablet 10 Pulgadas",
    "price": 25,
    "description": "Tablet 10 Pulgadas de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-mouse-inalambri-5",
    "name": "Mouse Inalámbrico",
    "price": 56,
    "originalPrice": 70,
    "description": "Mouse Inalámbrico de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-teclado-mecanic-6",
    "name": "Teclado Mecánico RGB",
    "price": 59,
    "originalPrice": 74,
    "description": "Teclado Mecánico RGB de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-camara-web-full-7",
    "name": "Cámara Web Full HD",
    "price": 76,
    "description": "Cámara Web Full HD de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-router-wifi-6-8",
    "name": "Router WiFi 6",
    "price": 15,
    "description": "Router WiFi 6 de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-disco-duro-exte-9",
    "name": "Disco Duro Externo 1TB",
    "price": 24,
    "description": "Disco Duro Externo 1TB de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-parlante-blueto-10",
    "name": "Parlante Bluetooth WaterProof",
    "price": 70,
    "description": "Parlante Bluetooth WaterProof de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-cargador-rapido-11",
    "name": "Cargador Rápido 20W",
    "price": 54,
    "description": "Cargador Rápido 20W de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-power-bank-1000-12",
    "name": "Power Bank 10000mAh",
    "price": 12,
    "originalPrice": 16,
    "description": "Power Bank 10000mAh de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-funda-para-lapt-13",
    "name": "Funda para Laptop",
    "price": 74,
    "description": "Funda para Laptop de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-monitor-24-ips-14",
    "name": "Monitor 24\" IPS",
    "price": 27,
    "description": "Monitor 24\" IPS de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-soporte-para-ce-15",
    "name": "Soporte para Celular",
    "price": 82,
    "description": "Soporte para Celular de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-aro-de-luz-led-16",
    "name": "Aro de Luz LED",
    "price": 83,
    "description": "Aro de Luz LED de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-microfono-para--17",
    "name": "Micrófono para Streaming",
    "price": 75,
    "description": "Micrófono para Streaming de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-adaptador-usb-c-18",
    "name": "Adaptador USB-C Hub",
    "price": 49,
    "description": "Adaptador USB-C Hub de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "gadget-place-cable-hdmi-4k-19",
    "name": "Cable HDMI 4K",
    "price": 77,
    "description": "Cable HDMI 4K de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Marca Pro",
      "warrantyMonths": 12
    }
  },
  {
    "id": "repuestos-el-cholo-kit-de-embrague-0",
    "name": "Kit de Embrague Toyota",
    "price": 70,
    "originalPrice": 88,
    "description": "Kit de Embrague Toyota de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/kit-de-embrague-toyota.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-pastillas-de-fr-1",
    "name": "Pastillas de Freno Delanteras",
    "price": 12,
    "description": "Pastillas de Freno Delanteras de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/pastillas-de-freno-delanteras.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-amortiguadores--2",
    "name": "Amortiguadores Traseros x2",
    "price": 53,
    "originalPrice": 67,
    "description": "Amortiguadores Traseros x2 de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/amortiguadores-traserosx2.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-filtro-de-aire--3",
    "name": "Filtro de Aire Original",
    "price": 85,
    "description": "Filtro de Aire Original de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/filtro-de-aire-original.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-filtro-de-aceit-4",
    "name": "Filtro de Aceite",
    "price": 19,
    "description": "Filtro de Aceite de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/filtro-de-aceite.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-bujias-de-iridi-5",
    "name": "Bujías de Iridium x4",
    "price": 27,
    "description": "Bujías de Iridium x4 de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/bujias-de-iridiumx4.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-bateria-13-plac-6",
    "name": "Batería 13 Placas",
    "price": 60,
    "originalPrice": 76,
    "description": "Batería 13 Placas de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/bateria-13-placas.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-aceite-multigra-7",
    "name": "Aceite Multigrado 20W-50",
    "price": 49,
    "originalPrice": 62,
    "description": "Aceite Multigrado 20W-50 de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/aceite-multigrado-20w.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-refrigerante-pr-8",
    "name": "Refrigerante Premium",
    "price": 76,
    "description": "Refrigerante Premium de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/refrigerante-premium.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-liquido-de-fren-9",
    "name": "Líquido de Frenos Dot4",
    "price": 46,
    "description": "Líquido de Frenos Dot4 de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/liquido-de-frenos-dot4.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-faro-delantero--10",
    "name": "Faro Delantero Derecho",
    "price": 30,
    "originalPrice": 38,
    "description": "Faro Delantero Derecho de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/faro-delantero-derecho.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-espejo-retrovis-11",
    "name": "Espejo Retrovisor Lateral",
    "price": 53,
    "description": "Espejo Retrovisor Lateral de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/espejo-retrovisor-lateral.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-bomba-de-agua-12",
    "name": "Bomba de Agua",
    "price": 29,
    "description": "Bomba de Agua de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/bomba-de-agua.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-correa-de-distr-13",
    "name": "Correa de Distribución",
    "price": 47,
    "originalPrice": 59,
    "description": "Correa de Distribución de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/correa-de-distribucion.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-rodaje-de-rueda-14",
    "name": "Rodaje de Rueda",
    "price": 72,
    "description": "Rodaje de Rueda de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/rodaje-de-rueda.webp",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-empaque-de-cula-15",
    "name": "Empaque de Culata",
    "price": 64,
    "description": "Empaque de Culata de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/empaque-de-culata.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-sensor-de-oxige-16",
    "name": "Sensor de Oxígeno",
    "price": 20,
    "description": "Sensor de Oxígeno de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/sensor-de-oxigeno.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-radiador-de-alu-17",
    "name": "Radiador de Aluminio",
    "price": 17,
    "description": "Radiador de Aluminio de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/radiador-de-aluminio.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-arrancador-elec-18",
    "name": "Arrancador Eléctrico",
    "price": 58,
    "description": "Arrancador Eléctrico de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/arrancador-electrico.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "repuestos-el-cholo-alternador-90a-19",
    "name": "Alternador 90A",
    "price": 85,
    "description": "Alternador 90A de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/repuestos-el-cholo/alternador-90a.jpg",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-kit-de-embrague-0",
    "name": "Kit de Embrague Toyota",
    "price": 80,
    "description": "Kit de Embrague Toyota de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-pastillas-de-fr-1",
    "name": "Pastillas de Freno Delanteras",
    "price": 48,
    "originalPrice": 60,
    "description": "Pastillas de Freno Delanteras de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-amortiguadores--2",
    "name": "Amortiguadores Traseros x2",
    "price": 35,
    "description": "Amortiguadores Traseros x2 de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-filtro-de-aire--3",
    "name": "Filtro de Aire Original",
    "price": 83,
    "description": "Filtro de Aire Original de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-filtro-de-aceit-4",
    "name": "Filtro de Aceite",
    "price": 24,
    "originalPrice": 30,
    "description": "Filtro de Aceite de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-bujias-de-iridi-5",
    "name": "Bujías de Iridium x4",
    "price": 49,
    "description": "Bujías de Iridium x4 de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-bateria-13-plac-6",
    "name": "Batería 13 Placas",
    "price": 77,
    "description": "Batería 13 Placas de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-aceite-multigra-7",
    "name": "Aceite Multigrado 20W-50",
    "price": 57,
    "description": "Aceite Multigrado 20W-50 de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-refrigerante-pr-8",
    "name": "Refrigerante Premium",
    "price": 79,
    "description": "Refrigerante Premium de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-liquido-de-fren-9",
    "name": "Líquido de Frenos Dot4",
    "price": 30,
    "description": "Líquido de Frenos Dot4 de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-faro-delantero--10",
    "name": "Faro Delantero Derecho",
    "price": 14,
    "description": "Faro Delantero Derecho de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-espejo-retrovis-11",
    "name": "Espejo Retrovisor Lateral",
    "price": 51,
    "originalPrice": 64,
    "description": "Espejo Retrovisor Lateral de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-bomba-de-agua-12",
    "name": "Bomba de Agua",
    "price": 26,
    "originalPrice": 33,
    "description": "Bomba de Agua de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-correa-de-distr-13",
    "name": "Correa de Distribución",
    "price": 48,
    "originalPrice": 60,
    "description": "Correa de Distribución de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-rodaje-de-rueda-14",
    "name": "Rodaje de Rueda",
    "price": 51,
    "description": "Rodaje de Rueda de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-empaque-de-cula-15",
    "name": "Empaque de Culata",
    "price": 61,
    "originalPrice": 77,
    "description": "Empaque de Culata de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-sensor-de-oxige-16",
    "name": "Sensor de Oxígeno",
    "price": 14,
    "description": "Sensor de Oxígeno de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-radiador-de-alu-17",
    "name": "Radiador de Aluminio",
    "price": 39,
    "originalPrice": 49,
    "description": "Radiador de Aluminio de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-arrancador-elec-18",
    "name": "Arrancador Eléctrico",
    "price": 52,
    "description": "Arrancador Eléctrico de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "motorepuestos-san-pedro-alternador-90a-19",
    "name": "Alternador 90A",
    "price": 46,
    "description": "Alternador 90A de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--kit-de-embrague-0",
    "name": "Kit de Embrague Toyota",
    "price": 72,
    "description": "Kit de Embrague Toyota de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--pastillas-de-fr-1",
    "name": "Pastillas de Freno Delanteras",
    "price": 38,
    "description": "Pastillas de Freno Delanteras de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--amortiguadores--2",
    "name": "Amortiguadores Traseros x2",
    "price": 17,
    "originalPrice": 22,
    "description": "Amortiguadores Traseros x2 de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--filtro-de-aire--3",
    "name": "Filtro de Aire Original",
    "price": 66,
    "originalPrice": 83,
    "description": "Filtro de Aire Original de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--filtro-de-aceit-4",
    "name": "Filtro de Aceite",
    "price": 57,
    "originalPrice": 72,
    "description": "Filtro de Aceite de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--bujias-de-iridi-5",
    "name": "Bujías de Iridium x4",
    "price": 76,
    "description": "Bujías de Iridium x4 de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--bateria-13-plac-6",
    "name": "Batería 13 Placas",
    "price": 60,
    "originalPrice": 75,
    "description": "Batería 13 Placas de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--aceite-multigra-7",
    "name": "Aceite Multigrado 20W-50",
    "price": 50,
    "description": "Aceite Multigrado 20W-50 de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--refrigerante-pr-8",
    "name": "Refrigerante Premium",
    "price": 46,
    "description": "Refrigerante Premium de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--liquido-de-fren-9",
    "name": "Líquido de Frenos Dot4",
    "price": 60,
    "description": "Líquido de Frenos Dot4 de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--faro-delantero--10",
    "name": "Faro Delantero Derecho",
    "price": 54,
    "description": "Faro Delantero Derecho de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--espejo-retrovis-11",
    "name": "Espejo Retrovisor Lateral",
    "price": 24,
    "originalPrice": 31,
    "description": "Espejo Retrovisor Lateral de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--bomba-de-agua-12",
    "name": "Bomba de Agua",
    "price": 51,
    "description": "Bomba de Agua de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--correa-de-distr-13",
    "name": "Correa de Distribución",
    "price": 53,
    "originalPrice": 67,
    "description": "Correa de Distribución de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--rodaje-de-rueda-14",
    "name": "Rodaje de Rueda",
    "price": 72,
    "originalPrice": 90,
    "description": "Rodaje de Rueda de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--empaque-de-cula-15",
    "name": "Empaque de Culata",
    "price": 70,
    "description": "Empaque de Culata de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--sensor-de-oxige-16",
    "name": "Sensor de Oxígeno",
    "price": 56,
    "description": "Sensor de Oxígeno de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--radiador-de-alu-17",
    "name": "Radiador de Aluminio",
    "price": 21,
    "description": "Radiador de Aluminio de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--arrancador-elec-18",
    "name": "Arrancador Eléctrico",
    "price": 37,
    "description": "Arrancador Eléctrico de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "todo-motor--alternador-90a-19",
    "name": "Alternador 90A",
    "price": 19,
    "description": "Alternador 90A de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-kit-de-embrague-0",
    "name": "Kit de Embrague Toyota",
    "price": 57,
    "description": "Kit de Embrague Toyota de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-pastillas-de-fr-1",
    "name": "Pastillas de Freno Delanteras",
    "price": 53,
    "description": "Pastillas de Freno Delanteras de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-amortiguadores--2",
    "name": "Amortiguadores Traseros x2",
    "price": 36,
    "description": "Amortiguadores Traseros x2 de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-filtro-de-aire--3",
    "name": "Filtro de Aire Original",
    "price": 48,
    "description": "Filtro de Aire Original de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-filtro-de-aceit-4",
    "name": "Filtro de Aceite",
    "price": 41,
    "description": "Filtro de Aceite de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-bujias-de-iridi-5",
    "name": "Bujías de Iridium x4",
    "price": 17,
    "originalPrice": 22,
    "description": "Bujías de Iridium x4 de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-bateria-13-plac-6",
    "name": "Batería 13 Placas",
    "price": 18,
    "description": "Batería 13 Placas de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-aceite-multigra-7",
    "name": "Aceite Multigrado 20W-50",
    "price": 57,
    "description": "Aceite Multigrado 20W-50 de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-refrigerante-pr-8",
    "name": "Refrigerante Premium",
    "price": 26,
    "description": "Refrigerante Premium de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-liquido-de-fren-9",
    "name": "Líquido de Frenos Dot4",
    "price": 36,
    "description": "Líquido de Frenos Dot4 de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-faro-delantero--10",
    "name": "Faro Delantero Derecho",
    "price": 63,
    "description": "Faro Delantero Derecho de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-espejo-retrovis-11",
    "name": "Espejo Retrovisor Lateral",
    "price": 89,
    "description": "Espejo Retrovisor Lateral de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-bomba-de-agua-12",
    "name": "Bomba de Agua",
    "price": 63,
    "description": "Bomba de Agua de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-correa-de-distr-13",
    "name": "Correa de Distribución",
    "price": 55,
    "description": "Correa de Distribución de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-rodaje-de-rueda-14",
    "name": "Rodaje de Rueda",
    "price": 58,
    "description": "Rodaje de Rueda de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-empaque-de-cula-15",
    "name": "Empaque de Culata",
    "price": 12,
    "description": "Empaque de Culata de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-sensor-de-oxige-16",
    "name": "Sensor de Oxígeno",
    "price": 67,
    "originalPrice": 84,
    "description": "Sensor de Oxígeno de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-radiador-de-alu-17",
    "name": "Radiador de Aluminio",
    "price": 63,
    "description": "Radiador de Aluminio de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-arrancador-elec-18",
    "name": "Arrancador Eléctrico",
    "price": 17,
    "originalPrice": 22,
    "description": "Arrancador Eléctrico de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "mecanica-pro-alternador-90a-19",
    "name": "Alternador 90A",
    "price": 60,
    "description": "Alternador 90A de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-kit-de-embrague-0",
    "name": "Kit de Embrague Toyota",
    "price": 70,
    "originalPrice": 88,
    "description": "Kit de Embrague Toyota de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-pastillas-de-fr-1",
    "name": "Pastillas de Freno Delanteras",
    "price": 55,
    "description": "Pastillas de Freno Delanteras de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-amortiguadores--2",
    "name": "Amortiguadores Traseros x2",
    "price": 39,
    "description": "Amortiguadores Traseros x2 de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-filtro-de-aire--3",
    "name": "Filtro de Aire Original",
    "price": 43,
    "originalPrice": 54,
    "description": "Filtro de Aire Original de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-filtro-de-aceit-4",
    "name": "Filtro de Aceite",
    "price": 84,
    "description": "Filtro de Aceite de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-bujias-de-iridi-5",
    "name": "Bujías de Iridium x4",
    "price": 71,
    "description": "Bujías de Iridium x4 de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-bateria-13-plac-6",
    "name": "Batería 13 Placas",
    "price": 72,
    "originalPrice": 91,
    "description": "Batería 13 Placas de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-aceite-multigra-7",
    "name": "Aceite Multigrado 20W-50",
    "price": 69,
    "description": "Aceite Multigrado 20W-50 de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-refrigerante-pr-8",
    "name": "Refrigerante Premium",
    "price": 91,
    "description": "Refrigerante Premium de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-liquido-de-fren-9",
    "name": "Líquido de Frenos Dot4",
    "price": 21,
    "description": "Líquido de Frenos Dot4 de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-faro-delantero--10",
    "name": "Faro Delantero Derecho",
    "price": 58,
    "originalPrice": 73,
    "description": "Faro Delantero Derecho de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-espejo-retrovis-11",
    "name": "Espejo Retrovisor Lateral",
    "price": 12,
    "description": "Espejo Retrovisor Lateral de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-bomba-de-agua-12",
    "name": "Bomba de Agua",
    "price": 33,
    "description": "Bomba de Agua de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-correa-de-distr-13",
    "name": "Correa de Distribución",
    "price": 27,
    "description": "Correa de Distribución de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-rodaje-de-rueda-14",
    "name": "Rodaje de Rueda",
    "price": 43,
    "description": "Rodaje de Rueda de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-empaque-de-cula-15",
    "name": "Empaque de Culata",
    "price": 47,
    "description": "Empaque de Culata de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-sensor-de-oxige-16",
    "name": "Sensor de Oxígeno",
    "price": 55,
    "originalPrice": 69,
    "description": "Sensor de Oxígeno de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-radiador-de-alu-17",
    "name": "Radiador de Aluminio",
    "price": 61,
    "description": "Radiador de Aluminio de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-arrancador-elec-18",
    "name": "Arrancador Eléctrico",
    "price": 66,
    "description": "Arrancador Eléctrico de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-ciguenal-ci-alternador-90a-19",
    "name": "Alternador 90A",
    "price": 87,
    "description": "Alternador 90A de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "compatibility": {
        "brand": "Universal",
        "model": "Varios",
        "year": 2024
      }
    }
  },
  {
    "id": "el-horno-pollerya-pollo-brasa-0",
    "name": "1/4 de Pollo a la Brasa",
    "price": 18,
    "description": "Jugoso pollo a la brasa acompañado de papas fritas, ensalada y cremas.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
    "category": "comidas",
    "storeName": "El Horno Pollería",
    "storeId": "el-horno-pollerya",
    "whatsappNumber": "981234567",
    "attributes": {
      "portion": "Personal"
    }
  },
  {
    "id": "el-horno-pollerya-lomo-saltado-1",
    "name": "Lomo Saltado Criollo",
    "price": 25,
    "description": "Fino lomo saltado con cebolla, tomate, ají amarillo y papas fritas.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
    "category": "comidas",
    "storeName": "El Horno Pollería",
    "storeId": "el-horno-pollerya",
    "whatsappNumber": "981234567",
    "attributes": {
      "portion": "Plato fondo"
    }
  },
  {
    "id": "el-horno-pollerya-arroz-pollo-2",
    "name": "Arroz con Pollo Chachapoyano",
    "price": 20,
    "description": "Sabroso arroz verde con presa de pollo y sarsa criolla.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
    "category": "comidas",
    "storeName": "El Horno Pollería",
    "storeId": "el-horno-pollerya",
    "whatsappNumber": "981234567",
    "attributes": {
      "portion": "Plato fondo"
    }
  },
  {
    "id": "el-horno-pollerya-chaufa-pollo-3",
    "name": "Arroz Chaufa de Pollo",
    "price": 15,
    "description": "Arroz saltado al estilo oriental con trozos de pollo y cebollita china.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
    "category": "comidas",
    "storeName": "El Horno Pollería",
    "storeId": "el-horno-pollerya",
    "whatsappNumber": "981234567",
    "attributes": {
      "portion": "Plato fondo"
    }
  },
  {
    "id": "licorerya-el-brindis-cerveza-cusqu-0",
    "name": "Cerveza Cusqueña Dorada 620ml",
    "price": 8,
    "description": "Cerveza premium peruana, helada y lista para disfrutar.",
    "image": "https://images.unsplash.com/photo-1544145945-f904253d0c7b?q=80&w=800",
    "category": "bebidas",
    "storeName": "Licorería El Brindis",
    "storeId": "licorerya-el-brindis",
    "whatsappNumber": "982345678",
    "attributes": {
      "unit": "Botella"
    }
  },
  {
    "id": "licorerya-el-brindis-inka-kola-2l-1",
    "name": "Inka Kola 2 Litros",
    "price": 7,
    "description": "Gaseosa Inka Kola familiar, ideal para acompañar tus comidas.",
    "image": "https://images.unsplash.com/photo-1544145945-f904253d0c7b?q=80&w=800",
    "category": "bebidas",
    "storeName": "Licorería El Brindis",
    "storeId": "licorerya-el-brindis",
    "whatsappNumber": "982345678",
    "attributes": {
      "unit": "Botella"
    }
  },
  {
    "id": "licorerya-el-brindis-pisco-porton-2",
    "name": "Pisco Portón Mosto Verde",
    "price": 120,
    "description": "Pisco premium de máxima calidad para ocasiones especiales.",
    "image": "https://images.unsplash.com/photo-1544145945-f904253d0c7b?q=80&w=800",
    "category": "bebidas",
    "storeName": "Licorería El Brindis",
    "storeId": "licorerya-el-brindis",
    "whatsappNumber": "982345678",
    "attributes": {
      "unit": "Botella 750ml"
    }
  },
  {
    "id": "licorerya-el-brindis-agua-san-mateo-3",
    "name": "Agua San Mateo 2.5L",
    "price": 4,
    "description": "Agua mineral de manantial, ideal para hidratarte.",
    "image": "https://images.unsplash.com/photo-1544145945-f904253d0c7b?q=80&w=800",
    "category": "bebidas",
    "storeName": "Licorería El Brindis",
    "storeId": "licorerya-el-brindis",
    "whatsappNumber": "982345678",
    "attributes": {
      "unit": "Botella"
    }
  }
];

export const MOCK_PRODUCTS: Product[] = RAW_MOCK_PRODUCTS.map((product) => ({
  ...product,
  image: product.category === "outfit"
    ? OUTFIT_PRODUCT_IMAGES[product.name] ?? product.image
    : product.image
}));
