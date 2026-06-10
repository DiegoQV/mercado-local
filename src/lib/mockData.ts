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
  motor: "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=800"
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
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    "id": "prod-comer-aceite-vegetal--0",
    "name": "Aceite Vegetal Primor",
    "price": 91,
    "description": "Aceite Vegetal Primor de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/aceite-vegetal-primor.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-arroz-extra-cos-1",
    "name": "Arroz Extra Costeño",
    "price": 43,
    "originalPrice": 54,
    "description": "Arroz Extra Costeño de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/arroz-extra-costeno.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-cafe-tostado-al-2",
    "name": "Café Tostado Alto Mayo",
    "price": 89,
    "description": "Café Tostado Alto Mayo de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/cafe-tostado-alto-mayo.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-fideos-don-vitt-3",
    "name": "Fideos Don Vittorio",
    "price": 49,
    "description": "Fideos Don Vittorio de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/fideos-don-vittorio.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-leche-evaporada-4",
    "name": "Leche Evaporada Gloria",
    "price": 64,
    "originalPrice": 81,
    "description": "Leche Evaporada Gloria de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/leche-evaporada-gloria.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-miel-silvestre--5",
    "name": "Miel Silvestre Chanchamiel",
    "price": 44,
    "description": "Miel Silvestre Chanchamiel de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/miel-silvestre-chanchamiel.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-azucar-rubia-ca-6",
    "name": "Azúcar Rubia Cartavio",
    "price": 46,
    "description": "Azúcar Rubia Cartavio de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/azucar-rubia-cartavio.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-atun-real-en-tr-7",
    "name": "Atún Real en Trozos",
    "price": 65,
    "originalPrice": 82,
    "description": "Atún Real en Trozos de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/atun-real-en-trozos.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-lentejas-costen-8",
    "name": "Lentejas Costeño",
    "price": 89,
    "description": "Lentejas Costeño de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/lentejas-costeno.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-avena-3-ositos-9",
    "name": "Avena 3 Ositos",
    "price": 49,
    "description": "Avena 3 Ositos de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/avena-3-ositos.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-yogurt-gloria-f-10",
    "name": "Yogurt Gloria Fresa",
    "price": 39,
    "originalPrice": 49,
    "description": "Yogurt Gloria Fresa de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/yogurt-gloria-fresa.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-galletas-soda-f-11",
    "name": "Galletas Soda Field",
    "price": 21,
    "originalPrice": 27,
    "description": "Galletas Soda Field de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/galletas-soda-field.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-detergente-opal-12",
    "name": "Detergente Opal",
    "price": 37,
    "originalPrice": 47,
    "description": "Detergente Opal de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/detergente-opal.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-jabon-bolivar-13",
    "name": "Jabón Bolívar",
    "price": 82,
    "description": "Jabón Bolívar de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/jabon-bolivar.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-papel-higienico-14",
    "name": "Papel Higiénico Elite",
    "price": 66,
    "description": "Papel Higiénico Elite de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/papel-higienico-elite.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-aceite-de-oliva-15",
    "name": "Aceite de Oliva Extra Virgen",
    "price": 69,
    "originalPrice": 87,
    "description": "Aceite de Oliva Extra Virgen de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/aceite-de-oliva-extra-virgen.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-sal-de-maras-16",
    "name": "Sal de Maras",
    "price": 30,
    "originalPrice": 38,
    "description": "Sal de Maras de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/sal-de-maras.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-quinua-real-1kg-17",
    "name": "Quinua Real 1kg",
    "price": 28,
    "description": "Quinua Real 1kg de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/quinua-real-1kg.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-filete-de-cabal-18",
    "name": "Filete de Caballa",
    "price": 88,
    "description": "Filete de Caballa de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/filete-de-caballa.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-comer-mayonesa-alacen-19",
    "name": "Mayonesa Alacena",
    "price": 54,
    "originalPrice": 68,
    "description": "Mayonesa Alacena de alta calidad, disponible para entrega inmediata en Comercial Collantes.",
    "image": "/images/Supermercado/Comercial Collantes/mayonesa-alacena.png",
    "category": "abarrotes",
    "storeName": "Comercial Collantes",
    "storeId": "comercial-collantes",
    "whatsappNumber": "978410457",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-aceite-vegetal--0",
    "name": "Aceite Vegetal Primor",
    "price": 76,
    "description": "Aceite Vegetal Primor de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/aceite-vegetal-primor.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-arroz-extra-cos-1",
    "name": "Arroz Extra Costeño",
    "price": 47,
    "description": "Arroz Extra Costeño de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/arroz-extra-costeno.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-cafe-tostado-al-2",
    "name": "Café Tostado Alto Mayo",
    "price": 44,
    "originalPrice": 56,
    "description": "Café Tostado Alto Mayo de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/cafe-tostado-alto-mayo.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-fideos-don-vitt-3",
    "name": "Fideos Don Vittorio",
    "price": 85,
    "description": "Fideos Don Vittorio de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/fideos-don-vittorio.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-leche-evaporada-4",
    "name": "Leche Evaporada Gloria",
    "price": 23,
    "description": "Leche Evaporada Gloria de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/leche-evaporada-gloria.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-miel-silvestre--5",
    "name": "Miel Silvestre Chanchamiel",
    "price": 74,
    "description": "Miel Silvestre Chanchamiel de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/miel-silvestre-chanchamiel.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-azucar-rubia-ca-6",
    "name": "Azúcar Rubia Cartavio",
    "price": 15,
    "description": "Azúcar Rubia Cartavio de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/azucar-rubia-cartavio.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-atun-real-en-tr-7",
    "name": "Atún Real en Trozos",
    "price": 58,
    "description": "Atún Real en Trozos de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/atun-real-en-trozos.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-lentejas-costen-8",
    "name": "Lentejas Costeño",
    "price": 58,
    "originalPrice": 73,
    "description": "Lentejas Costeño de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/lentejas-costeno.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-avena-3-ositos-9",
    "name": "Avena 3 Ositos",
    "price": 84,
    "description": "Avena 3 Ositos de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/avena-3-ositos.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-yogurt-gloria-f-10",
    "name": "Yogurt Gloria Fresa",
    "price": 61,
    "description": "Yogurt Gloria Fresa de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/yogurt-gloria-fresa.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-galletas-soda-f-11",
    "name": "Galletas Soda Field",
    "price": 43,
    "originalPrice": 54,
    "description": "Galletas Soda Field de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/galletas-soda-field.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-detergente-opal-12",
    "name": "Detergente Opal",
    "price": 63,
    "description": "Detergente Opal de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/detergente-opal.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-jabon-bolivar-13",
    "name": "Jabón Bolívar",
    "price": 13,
    "description": "Jabón Bolívar de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/jabon-bolivar.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-papel-higienico-14",
    "name": "Papel Higiénico Elite",
    "price": 46,
    "description": "Papel Higiénico Elite de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/papel-higienico-elite.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-aceite-de-oliva-15",
    "name": "Aceite de Oliva Extra Virgen",
    "price": 28,
    "description": "Aceite de Oliva Extra Virgen de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/aceite-de-oliva-extra-virgen.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-sal-de-maras-16",
    "name": "Sal de Maras",
    "price": 48,
    "originalPrice": 61,
    "description": "Sal de Maras de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/sal-de-maras.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-quinua-real-1kg-17",
    "name": "Quinua Real 1kg",
    "price": 71,
    "originalPrice": 89,
    "description": "Quinua Real 1kg de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/quinua-real-1kg.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-filete-de-cabal-18",
    "name": "Filete de Caballa",
    "price": 36,
    "description": "Filete de Caballa de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/filete-de-caballa.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-mayonesa-alacen-19",
    "name": "Mayonesa Alacena",
    "price": 23,
    "description": "Mayonesa Alacena de alta calidad, disponible para entrega inmediata en Supermercado El Bosque.",
    "image": "/images/Supermercado/Supermercado El Bosque/mayonesa-alacena.png",
    "category": "abarrotes",
    "storeName": "Supermercado El Bosque",
    "storeId": "supermercado-el-bosque",
    "whatsappNumber": "945678123",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-aceite-vegetal--0",
    "name": "Aceite Vegetal Primor",
    "price": 45,
    "description": "Aceite Vegetal Primor de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/aceite-vegetal-primor.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-arroz-extra-cos-1",
    "name": "Arroz Extra Costeño",
    "price": 27,
    "originalPrice": 34,
    "description": "Arroz Extra Costeño de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/arroz-extra-costeno.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-cafe-tostado-al-2",
    "name": "Café Tostado Alto Mayo",
    "price": 38,
    "originalPrice": 48,
    "description": "Café Tostado Alto Mayo de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/cafe-tostado-alto-mayo.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-fideos-don-vitt-3",
    "name": "Fideos Don Vittorio",
    "price": 17,
    "originalPrice": 22,
    "description": "Fideos Don Vittorio de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/fideos-don-vittorio.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-leche-evaporada-4",
    "name": "Leche Evaporada Gloria",
    "price": 52,
    "originalPrice": 66,
    "description": "Leche Evaporada Gloria de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/leche-evaporada-gloria.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-miel-silvestre--5",
    "name": "Miel Silvestre Chanchamiel",
    "price": 19,
    "originalPrice": 24,
    "description": "Miel Silvestre Chanchamiel de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/miel-silvestre-chanchamiel.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-azucar-rubia-ca-6",
    "name": "Azúcar Rubia Cartavio",
    "price": 56,
    "originalPrice": 71,
    "description": "Azúcar Rubia Cartavio de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/azucar-rubia-cartavio.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-atun-real-en-tr-7",
    "name": "Atún Real en Trozos",
    "price": 60,
    "description": "Atún Real en Trozos de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/atun-real-en-trozos.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-lentejas-costen-8",
    "name": "Lentejas Costeño",
    "price": 12,
    "originalPrice": 15,
    "description": "Lentejas Costeño de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/lentejas-costeno.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-avena-3-ositos-9",
    "name": "Avena 3 Ositos",
    "price": 33,
    "description": "Avena 3 Ositos de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/avena-3-ositos.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-yogurt-gloria-f-10",
    "name": "Yogurt Gloria Fresa",
    "price": 63,
    "description": "Yogurt Gloria Fresa de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/yogurt-gloria-fresa.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-galletas-soda-f-11",
    "name": "Galletas Soda Field",
    "price": 56,
    "description": "Galletas Soda Field de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/galletas-soda-field.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-detergente-opal-12",
    "name": "Detergente Opal",
    "price": 62,
    "description": "Detergente Opal de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/detergente-opal.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-jabon-bolivar-13",
    "name": "Jabón Bolívar",
    "price": 61,
    "description": "Jabón Bolívar de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/jabon-bolivar.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-papel-higienico-14",
    "name": "Papel Higiénico Elite",
    "price": 40,
    "originalPrice": 51,
    "description": "Papel Higiénico Elite de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/papel-higienico-elite.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-aceite-de-oliva-15",
    "name": "Aceite de Oliva Extra Virgen",
    "price": 26,
    "description": "Aceite de Oliva Extra Virgen de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/aceite-de-oliva-extra-virgen.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-sal-de-maras-16",
    "name": "Sal de Maras",
    "price": 63,
    "description": "Sal de Maras de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/sal-de-maras.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-quinua-real-1kg-17",
    "name": "Quinua Real 1kg",
    "price": 81,
    "description": "Quinua Real 1kg de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/quinua-real-1kg.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-filete-de-cabal-18",
    "name": "Filete de Caballa",
    "price": 56,
    "originalPrice": 71,
    "description": "Filete de Caballa de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/filete-de-caballa.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-minim-mayonesa-alacen-19",
    "name": "Mayonesa Alacena",
    "price": 62,
    "description": "Mayonesa Alacena de alta calidad, disponible para entrega inmediata en Minimarket La Estrecha.",
    "image": "/images/Supermercado/Minimarket La Estrecha/mayonesa-alacena.png",
    "category": "abarrotes",
    "storeName": "Minimarket La Estrecha",
    "storeId": "minimarket-la-estrecha",
    "whatsappNumber": "912345678",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-aceite-vegetal--0",
    "name": "Aceite Vegetal Primor",
    "price": 51,
    "originalPrice": 64,
    "description": "Aceite Vegetal Primor de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/aceite-vegetal-primor.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-arroz-extra-cos-1",
    "name": "Arroz Extra Costeño",
    "price": 55,
    "description": "Arroz Extra Costeño de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/arroz-extra-costeno.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-cafe-tostado-al-2",
    "name": "Café Tostado Alto Mayo",
    "price": 22,
    "originalPrice": 28,
    "description": "Café Tostado Alto Mayo de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/cafe-tostado-alto-mayo.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-fideos-don-vitt-3",
    "name": "Fideos Don Vittorio",
    "price": 41,
    "description": "Fideos Don Vittorio de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/fideos-don-vittorio.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-leche-evaporada-4",
    "name": "Leche Evaporada Gloria",
    "price": 21,
    "description": "Leche Evaporada Gloria de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/leche-evaporada-gloria.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-miel-silvestre--5",
    "name": "Miel Silvestre Chanchamiel",
    "price": 52,
    "description": "Miel Silvestre Chanchamiel de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/miel-silvestre-chanchamiel.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-azucar-rubia-ca-6",
    "name": "Azúcar Rubia Cartavio",
    "price": 13,
    "originalPrice": 17,
    "description": "Azúcar Rubia Cartavio de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/azucar-rubia-cartavio.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-atun-real-en-tr-7",
    "name": "Atún Real en Trozos",
    "price": 9,
    "originalPrice": 12,
    "description": "Atún Real en Trozos de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/atun-real-en-trozos.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-lentejas-costen-8",
    "name": "Lentejas Costeño",
    "price": 88,
    "description": "Lentejas Costeño de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/lentejas-costeno.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-avena-3-ositos-9",
    "name": "Avena 3 Ositos",
    "price": 34,
    "originalPrice": 43,
    "description": "Avena 3 Ositos de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/avena-3-ositos.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-yogurt-gloria-f-10",
    "name": "Yogurt Gloria Fresa",
    "price": 69,
    "originalPrice": 87,
    "description": "Yogurt Gloria Fresa de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/yogurt-gloria-fresa.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-galletas-soda-f-11",
    "name": "Galletas Soda Field",
    "price": 16,
    "originalPrice": 21,
    "description": "Galletas Soda Field de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/galletas-soda-field.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-detergente-opal-12",
    "name": "Detergente Opal",
    "price": 28,
    "description": "Detergente Opal de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/detergente-opal.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-jabon-bolivar-13",
    "name": "Jabón Bolívar",
    "price": 34,
    "description": "Jabón Bolívar de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/jabon-bolivar.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-papel-higienico-14",
    "name": "Papel Higiénico Elite",
    "price": 55,
    "description": "Papel Higiénico Elite de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/papel-higienico-elite.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-aceite-de-oliva-15",
    "name": "Aceite de Oliva Extra Virgen",
    "price": 44,
    "description": "Aceite de Oliva Extra Virgen de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/aceite-de-oliva-extra-virgen.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-sal-de-maras-16",
    "name": "Sal de Maras",
    "price": 64,
    "description": "Sal de Maras de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/sal-de-maras.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-quinua-real-1kg-17",
    "name": "Quinua Real 1kg",
    "price": 16,
    "description": "Quinua Real 1kg de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/quinua-real-1kg.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-filete-de-cabal-18",
    "name": "Filete de Caballa",
    "price": 57,
    "originalPrice": 72,
    "description": "Filete de Caballa de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/filete-de-caballa.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-super-mayonesa-alacen-19",
    "name": "Mayonesa Alacena",
    "price": 22,
    "originalPrice": 28,
    "description": "Mayonesa Alacena de alta calidad, disponible para entrega inmediata en Super El Sol.",
    "image": "/images/Supermercado/Super El Sol/mayonesa-alacena.png",
    "category": "abarrotes",
    "storeName": "Super El Sol",
    "storeId": "super-el-sol",
    "whatsappNumber": "987654321",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-aceite-vegetal--0",
    "name": "Aceite Vegetal Primor",
    "price": 85,
    "description": "Aceite Vegetal Primor de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/aceite-vegetal-primor.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-arroz-extra-cos-1",
    "name": "Arroz Extra Costeño",
    "price": 79,
    "description": "Arroz Extra Costeño de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/arroz-extra-costeno.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-cafe-tostado-al-2",
    "name": "Café Tostado Alto Mayo",
    "price": 90,
    "description": "Café Tostado Alto Mayo de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/cafe-tostado-alto-mayo.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-fideos-don-vitt-3",
    "name": "Fideos Don Vittorio",
    "price": 41,
    "description": "Fideos Don Vittorio de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/fideos-don-vittorio.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-leche-evaporada-4",
    "name": "Leche Evaporada Gloria",
    "price": 68,
    "originalPrice": 85,
    "description": "Leche Evaporada Gloria de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/leche-evaporada-gloria.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-miel-silvestre--5",
    "name": "Miel Silvestre Chanchamiel",
    "price": 47,
    "description": "Miel Silvestre Chanchamiel de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/miel-silvestre-chanchamiel.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-azucar-rubia-ca-6",
    "name": "Azúcar Rubia Cartavio",
    "price": 72,
    "description": "Azúcar Rubia Cartavio de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/azucar-rubia-cartavio.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-atun-real-en-tr-7",
    "name": "Atún Real en Trozos",
    "price": 45,
    "description": "Atún Real en Trozos de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/atun-real-en-trozos.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-lentejas-costen-8",
    "name": "Lentejas Costeño",
    "price": 23,
    "originalPrice": 29,
    "description": "Lentejas Costeño de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/lentejas-costeno.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-avena-3-ositos-9",
    "name": "Avena 3 Ositos",
    "price": 34,
    "originalPrice": 43,
    "description": "Avena 3 Ositos de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/avena-3-ositos.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-yogurt-gloria-f-10",
    "name": "Yogurt Gloria Fresa",
    "price": 37,
    "originalPrice": 47,
    "description": "Yogurt Gloria Fresa de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/yogurt-gloria-fresa.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-galletas-soda-f-11",
    "name": "Galletas Soda Field",
    "price": 54,
    "originalPrice": 68,
    "description": "Galletas Soda Field de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/galletas-soda-field.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-detergente-opal-12",
    "name": "Detergente Opal",
    "price": 40,
    "originalPrice": 50,
    "description": "Detergente Opal de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/detergente-opal.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-jabon-bolivar-13",
    "name": "Jabón Bolívar",
    "price": 24,
    "description": "Jabón Bolívar de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/jabon-bolivar.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-papel-higienico-14",
    "name": "Papel Higiénico Elite",
    "price": 62,
    "description": "Papel Higiénico Elite de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/papel-higienico-elite.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-aceite-de-oliva-15",
    "name": "Aceite de Oliva Extra Virgen",
    "price": 30,
    "description": "Aceite de Oliva Extra Virgen de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/aceite-de-oliva-extra-virgen.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-sal-de-maras-16",
    "name": "Sal de Maras",
    "price": 55,
    "description": "Sal de Maras de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/sal-de-maras.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-quinua-real-1kg-17",
    "name": "Quinua Real 1kg",
    "price": 85,
    "description": "Quinua Real 1kg de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/quinua-real-1kg.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-filete-de-cabal-18",
    "name": "Filete de Caballa",
    "price": 46,
    "description": "Filete de Caballa de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/filete-de-caballa.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-abarr-mayonesa-alacen-19",
    "name": "Mayonesa Alacena",
    "price": 52,
    "originalPrice": 65,
    "description": "Mayonesa Alacena de alta calidad, disponible para entrega inmediata en Abarrotes San Juan.",
    "image": "/images/Supermercado/Abarrotes San Juan/mayonesa-alacena.png",
    "category": "abarrotes",
    "storeName": "Abarrotes San Juan",
    "storeId": "abarrotes-san-juan",
    "whatsappNumber": "934567890",
    "attributes": {
      "unit": "unidad"
    }
  },
  {
    "id": "prod-botic-paracetamol-500-0",
    "name": "Paracetamol 500mg",
    "price": 13,
    "originalPrice": 17,
    "description": "Paracetamol 500mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/paracetamol-500mg.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-ibuprofeno-400m-1",
    "name": "Ibuprofeno 400mg",
    "price": 33,
    "description": "Ibuprofeno 400mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/ibuprofeno-400mg.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-amoxicilina-500-2",
    "name": "Amoxicilina 500mg",
    "price": 60,
    "originalPrice": 76,
    "description": "Amoxicilina 500mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/amoxicilina-500mg.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-loratadina-10mg-3",
    "name": "Loratadina 10mg",
    "price": 13,
    "description": "Loratadina 10mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/loratadina-10mg.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-vitamina-c-redo-4",
    "name": "Vitamina C Redoxon",
    "price": 89,
    "description": "Vitamina C Redoxon de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/vitamina-c-redoxon.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-alcohol-en-gel--5",
    "name": "Alcohol en Gel 500ml",
    "price": 58,
    "description": "Alcohol en Gel 500ml de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/alcohol-en-gel-500ml.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-mascarillas-kn9-6",
    "name": "Mascarillas KN95 x10",
    "price": 62,
    "description": "Mascarillas KN95 x10 de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/mascarillas-kn95-x10.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-termometro-digi-7",
    "name": "Termómetro Digital",
    "price": 14,
    "description": "Termómetro Digital de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/termometro-digital.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-gasas-esteriles-8",
    "name": "Gasas Estériles",
    "price": 48,
    "originalPrice": 61,
    "description": "Gasas Estériles de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/gasas-esteriles.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-panadol-antigri-9",
    "name": "Panadol Antigripal",
    "price": 30,
    "originalPrice": 38,
    "description": "Panadol Antigripal de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/panadol-antigripal.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-omeprazol-20mg-10",
    "name": "Omeprazol 20mg",
    "price": 84,
    "description": "Omeprazol 20mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/omeprazol-20mg.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-simvastatina-20-11",
    "name": "Simvastatina 20mg",
    "price": 12,
    "originalPrice": 15,
    "description": "Simvastatina 20mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/simvastatina-20mg.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-metformina-850m-12",
    "name": "Metformina 850mg",
    "price": 59,
    "originalPrice": 74,
    "description": "Metformina 850mg de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/metformina-850mg.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-diclofenaco-gel-13",
    "name": "Diclofenaco Gel",
    "price": 75,
    "description": "Diclofenaco Gel de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/diclofenaco-gel.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-suero-fisiologi-14",
    "name": "Suero Fisiológico",
    "price": 21,
    "description": "Suero Fisiológico de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/suero-fisiologico.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-multivitaminico-15",
    "name": "Multivitamínico Centrum",
    "price": 46,
    "description": "Multivitamínico Centrum de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/multivitaminico-centrum.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-colirio-ocular-16",
    "name": "Colirio Ocular",
    "price": 37,
    "originalPrice": 47,
    "description": "Colirio Ocular de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/colirio-ocular.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-crema-hidratant-17",
    "name": "Crema Hidratante Cerave",
    "price": 81,
    "description": "Crema Hidratante Cerave de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/crema-hidratante-cerave.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-bloqueador-sola-18",
    "name": "Bloqueador Solar FPS50",
    "price": 24,
    "description": "Bloqueador Solar FPS50 de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/bloqueador-solar-fps50.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-jabon-liquido-n-19",
    "name": "Jabón Líquido Neutro",
    "price": 68,
    "originalPrice": 85,
    "description": "Jabón Líquido Neutro de alta calidad, disponible para entrega inmediata en Botica Amazonas.",
    "image": "/images/Farmacia/Botica Amazonas/jabon-liquido-neutro.png",
    "category": "farmacia",
    "storeName": "Botica Amazonas",
    "storeId": "botica-amazonas",
    "whatsappNumber": "945123456",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-paracetamol-500-0",
    "name": "Paracetamol 500mg",
    "price": 44,
    "originalPrice": 55,
    "description": "Paracetamol 500mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/paracetamol-500mg.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-ibuprofeno-400m-1",
    "name": "Ibuprofeno 400mg",
    "price": 53,
    "description": "Ibuprofeno 400mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/ibuprofeno-400mg.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-amoxicilina-500-2",
    "name": "Amoxicilina 500mg",
    "price": 51,
    "description": "Amoxicilina 500mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/amoxicilina-500mg.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-loratadina-10mg-3",
    "name": "Loratadina 10mg",
    "price": 63,
    "description": "Loratadina 10mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/loratadina-10mg.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-vitamina-c-redo-4",
    "name": "Vitamina C Redoxon",
    "price": 47,
    "description": "Vitamina C Redoxon de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/vitamina-c-redoxon.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-alcohol-en-gel--5",
    "name": "Alcohol en Gel 500ml",
    "price": 63,
    "description": "Alcohol en Gel 500ml de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/alcohol-en-gel-500ml.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-mascarillas-kn9-6",
    "name": "Mascarillas KN95 x10",
    "price": 41,
    "originalPrice": 52,
    "description": "Mascarillas KN95 x10 de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/mascarillas-kn95-x10.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-termometro-digi-7",
    "name": "Termómetro Digital",
    "price": 18,
    "description": "Termómetro Digital de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/termometro-digital.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-gasas-esteriles-8",
    "name": "Gasas Estériles",
    "price": 38,
    "originalPrice": 48,
    "description": "Gasas Estériles de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/gasas-esteriles.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-panadol-antigri-9",
    "name": "Panadol Antigripal",
    "price": 68,
    "description": "Panadol Antigripal de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/panadol-antigripal.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-omeprazol-20mg-10",
    "name": "Omeprazol 20mg",
    "price": 19,
    "description": "Omeprazol 20mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/omeprazol-20mg.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-simvastatina-20-11",
    "name": "Simvastatina 20mg",
    "price": 21,
    "description": "Simvastatina 20mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/simvastatina-20mg.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-metformina-850m-12",
    "name": "Metformina 850mg",
    "price": 35,
    "originalPrice": 44,
    "description": "Metformina 850mg de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/metformina-850mg.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-diclofenaco-gel-13",
    "name": "Diclofenaco Gel",
    "price": 40,
    "originalPrice": 50,
    "description": "Diclofenaco Gel de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/diclofenaco-gel.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-suero-fisiologi-14",
    "name": "Suero Fisiológico",
    "price": 13,
    "description": "Suero Fisiológico de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/suero-fisiologico.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-multivitaminico-15",
    "name": "Multivitamínico Centrum",
    "price": 44,
    "description": "Multivitamínico Centrum de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/multivitaminico-centrum.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-colirio-ocular-16",
    "name": "Colirio Ocular",
    "price": 67,
    "description": "Colirio Ocular de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/colirio-ocular.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-crema-hidratant-17",
    "name": "Crema Hidratante Cerave",
    "price": 61,
    "description": "Crema Hidratante Cerave de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/crema-hidratante-cerave.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-bloqueador-sola-18",
    "name": "Bloqueador Solar FPS50",
    "price": 54,
    "originalPrice": 68,
    "description": "Bloqueador Solar FPS50 de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/bloqueador-solar-fps50.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-inkaf-jabon-liquido-n-19",
    "name": "Jabón Líquido Neutro",
    "price": 78,
    "description": "Jabón Líquido Neutro de alta calidad, disponible para entrega inmediata en Inkafarma.",
    "image": "/images/Farmacia/Inkafarma/jabon-liquido-neutro.png",
    "category": "farmacia",
    "storeName": "Inkafarma",
    "storeId": "inkafarma",
    "whatsappNumber": "956234567",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-paracetamol-500-0",
    "name": "Paracetamol 500mg",
    "price": 88,
    "description": "Paracetamol 500mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/paracetamol-500mg.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-ibuprofeno-400m-1",
    "name": "Ibuprofeno 400mg",
    "price": 56,
    "originalPrice": 71,
    "description": "Ibuprofeno 400mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/ibuprofeno-400mg.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-amoxicilina-500-2",
    "name": "Amoxicilina 500mg",
    "price": 52,
    "description": "Amoxicilina 500mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/amoxicilina-500mg.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-loratadina-10mg-3",
    "name": "Loratadina 10mg",
    "price": 67,
    "originalPrice": 84,
    "description": "Loratadina 10mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/loratadina-10mg.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-vitamina-c-redo-4",
    "name": "Vitamina C Redoxon",
    "price": 61,
    "description": "Vitamina C Redoxon de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/vitamina-c-redoxon.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-alcohol-en-gel--5",
    "name": "Alcohol en Gel 500ml",
    "price": 86,
    "description": "Alcohol en Gel 500ml de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/alcohol-en-gel-500ml.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-mascarillas-kn9-6",
    "name": "Mascarillas KN95 x10",
    "price": 54,
    "description": "Mascarillas KN95 x10 de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/mascarillas-kn95-x10.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-termometro-digi-7",
    "name": "Termómetro Digital",
    "price": 35,
    "originalPrice": 44,
    "description": "Termómetro Digital de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/termometro-digital.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-gasas-esteriles-8",
    "name": "Gasas Estériles",
    "price": 40,
    "originalPrice": 50,
    "description": "Gasas Estériles de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/gasas-esteriles.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-panadol-antigri-9",
    "name": "Panadol Antigripal",
    "price": 34,
    "description": "Panadol Antigripal de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/panadol-antigripal.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-omeprazol-20mg-10",
    "name": "Omeprazol 20mg",
    "price": 66,
    "description": "Omeprazol 20mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/omeprazol-20mg.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-simvastatina-20-11",
    "name": "Simvastatina 20mg",
    "price": 70,
    "originalPrice": 88,
    "description": "Simvastatina 20mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/simvastatina-20mg.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-metformina-850m-12",
    "name": "Metformina 850mg",
    "price": 63,
    "description": "Metformina 850mg de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/metformina-850mg.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-diclofenaco-gel-13",
    "name": "Diclofenaco Gel",
    "price": 41,
    "description": "Diclofenaco Gel de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/diclofenaco-gel.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-suero-fisiologi-14",
    "name": "Suero Fisiológico",
    "price": 89,
    "description": "Suero Fisiológico de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/suero-fisiologico.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-multivitaminico-15",
    "name": "Multivitamínico Centrum",
    "price": 17,
    "description": "Multivitamínico Centrum de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/multivitaminico-centrum.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-colirio-ocular-16",
    "name": "Colirio Ocular",
    "price": 39,
    "originalPrice": 49,
    "description": "Colirio Ocular de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/colirio-ocular.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-crema-hidratant-17",
    "name": "Crema Hidratante Cerave",
    "price": 67,
    "originalPrice": 84,
    "description": "Crema Hidratante Cerave de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/crema-hidratante-cerave.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-bloqueador-sola-18",
    "name": "Bloqueador Solar FPS50",
    "price": 74,
    "description": "Bloqueador Solar FPS50 de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/bloqueador-solar-fps50.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mifar-jabon-liquido-n-19",
    "name": "Jabón Líquido Neutro",
    "price": 17,
    "description": "Jabón Líquido Neutro de alta calidad, disponible para entrega inmediata en MiFarma.",
    "image": "/images/Farmacia/MiFarma/jabon-liquido-neutro.png",
    "category": "farmacia",
    "storeName": "MiFarma",
    "storeId": "mifarma",
    "whatsappNumber": "967345678",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-paracetamol-500-0",
    "name": "Paracetamol 500mg",
    "price": 38,
    "originalPrice": 48,
    "description": "Paracetamol 500mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/paracetamol-500mg.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-ibuprofeno-400m-1",
    "name": "Ibuprofeno 400mg",
    "price": 43,
    "description": "Ibuprofeno 400mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/ibuprofeno-400mg.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-amoxicilina-500-2",
    "name": "Amoxicilina 500mg",
    "price": 79,
    "description": "Amoxicilina 500mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/amoxicilina-500mg.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-loratadina-10mg-3",
    "name": "Loratadina 10mg",
    "price": 46,
    "description": "Loratadina 10mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/loratadina-10mg.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-vitamina-c-redo-4",
    "name": "Vitamina C Redoxon",
    "price": 14,
    "description": "Vitamina C Redoxon de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/vitamina-c-redoxon.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-alcohol-en-gel--5",
    "name": "Alcohol en Gel 500ml",
    "price": 84,
    "description": "Alcohol en Gel 500ml de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/alcohol-en-gel-500ml.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-mascarillas-kn9-6",
    "name": "Mascarillas KN95 x10",
    "price": 64,
    "description": "Mascarillas KN95 x10 de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/mascarillas-kn95-x10.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-termometro-digi-7",
    "name": "Termómetro Digital",
    "price": 70,
    "originalPrice": 88,
    "description": "Termómetro Digital de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/termometro-digital.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-gasas-esteriles-8",
    "name": "Gasas Estériles",
    "price": 12,
    "originalPrice": 16,
    "description": "Gasas Estériles de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/gasas-esteriles.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-panadol-antigri-9",
    "name": "Panadol Antigripal",
    "price": 55,
    "description": "Panadol Antigripal de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/panadol-antigripal.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-omeprazol-20mg-10",
    "name": "Omeprazol 20mg",
    "price": 30,
    "description": "Omeprazol 20mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/omeprazol-20mg.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-simvastatina-20-11",
    "name": "Simvastatina 20mg",
    "price": 57,
    "description": "Simvastatina 20mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/simvastatina-20mg.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-metformina-850m-12",
    "name": "Metformina 850mg",
    "price": 17,
    "originalPrice": 22,
    "description": "Metformina 850mg de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/metformina-850mg.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-diclofenaco-gel-13",
    "name": "Diclofenaco Gel",
    "price": 83,
    "description": "Diclofenaco Gel de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/diclofenaco-gel.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-suero-fisiologi-14",
    "name": "Suero Fisiológico",
    "price": 50,
    "description": "Suero Fisiológico de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/suero-fisiologico.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-multivitaminico-15",
    "name": "Multivitamínico Centrum",
    "price": 45,
    "description": "Multivitamínico Centrum de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/multivitaminico-centrum.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-colirio-ocular-16",
    "name": "Colirio Ocular",
    "price": 66,
    "originalPrice": 83,
    "description": "Colirio Ocular de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/colirio-ocular.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-crema-hidratant-17",
    "name": "Crema Hidratante Cerave",
    "price": 65,
    "description": "Crema Hidratante Cerave de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/crema-hidratante-cerave.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-bloqueador-sola-18",
    "name": "Bloqueador Solar FPS50",
    "price": 34,
    "description": "Bloqueador Solar FPS50 de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/bloqueador-solar-fps50.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-botic-jabon-liquido-n-19",
    "name": "Jabón Líquido Neutro",
    "price": 65,
    "description": "Jabón Líquido Neutro de alta calidad, disponible para entrega inmediata en Botica Salud.",
    "image": "/images/Farmacia/Botica Salud/jabon-liquido-neutro.png",
    "category": "farmacia",
    "storeName": "Botica Salud",
    "storeId": "botica-salud",
    "whatsappNumber": "978456789",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-paracetamol-500-0",
    "name": "Paracetamol 500mg",
    "price": 12,
    "description": "Paracetamol 500mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/paracetamol-500mg.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-ibuprofeno-400m-1",
    "name": "Ibuprofeno 400mg",
    "price": 25,
    "description": "Ibuprofeno 400mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/ibuprofeno-400mg.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-amoxicilina-500-2",
    "name": "Amoxicilina 500mg",
    "price": 85,
    "description": "Amoxicilina 500mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/amoxicilina-500mg.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-loratadina-10mg-3",
    "name": "Loratadina 10mg",
    "price": 47,
    "originalPrice": 59,
    "description": "Loratadina 10mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/loratadina-10mg.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-vitamina-c-redo-4",
    "name": "Vitamina C Redoxon",
    "price": 19,
    "originalPrice": 24,
    "description": "Vitamina C Redoxon de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/vitamina-c-redoxon.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-alcohol-en-gel--5",
    "name": "Alcohol en Gel 500ml",
    "price": 61,
    "originalPrice": 77,
    "description": "Alcohol en Gel 500ml de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/alcohol-en-gel-500ml.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-mascarillas-kn9-6",
    "name": "Mascarillas KN95 x10",
    "price": 14,
    "description": "Mascarillas KN95 x10 de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/mascarillas-kn95-x10.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-termometro-digi-7",
    "name": "Termómetro Digital",
    "price": 35,
    "description": "Termómetro Digital de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/termometro-digital.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-gasas-esteriles-8",
    "name": "Gasas Estériles",
    "price": 48,
    "description": "Gasas Estériles de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/gasas-esteriles.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-panadol-antigri-9",
    "name": "Panadol Antigripal",
    "price": 12,
    "description": "Panadol Antigripal de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/panadol-antigripal.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-omeprazol-20mg-10",
    "name": "Omeprazol 20mg",
    "price": 67,
    "description": "Omeprazol 20mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/omeprazol-20mg.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-simvastatina-20-11",
    "name": "Simvastatina 20mg",
    "price": 45,
    "originalPrice": 57,
    "description": "Simvastatina 20mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/simvastatina-20mg.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-metformina-850m-12",
    "name": "Metformina 850mg",
    "price": 29,
    "description": "Metformina 850mg de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/metformina-850mg.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-diclofenaco-gel-13",
    "name": "Diclofenaco Gel",
    "price": 15,
    "description": "Diclofenaco Gel de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/diclofenaco-gel.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-suero-fisiologi-14",
    "name": "Suero Fisiológico",
    "price": 9,
    "originalPrice": 12,
    "description": "Suero Fisiológico de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/suero-fisiologico.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-multivitaminico-15",
    "name": "Multivitamínico Centrum",
    "price": 87,
    "description": "Multivitamínico Centrum de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/multivitaminico-centrum.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-colirio-ocular-16",
    "name": "Colirio Ocular",
    "price": 15,
    "description": "Colirio Ocular de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/colirio-ocular.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-crema-hidratant-17",
    "name": "Crema Hidratante Cerave",
    "price": 36,
    "description": "Crema Hidratante Cerave de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/crema-hidratante-cerave.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-bloqueador-sola-18",
    "name": "Bloqueador Solar FPS50",
    "price": 54,
    "originalPrice": 68,
    "description": "Bloqueador Solar FPS50 de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/bloqueador-solar-fps50.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-farma-jabon-liquido-n-19",
    "name": "Jabón Líquido Neutro",
    "price": 84,
    "description": "Jabón Líquido Neutro de alta calidad, disponible para entrega inmediata en Farmacia Chachapoyas.",
    "image": "/images/Farmacia/Farmacia Chachapoyas/jabon-liquido-neutro.png",
    "category": "farmacia",
    "storeName": "Farmacia Chachapoyas",
    "storeId": "farmacia-chachapoyas",
    "whatsappNumber": "989567890",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-ferre-martillo-de-car-0",
    "name": "Martillo de Carpintero",
    "price": 26,
    "description": "Martillo de Carpintero de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/martillo-de-carpintero.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-juego-de-destor-1",
    "name": "Juego de Destornilladores",
    "price": 80,
    "description": "Juego de Destornilladores de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/juego-de-destornilladores.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-taladro-percuto-2",
    "name": "Taladro Percutor 600W",
    "price": 50,
    "description": "Taladro Percutor 600W de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/taladro-percutor-600w.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-alicate-univers-3",
    "name": "Alicate Universal",
    "price": 16,
    "originalPrice": 20,
    "description": "Alicate Universal de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/alicate-universal.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-cinta-metrica-5-4",
    "name": "Cinta Métrica 5m",
    "price": 80,
    "description": "Cinta Métrica 5m de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/cinta-metrica-5m.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-pintura-latex-b-5",
    "name": "Pintura Látex Blanca 1gal",
    "price": 51,
    "description": "Pintura Látex Blanca 1gal de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/pintura-latex-blanca-1gal.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-brocha-de-3-pul-6",
    "name": "Brocha de 3 pulgadas",
    "price": 13,
    "description": "Brocha de 3 pulgadas de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/brocha-de-3-pulgadas.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-sierra-para-met-7",
    "name": "Sierra para Metales",
    "price": 21,
    "description": "Sierra para Metales de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/sierra-para-metales.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-llave-inglesa-1-8",
    "name": "Llave Inglesa 10\"",
    "price": 50,
    "description": "Llave Inglesa 10\" de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/llave-inglesa-10.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-nivel-de-burbuj-9",
    "name": "Nivel de Burbuja",
    "price": 83,
    "description": "Nivel de Burbuja de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/nivel-de-burbuja.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-lija-de-agua-nr-10",
    "name": "Lija de Agua Nro 80",
    "price": 81,
    "description": "Lija de Agua Nro 80 de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/lija-de-agua-nro-80.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-pegamento-pvc-11",
    "name": "Pegamento PVC",
    "price": 31,
    "description": "Pegamento PVC de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/pegamento-pvc.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-tornillos-para--12",
    "name": "Tornillos para Madera x100",
    "price": 38,
    "description": "Tornillos para Madera x100 de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/tornillos-para-madera-x100.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-clavos-de-2-pul-13",
    "name": "Clavos de 2 pulgadas x1kg",
    "price": 50,
    "originalPrice": 63,
    "description": "Clavos de 2 pulgadas x1kg de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/clavos-de-2-pulgadas-x1kg.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-candado-de-segu-14",
    "name": "Candado de Seguridad",
    "price": 37,
    "originalPrice": 47,
    "description": "Candado de Seguridad de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/candado-de-seguridad.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-manguera-de-rie-15",
    "name": "Manguera de Riego 15m",
    "price": 31,
    "originalPrice": 39,
    "description": "Manguera de Riego 15m de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/manguera-de-riego-15m.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-escalera-de-alu-16",
    "name": "Escalera de Aluminio",
    "price": 41,
    "description": "Escalera de Aluminio de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/escalera-de-aluminio.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-guantes-de-prot-17",
    "name": "Guantes de Protección",
    "price": 90,
    "description": "Guantes de Protección de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/guantes-de-proteccion.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-casco-de-obra-18",
    "name": "Casco de Obra",
    "price": 68,
    "description": "Casco de Obra de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/casco-de-obra.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-linterna-led-po-19",
    "name": "Linterna LED Potente",
    "price": 54,
    "description": "Linterna LED Potente de alta calidad, disponible para entrega inmediata en Ferretería El Progreso.",
    "image": "/images/Ferretería/Ferretería El Progreso/linterna-led-potente.png",
    "category": "ferreteria",
    "storeName": "Ferretería El Progreso",
    "storeId": "ferreteria-el-progreso",
    "whatsappNumber": "912123456",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-martillo-de-car-0",
    "name": "Martillo de Carpintero",
    "price": 47,
    "description": "Martillo de Carpintero de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/martillo-de-carpintero.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-juego-de-destor-1",
    "name": "Juego de Destornilladores",
    "price": 70,
    "description": "Juego de Destornilladores de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/juego-de-destornilladores.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-taladro-percuto-2",
    "name": "Taladro Percutor 600W",
    "price": 42,
    "description": "Taladro Percutor 600W de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/taladro-percutor-600w.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-alicate-univers-3",
    "name": "Alicate Universal",
    "price": 67,
    "originalPrice": 84,
    "description": "Alicate Universal de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/alicate-universal.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-cinta-metrica-5-4",
    "name": "Cinta Métrica 5m",
    "price": 40,
    "description": "Cinta Métrica 5m de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/cinta-metrica-5m.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-pintura-latex-b-5",
    "name": "Pintura Látex Blanca 1gal",
    "price": 29,
    "description": "Pintura Látex Blanca 1gal de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/pintura-latex-blanca-1gal.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-brocha-de-3-pul-6",
    "name": "Brocha de 3 pulgadas",
    "price": 80,
    "description": "Brocha de 3 pulgadas de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/brocha-de-3-pulgadas.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-sierra-para-met-7",
    "name": "Sierra para Metales",
    "price": 85,
    "description": "Sierra para Metales de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/sierra-para-metales.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-llave-inglesa-1-8",
    "name": "Llave Inglesa 10\"",
    "price": 77,
    "description": "Llave Inglesa 10\" de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/llave-inglesa-10.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-nivel-de-burbuj-9",
    "name": "Nivel de Burbuja",
    "price": 16,
    "originalPrice": 21,
    "description": "Nivel de Burbuja de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/nivel-de-burbuja.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-lija-de-agua-nr-10",
    "name": "Lija de Agua Nro 80",
    "price": 29,
    "description": "Lija de Agua Nro 80 de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/lija-de-agua-nro-80.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-pegamento-pvc-11",
    "name": "Pegamento PVC",
    "price": 25,
    "originalPrice": 32,
    "description": "Pegamento PVC de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/pegamento-pvc.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-tornillos-para--12",
    "name": "Tornillos para Madera x100",
    "price": 36,
    "description": "Tornillos para Madera x100 de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/tornillos-para-madera-x100.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-clavos-de-2-pul-13",
    "name": "Clavos de 2 pulgadas x1kg",
    "price": 37,
    "description": "Clavos de 2 pulgadas x1kg de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/clavos-de-2-pulgadas-x1kg.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-candado-de-segu-14",
    "name": "Candado de Seguridad",
    "price": 60,
    "description": "Candado de Seguridad de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/candado-de-seguridad.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-manguera-de-rie-15",
    "name": "Manguera de Riego 15m",
    "price": 40,
    "description": "Manguera de Riego 15m de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/manguera-de-riego-15m.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-escalera-de-alu-16",
    "name": "Escalera de Aluminio",
    "price": 60,
    "originalPrice": 75,
    "description": "Escalera de Aluminio de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/escalera-de-aluminio.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-guantes-de-prot-17",
    "name": "Guantes de Protección",
    "price": 70,
    "description": "Guantes de Protección de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/guantes-de-proteccion.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-casco-de-obra-18",
    "name": "Casco de Obra",
    "price": 79,
    "description": "Casco de Obra de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/casco-de-obra.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-comer-linterna-led-po-19",
    "name": "Linterna LED Potente",
    "price": 49,
    "description": "Linterna LED Potente de alta calidad, disponible para entrega inmediata en Comercial Hidro.",
    "image": "/images/Ferretería/Comercial Hidro/linterna-led-potente.png",
    "category": "ferreteria",
    "storeName": "Comercial Hidro",
    "storeId": "comercial-hidro",
    "whatsappNumber": "923234567",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-martillo-de-car-0",
    "name": "Martillo de Carpintero",
    "price": 79,
    "description": "Martillo de Carpintero de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/martillo-de-carpintero.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-juego-de-destor-1",
    "name": "Juego de Destornilladores",
    "price": 64,
    "description": "Juego de Destornilladores de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/juego-de-destornilladores.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-taladro-percuto-2",
    "name": "Taladro Percutor 600W",
    "price": 36,
    "originalPrice": 45,
    "description": "Taladro Percutor 600W de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/taladro-percutor-600w.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-alicate-univers-3",
    "name": "Alicate Universal",
    "price": 39,
    "description": "Alicate Universal de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/alicate-universal.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-cinta-metrica-5-4",
    "name": "Cinta Métrica 5m",
    "price": 83,
    "description": "Cinta Métrica 5m de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/cinta-metrica-5m.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-pintura-latex-b-5",
    "name": "Pintura Látex Blanca 1gal",
    "price": 57,
    "description": "Pintura Látex Blanca 1gal de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/pintura-latex-blanca-1gal.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-brocha-de-3-pul-6",
    "name": "Brocha de 3 pulgadas",
    "price": 69,
    "originalPrice": 87,
    "description": "Brocha de 3 pulgadas de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/brocha-de-3-pulgadas.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-sierra-para-met-7",
    "name": "Sierra para Metales",
    "price": 40,
    "description": "Sierra para Metales de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/sierra-para-metales.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-llave-inglesa-1-8",
    "name": "Llave Inglesa 10\"",
    "price": 55,
    "description": "Llave Inglesa 10\" de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/llave-inglesa-10.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-nivel-de-burbuj-9",
    "name": "Nivel de Burbuja",
    "price": 15,
    "description": "Nivel de Burbuja de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/nivel-de-burbuja.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-lija-de-agua-nr-10",
    "name": "Lija de Agua Nro 80",
    "price": 62,
    "originalPrice": 78,
    "description": "Lija de Agua Nro 80 de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/lija-de-agua-nro-80.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-pegamento-pvc-11",
    "name": "Pegamento PVC",
    "price": 60,
    "description": "Pegamento PVC de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/pegamento-pvc.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-tornillos-para--12",
    "name": "Tornillos para Madera x100",
    "price": 57,
    "description": "Tornillos para Madera x100 de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/tornillos-para-madera-x100.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-clavos-de-2-pul-13",
    "name": "Clavos de 2 pulgadas x1kg",
    "price": 69,
    "originalPrice": 87,
    "description": "Clavos de 2 pulgadas x1kg de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/clavos-de-2-pulgadas-x1kg.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-candado-de-segu-14",
    "name": "Candado de Seguridad",
    "price": 31,
    "originalPrice": 39,
    "description": "Candado de Seguridad de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/candado-de-seguridad.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-manguera-de-rie-15",
    "name": "Manguera de Riego 15m",
    "price": 35,
    "description": "Manguera de Riego 15m de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/manguera-de-riego-15m.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-escalera-de-alu-16",
    "name": "Escalera de Aluminio",
    "price": 23,
    "description": "Escalera de Aluminio de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/escalera-de-aluminio.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-guantes-de-prot-17",
    "name": "Guantes de Protección",
    "price": 26,
    "description": "Guantes de Protección de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/guantes-de-proteccion.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-casco-de-obra-18",
    "name": "Casco de Obra",
    "price": 51,
    "description": "Casco de Obra de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/casco-de-obra.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-ferre-linterna-led-po-19",
    "name": "Linterna LED Potente",
    "price": 28,
    "description": "Linterna LED Potente de alta calidad, disponible para entrega inmediata en Ferretería La Solución.",
    "image": "/images/Ferretería/Ferretería La Solución/linterna-led-potente.png",
    "category": "ferreteria",
    "storeName": "Ferretería La Solución",
    "storeId": "ferreteria-la-solucion",
    "whatsappNumber": "934345678",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-martillo-de-car-0",
    "name": "Martillo de Carpintero",
    "price": 14,
    "description": "Martillo de Carpintero de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/martillo-de-carpintero.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-juego-de-destor-1",
    "name": "Juego de Destornilladores",
    "price": 13,
    "description": "Juego de Destornilladores de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/juego-de-destornilladores.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-taladro-percuto-2",
    "name": "Taladro Percutor 600W",
    "price": 16,
    "description": "Taladro Percutor 600W de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/taladro-percutor-600w.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-alicate-univers-3",
    "name": "Alicate Universal",
    "price": 44,
    "originalPrice": 56,
    "description": "Alicate Universal de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/alicate-universal.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-cinta-metrica-5-4",
    "name": "Cinta Métrica 5m",
    "price": 62,
    "description": "Cinta Métrica 5m de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/cinta-metrica-5m.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-pintura-latex-b-5",
    "name": "Pintura Látex Blanca 1gal",
    "price": 72,
    "description": "Pintura Látex Blanca 1gal de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/pintura-latex-blanca-1gal.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-brocha-de-3-pul-6",
    "name": "Brocha de 3 pulgadas",
    "price": 14,
    "description": "Brocha de 3 pulgadas de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/brocha-de-3-pulgadas.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-sierra-para-met-7",
    "name": "Sierra para Metales",
    "price": 39,
    "description": "Sierra para Metales de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/sierra-para-metales.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-llave-inglesa-1-8",
    "name": "Llave Inglesa 10\"",
    "price": 44,
    "originalPrice": 56,
    "description": "Llave Inglesa 10\" de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/llave-inglesa-10.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-nivel-de-burbuj-9",
    "name": "Nivel de Burbuja",
    "price": 38,
    "description": "Nivel de Burbuja de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/nivel-de-burbuja.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-lija-de-agua-nr-10",
    "name": "Lija de Agua Nro 80",
    "price": 81,
    "description": "Lija de Agua Nro 80 de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/lija-de-agua-nro-80.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-pegamento-pvc-11",
    "name": "Pegamento PVC",
    "price": 87,
    "description": "Pegamento PVC de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/pegamento-pvc.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-tornillos-para--12",
    "name": "Tornillos para Madera x100",
    "price": 63,
    "originalPrice": 79,
    "description": "Tornillos para Madera x100 de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/tornillos-para-madera-x100.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-clavos-de-2-pul-13",
    "name": "Clavos de 2 pulgadas x1kg",
    "price": 17,
    "description": "Clavos de 2 pulgadas x1kg de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/clavos-de-2-pulgadas-x1kg.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-candado-de-segu-14",
    "name": "Candado de Seguridad",
    "price": 37,
    "originalPrice": 47,
    "description": "Candado de Seguridad de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/candado-de-seguridad.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-manguera-de-rie-15",
    "name": "Manguera de Riego 15m",
    "price": 40,
    "originalPrice": 50,
    "description": "Manguera de Riego 15m de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/manguera-de-riego-15m.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-escalera-de-alu-16",
    "name": "Escalera de Aluminio",
    "price": 48,
    "description": "Escalera de Aluminio de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/escalera-de-aluminio.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-guantes-de-prot-17",
    "name": "Guantes de Protección",
    "price": 71,
    "description": "Guantes de Protección de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/guantes-de-proteccion.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-casco-de-obra-18",
    "name": "Casco de Obra",
    "price": 54,
    "description": "Casco de Obra de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/casco-de-obra.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-el-ma-linterna-led-po-19",
    "name": "Linterna LED Potente",
    "price": 89,
    "description": "Linterna LED Potente de alta calidad, disponible para entrega inmediata en El Martillo.",
    "image": "/images/Ferretería/El Martillo/linterna-led-potente.png",
    "category": "ferreteria",
    "storeName": "El Martillo",
    "storeId": "el-martillo",
    "whatsappNumber": "945456789",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-martillo-de-car-0",
    "name": "Martillo de Carpintero",
    "price": 79,
    "description": "Martillo de Carpintero de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/martillo-de-carpintero.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-juego-de-destor-1",
    "name": "Juego de Destornilladores",
    "price": 70,
    "originalPrice": 88,
    "description": "Juego de Destornilladores de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/juego-de-destornilladores.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-taladro-percuto-2",
    "name": "Taladro Percutor 600W",
    "price": 13,
    "description": "Taladro Percutor 600W de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/taladro-percutor-600w.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-alicate-univers-3",
    "name": "Alicate Universal",
    "price": 32,
    "description": "Alicate Universal de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/alicate-universal.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-cinta-metrica-5-4",
    "name": "Cinta Métrica 5m",
    "price": 86,
    "description": "Cinta Métrica 5m de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/cinta-metrica-5m.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-pintura-latex-b-5",
    "name": "Pintura Látex Blanca 1gal",
    "price": 40,
    "originalPrice": 50,
    "description": "Pintura Látex Blanca 1gal de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/pintura-latex-blanca-1gal.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-brocha-de-3-pul-6",
    "name": "Brocha de 3 pulgadas",
    "price": 9,
    "originalPrice": 12,
    "description": "Brocha de 3 pulgadas de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/brocha-de-3-pulgadas.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-sierra-para-met-7",
    "name": "Sierra para Metales",
    "price": 37,
    "description": "Sierra para Metales de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/sierra-para-metales.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-llave-inglesa-1-8",
    "name": "Llave Inglesa 10\"",
    "price": 34,
    "description": "Llave Inglesa 10\" de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/llave-inglesa-10.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-nivel-de-burbuj-9",
    "name": "Nivel de Burbuja",
    "price": 60,
    "description": "Nivel de Burbuja de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/nivel-de-burbuja.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-lija-de-agua-nr-10",
    "name": "Lija de Agua Nro 80",
    "price": 60,
    "originalPrice": 75,
    "description": "Lija de Agua Nro 80 de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/lija-de-agua-nro-80.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-pegamento-pvc-11",
    "name": "Pegamento PVC",
    "price": 45,
    "originalPrice": 57,
    "description": "Pegamento PVC de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/pegamento-pvc.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-tornillos-para--12",
    "name": "Tornillos para Madera x100",
    "price": 24,
    "description": "Tornillos para Madera x100 de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/tornillos-para-madera-x100.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-clavos-de-2-pul-13",
    "name": "Clavos de 2 pulgadas x1kg",
    "price": 44,
    "description": "Clavos de 2 pulgadas x1kg de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/clavos-de-2-pulgadas-x1kg.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-candado-de-segu-14",
    "name": "Candado de Seguridad",
    "price": 49,
    "description": "Candado de Seguridad de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/candado-de-seguridad.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-manguera-de-rie-15",
    "name": "Manguera de Riego 15m",
    "price": 55,
    "originalPrice": 69,
    "description": "Manguera de Riego 15m de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/manguera-de-riego-15m.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-escalera-de-alu-16",
    "name": "Escalera de Aluminio",
    "price": 50,
    "description": "Escalera de Aluminio de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/escalera-de-aluminio.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-guantes-de-prot-17",
    "name": "Guantes de Protección",
    "price": 41,
    "originalPrice": 52,
    "description": "Guantes de Protección de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/guantes-de-proteccion.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-casco-de-obra-18",
    "name": "Casco de Obra",
    "price": 58,
    "description": "Casco de Obra de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/casco-de-obra.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-const-linterna-led-po-19",
    "name": "Linterna LED Potente",
    "price": 24,
    "originalPrice": 31,
    "description": "Linterna LED Potente de alta calidad, disponible para entrega inmediata en Construye Fácil.",
    "image": "/images/Ferretería/Construye Fácil/linterna-led-potente.png",
    "category": "ferreteria",
    "storeName": "Construye Fácil",
    "storeId": "construye-facil",
    "whatsappNumber": "956567890",
    "attributes": {
      "brand": "Generico"
    }
  },
  {
    "id": "prod-bouti-polo-algodon-pi-0",
    "name": "Polo Algodón Pima",
    "price": 89,
    "description": "Polo Algodón Pima de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/polo-algodon-pima.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-jeans-slim-fit-1",
    "name": "Jeans Slim Fit",
    "price": 83,
    "description": "Jeans Slim Fit de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/jeans-slim-fit.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-zapatillas-urba-2",
    "name": "Zapatillas Urbanas",
    "price": 44,
    "originalPrice": 56,
    "description": "Zapatillas Urbanas de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/zapatillas-urbanas.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-casaca-cortavie-3",
    "name": "Casaca Cortavientos",
    "price": 40,
    "originalPrice": 51,
    "description": "Casaca Cortavientos de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/casaca-cortavientos.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-camisa-manga-la-4",
    "name": "Camisa Manga Larga",
    "price": 44,
    "description": "Camisa Manga Larga de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/camisa-manga-larga.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-short-de-verano-5",
    "name": "Short de Verano",
    "price": 33,
    "originalPrice": 42,
    "description": "Short de Verano de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/short-de-verano.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-vestido-de-noch-6",
    "name": "Vestido de Noche",
    "price": 76,
    "description": "Vestido de Noche de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/vestido-de-noche.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-blusa-de-seda-7",
    "name": "Blusa de Seda",
    "price": 58,
    "originalPrice": 73,
    "description": "Blusa de Seda de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/blusa-de-seda.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-falda-plisada-8",
    "name": "Falda Plisada",
    "price": 76,
    "description": "Falda Plisada de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/falda-plisada.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-casaca-de-cuero-9",
    "name": "Casaca de Cuero Sintético",
    "price": 49,
    "description": "Casaca de Cuero Sintético de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/casaca-de-cuero-sintetico.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-gorra-amazon-vi-10",
    "name": "Gorra Amazon View",
    "price": 50,
    "description": "Gorra Amazon View de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/gorra-amazon-view.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-lentes-de-sol-p-11",
    "name": "Lentes de Sol Polarizados",
    "price": 66,
    "description": "Lentes de Sol Polarizados de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/lentes-de-sol-polarizados.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-reloj-de-pulser-12",
    "name": "Reloj de Pulsera Análogo",
    "price": 71,
    "description": "Reloj de Pulsera Análogo de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/reloj-de-pulsera-analogo.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-cinturon-de-cue-13",
    "name": "Cinturón de Cuero",
    "price": 42,
    "description": "Cinturón de Cuero de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/cinturon-de-cuero.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-medias-deportiv-14",
    "name": "Medias Deportivas x3",
    "price": 64,
    "description": "Medias Deportivas x3 de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/medias-deportivas-x3.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-zapatos-de-vest-15",
    "name": "Zapatos de Vestir",
    "price": 21,
    "description": "Zapatos de Vestir de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/zapatos-de-vestir.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-mocasines-casua-16",
    "name": "Mocasines Casuales",
    "price": 40,
    "originalPrice": 50,
    "description": "Mocasines Casuales de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/mocasines-casuales.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-cartera-de-mano-17",
    "name": "Cartera de Mano",
    "price": 63,
    "description": "Cartera de Mano de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/cartera-de-mano.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-mochila-urbana-18",
    "name": "Mochila Urbana",
    "price": 45,
    "description": "Mochila Urbana de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/mochila-urbana.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-bouti-billetera-de-cu-19",
    "name": "Billetera de Cuero",
    "price": 37,
    "originalPrice": 47,
    "description": "Billetera de Cuero de alta calidad, disponible para entrega inmediata en Boutique Pasarela.",
    "image": "/images/Ropa y Calzado/Boutique Pasarela/billetera-de-cuero.png",
    "category": "outfit",
    "storeName": "Boutique Pasarela",
    "storeId": "boutique-pasarela",
    "whatsappNumber": "911111111",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-polo-algodon-pi-0",
    "name": "Polo Algodón Pima",
    "price": 77,
    "description": "Polo Algodón Pima de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/polo-algodon-pima.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-jeans-slim-fit-1",
    "name": "Jeans Slim Fit",
    "price": 46,
    "description": "Jeans Slim Fit de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/jeans-slim-fit.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-zapatillas-urba-2",
    "name": "Zapatillas Urbanas",
    "price": 42,
    "description": "Zapatillas Urbanas de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/zapatillas-urbanas.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-casaca-cortavie-3",
    "name": "Casaca Cortavientos",
    "price": 35,
    "originalPrice": 44,
    "description": "Casaca Cortavientos de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/casaca-cortavientos.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-camisa-manga-la-4",
    "name": "Camisa Manga Larga",
    "price": 28,
    "description": "Camisa Manga Larga de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/camisa-manga-larga.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-short-de-verano-5",
    "name": "Short de Verano",
    "price": 44,
    "originalPrice": 55,
    "description": "Short de Verano de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/short-de-verano.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-vestido-de-noch-6",
    "name": "Vestido de Noche",
    "price": 82,
    "description": "Vestido de Noche de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/vestido-de-noche.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-blusa-de-seda-7",
    "name": "Blusa de Seda",
    "price": 41,
    "description": "Blusa de Seda de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/blusa-de-seda.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-falda-plisada-8",
    "name": "Falda Plisada",
    "price": 43,
    "description": "Falda Plisada de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/falda-plisada.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-casaca-de-cuero-9",
    "name": "Casaca de Cuero Sintético",
    "price": 88,
    "description": "Casaca de Cuero Sintético de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/casaca-de-cuero-sintetico.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-gorra-amazon-vi-10",
    "name": "Gorra Amazon View",
    "price": 42,
    "originalPrice": 53,
    "description": "Gorra Amazon View de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/gorra-amazon-view.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-lentes-de-sol-p-11",
    "name": "Lentes de Sol Polarizados",
    "price": 51,
    "description": "Lentes de Sol Polarizados de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/lentes-de-sol-polarizados.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-reloj-de-pulser-12",
    "name": "Reloj de Pulsera Análogo",
    "price": 35,
    "originalPrice": 44,
    "description": "Reloj de Pulsera Análogo de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/reloj-de-pulsera-analogo.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-cinturon-de-cue-13",
    "name": "Cinturón de Cuero",
    "price": 34,
    "description": "Cinturón de Cuero de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/cinturon-de-cuero.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-medias-deportiv-14",
    "name": "Medias Deportivas x3",
    "price": 27,
    "description": "Medias Deportivas x3 de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/medias-deportivas-x3.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-zapatos-de-vest-15",
    "name": "Zapatos de Vestir",
    "price": 80,
    "description": "Zapatos de Vestir de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/zapatos-de-vestir.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-mocasines-casua-16",
    "name": "Mocasines Casuales",
    "price": 14,
    "description": "Mocasines Casuales de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/mocasines-casuales.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-cartera-de-mano-17",
    "name": "Cartera de Mano",
    "price": 70,
    "description": "Cartera de Mano de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/cartera-de-mano.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-mochila-urbana-18",
    "name": "Mochila Urbana",
    "price": 12,
    "originalPrice": 16,
    "description": "Mochila Urbana de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/mochila-urbana.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-calza-billetera-de-cu-19",
    "name": "Billetera de Cuero",
    "price": 64,
    "originalPrice": 80,
    "description": "Billetera de Cuero de alta calidad, disponible para entrega inmediata en Calzado Real.",
    "image": "/images/Ropa y Calzado/Calzado Real/billetera-de-cuero.png",
    "category": "outfit",
    "storeName": "Calzado Real",
    "storeId": "calzado-real",
    "whatsappNumber": "922222222",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--polo-algodon-pi-0",
    "name": "Polo Algodón Pima",
    "price": 47,
    "description": "Polo Algodón Pima de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/polo-algodon-pima.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--jeans-slim-fit-1",
    "name": "Jeans Slim Fit",
    "price": 60,
    "description": "Jeans Slim Fit de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/jeans-slim-fit.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--zapatillas-urba-2",
    "name": "Zapatillas Urbanas",
    "price": 35,
    "description": "Zapatillas Urbanas de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/zapatillas-urbanas.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--casaca-cortavie-3",
    "name": "Casaca Cortavientos",
    "price": 12,
    "description": "Casaca Cortavientos de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/casaca-cortavientos.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--camisa-manga-la-4",
    "name": "Camisa Manga Larga",
    "price": 34,
    "description": "Camisa Manga Larga de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/camisa-manga-larga.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--short-de-verano-5",
    "name": "Short de Verano",
    "price": 42,
    "description": "Short de Verano de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/short-de-verano.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--vestido-de-noch-6",
    "name": "Vestido de Noche",
    "price": 68,
    "originalPrice": 86,
    "description": "Vestido de Noche de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/vestido-de-noche.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--blusa-de-seda-7",
    "name": "Blusa de Seda",
    "price": 80,
    "description": "Blusa de Seda de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/blusa-de-seda.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--falda-plisada-8",
    "name": "Falda Plisada",
    "price": 61,
    "description": "Falda Plisada de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/falda-plisada.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--casaca-de-cuero-9",
    "name": "Casaca de Cuero Sintético",
    "price": 60,
    "originalPrice": 76,
    "description": "Casaca de Cuero Sintético de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/casaca-de-cuero-sintetico.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--gorra-amazon-vi-10",
    "name": "Gorra Amazon View",
    "price": 56,
    "description": "Gorra Amazon View de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/gorra-amazon-view.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--lentes-de-sol-p-11",
    "name": "Lentes de Sol Polarizados",
    "price": 33,
    "description": "Lentes de Sol Polarizados de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/lentes-de-sol-polarizados.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--reloj-de-pulser-12",
    "name": "Reloj de Pulsera Análogo",
    "price": 27,
    "description": "Reloj de Pulsera Análogo de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/reloj-de-pulsera-analogo.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--cinturon-de-cue-13",
    "name": "Cinturón de Cuero",
    "price": 62,
    "description": "Cinturón de Cuero de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/cinturon-de-cuero.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--medias-deportiv-14",
    "name": "Medias Deportivas x3",
    "price": 38,
    "description": "Medias Deportivas x3 de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/medias-deportivas-x3.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--zapatos-de-vest-15",
    "name": "Zapatos de Vestir",
    "price": 59,
    "originalPrice": 74,
    "description": "Zapatos de Vestir de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/zapatos-de-vestir.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--mocasines-casua-16",
    "name": "Mocasines Casuales",
    "price": 57,
    "description": "Mocasines Casuales de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/mocasines-casuales.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--cartera-de-mano-17",
    "name": "Cartera de Mano",
    "price": 40,
    "originalPrice": 51,
    "description": "Cartera de Mano de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/cartera-de-mano.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--mochila-urbana-18",
    "name": "Mochila Urbana",
    "price": 31,
    "description": "Mochila Urbana de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/mochila-urbana.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-moda--billetera-de-cu-19",
    "name": "Billetera de Cuero",
    "price": 74,
    "description": "Billetera de Cuero de alta calidad, disponible para entrega inmediata en Moda Amazonas.",
    "image": "/images/Ropa y Calzado/Moda Amazonas/billetera-de-cuero.png",
    "category": "outfit",
    "storeName": "Moda Amazonas",
    "storeId": "moda-amazonas",
    "whatsappNumber": "933333333",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-polo-algodon-pi-0",
    "name": "Polo Algodón Pima",
    "price": 44,
    "originalPrice": 55,
    "description": "Polo Algodón Pima de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/polo-algodon-pima.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-jeans-slim-fit-1",
    "name": "Jeans Slim Fit",
    "price": 13,
    "description": "Jeans Slim Fit de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/jeans-slim-fit.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-zapatillas-urba-2",
    "name": "Zapatillas Urbanas",
    "price": 38,
    "description": "Zapatillas Urbanas de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/zapatillas-urbanas.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-casaca-cortavie-3",
    "name": "Casaca Cortavientos",
    "price": 48,
    "description": "Casaca Cortavientos de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/casaca-cortavientos.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-camisa-manga-la-4",
    "name": "Camisa Manga Larga",
    "price": 20,
    "originalPrice": 26,
    "description": "Camisa Manga Larga de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/camisa-manga-larga.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-short-de-verano-5",
    "name": "Short de Verano",
    "price": 41,
    "description": "Short de Verano de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/short-de-verano.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-vestido-de-noch-6",
    "name": "Vestido de Noche",
    "price": 90,
    "description": "Vestido de Noche de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/vestido-de-noche.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-blusa-de-seda-7",
    "name": "Blusa de Seda",
    "price": 20,
    "description": "Blusa de Seda de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/blusa-de-seda.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-falda-plisada-8",
    "name": "Falda Plisada",
    "price": 52,
    "description": "Falda Plisada de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/falda-plisada.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-casaca-de-cuero-9",
    "name": "Casaca de Cuero Sintético",
    "price": 40,
    "originalPrice": 51,
    "description": "Casaca de Cuero Sintético de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/casaca-de-cuero-sintetico.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-gorra-amazon-vi-10",
    "name": "Gorra Amazon View",
    "price": 12,
    "description": "Gorra Amazon View de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/gorra-amazon-view.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-lentes-de-sol-p-11",
    "name": "Lentes de Sol Polarizados",
    "price": 60,
    "description": "Lentes de Sol Polarizados de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/lentes-de-sol-polarizados.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-reloj-de-pulser-12",
    "name": "Reloj de Pulsera Análogo",
    "price": 19,
    "description": "Reloj de Pulsera Análogo de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/reloj-de-pulsera-analogo.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-cinturon-de-cue-13",
    "name": "Cinturón de Cuero",
    "price": 67,
    "originalPrice": 84,
    "description": "Cinturón de Cuero de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/cinturon-de-cuero.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-medias-deportiv-14",
    "name": "Medias Deportivas x3",
    "price": 88,
    "description": "Medias Deportivas x3 de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/medias-deportivas-x3.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-zapatos-de-vest-15",
    "name": "Zapatos de Vestir",
    "price": 36,
    "originalPrice": 46,
    "description": "Zapatos de Vestir de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/zapatos-de-vestir.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-mocasines-casua-16",
    "name": "Mocasines Casuales",
    "price": 54,
    "description": "Mocasines Casuales de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/mocasines-casuales.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-cartera-de-mano-17",
    "name": "Cartera de Mano",
    "price": 73,
    "description": "Cartera de Mano de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/cartera-de-mano.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-mochila-urbana-18",
    "name": "Mochila Urbana",
    "price": 76,
    "description": "Mochila Urbana de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/mochila-urbana.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-sport-billetera-de-cu-19",
    "name": "Billetera de Cuero",
    "price": 67,
    "description": "Billetera de Cuero de alta calidad, disponible para entrega inmediata en Sport Center.",
    "image": "/images/Ropa y Calzado/Sport Center/billetera-de-cuero.png",
    "category": "outfit",
    "storeName": "Sport Center",
    "storeId": "sport-center",
    "whatsappNumber": "944444444",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-polo-algodon-pi-0",
    "name": "Polo Algodón Pima",
    "price": 80,
    "description": "Polo Algodón Pima de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/polo-algodon-pima.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-jeans-slim-fit-1",
    "name": "Jeans Slim Fit",
    "price": 48,
    "originalPrice": 60,
    "description": "Jeans Slim Fit de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/jeans-slim-fit.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-zapatillas-urba-2",
    "name": "Zapatillas Urbanas",
    "price": 58,
    "description": "Zapatillas Urbanas de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/zapatillas-urbanas.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-casaca-cortavie-3",
    "name": "Casaca Cortavientos",
    "price": 83,
    "description": "Casaca Cortavientos de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/casaca-cortavientos.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-camisa-manga-la-4",
    "name": "Camisa Manga Larga",
    "price": 48,
    "description": "Camisa Manga Larga de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/camisa-manga-larga.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-short-de-verano-5",
    "name": "Short de Verano",
    "price": 83,
    "description": "Short de Verano de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/short-de-verano.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-vestido-de-noch-6",
    "name": "Vestido de Noche",
    "price": 29,
    "originalPrice": 37,
    "description": "Vestido de Noche de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/vestido-de-noche.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-blusa-de-seda-7",
    "name": "Blusa de Seda",
    "price": 43,
    "description": "Blusa de Seda de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/blusa-de-seda.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-falda-plisada-8",
    "name": "Falda Plisada",
    "price": 66,
    "originalPrice": 83,
    "description": "Falda Plisada de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/falda-plisada.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-casaca-de-cuero-9",
    "name": "Casaca de Cuero Sintético",
    "price": 57,
    "description": "Casaca de Cuero Sintético de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/casaca-de-cuero-sintetico.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-gorra-amazon-vi-10",
    "name": "Gorra Amazon View",
    "price": 90,
    "description": "Gorra Amazon View de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/gorra-amazon-view.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-lentes-de-sol-p-11",
    "name": "Lentes de Sol Polarizados",
    "price": 79,
    "description": "Lentes de Sol Polarizados de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/lentes-de-sol-polarizados.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-reloj-de-pulser-12",
    "name": "Reloj de Pulsera Análogo",
    "price": 68,
    "description": "Reloj de Pulsera Análogo de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/reloj-de-pulsera-analogo.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-cinturon-de-cue-13",
    "name": "Cinturón de Cuero",
    "price": 13,
    "description": "Cinturón de Cuero de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/cinturon-de-cuero.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-medias-deportiv-14",
    "name": "Medias Deportivas x3",
    "price": 37,
    "description": "Medias Deportivas x3 de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/medias-deportivas-x3.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-zapatos-de-vest-15",
    "name": "Zapatos de Vestir",
    "price": 81,
    "description": "Zapatos de Vestir de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/zapatos-de-vestir.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-mocasines-casua-16",
    "name": "Mocasines Casuales",
    "price": 30,
    "description": "Mocasines Casuales de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/mocasines-casuales.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-cartera-de-mano-17",
    "name": "Cartera de Mano",
    "price": 43,
    "description": "Cartera de Mano de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/cartera-de-mano.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-mochila-urbana-18",
    "name": "Mochila Urbana",
    "price": 81,
    "description": "Mochila Urbana de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/mochila-urbana.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-texti-billetera-de-cu-19",
    "name": "Billetera de Cuero",
    "price": 52,
    "description": "Billetera de Cuero de alta calidad, disponible para entrega inmediata en Textil Chacha.",
    "image": "/images/Ropa y Calzado/Textil Chacha/billetera-de-cuero.png",
    "category": "outfit",
    "storeName": "Textil Chacha",
    "storeId": "textil-chacha",
    "whatsappNumber": "955555555",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-smartphone-andr-0",
    "name": "Smartphone Android 128GB",
    "price": 17,
    "description": "Smartphone Android 128GB de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/smartphone-android-128gb.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-audifonos-bluet-1",
    "name": "Audífonos Bluetooth Pro",
    "price": 63,
    "description": "Audífonos Bluetooth Pro de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/audifonos-bluetooth-pro.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-smartwatch-seri-2",
    "name": "Smartwatch Serie 7",
    "price": 64,
    "description": "Smartwatch Serie 7 de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/smartwatch-serie-7.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-laptop-core-i5--3",
    "name": "Laptop Core i5 8GB",
    "price": 81,
    "description": "Laptop Core i5 8GB de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/laptop-core-i5-8gb.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-tablet-10-pulga-4",
    "name": "Tablet 10 Pulgadas",
    "price": 49,
    "description": "Tablet 10 Pulgadas de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/tablet-10-pulgadas.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-mouse-inalambri-5",
    "name": "Mouse Inalámbrico",
    "price": 48,
    "originalPrice": 60,
    "description": "Mouse Inalámbrico de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/mouse-inalambrico.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-teclado-mecanic-6",
    "name": "Teclado Mecánico RGB",
    "price": 83,
    "description": "Teclado Mecánico RGB de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/teclado-mecanico-rgb.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-camara-web-full-7",
    "name": "Cámara Web Full HD",
    "price": 58,
    "originalPrice": 73,
    "description": "Cámara Web Full HD de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/camara-web-full-hd.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-router-wifi-6-8",
    "name": "Router WiFi 6",
    "price": 48,
    "originalPrice": 60,
    "description": "Router WiFi 6 de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/router-wifi-6.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-disco-duro-exte-9",
    "name": "Disco Duro Externo 1TB",
    "price": 41,
    "description": "Disco Duro Externo 1TB de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/disco-duro-externo-1tb.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-parlante-blueto-10",
    "name": "Parlante Bluetooth WaterProof",
    "price": 22,
    "description": "Parlante Bluetooth WaterProof de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/parlante-bluetooth-waterproof.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-cargador-rapido-11",
    "name": "Cargador Rápido 20W",
    "price": 29,
    "description": "Cargador Rápido 20W de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/cargador-rapido-20w.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-power-bank-1000-12",
    "name": "Power Bank 10000mAh",
    "price": 43,
    "originalPrice": 54,
    "description": "Power Bank 10000mAh de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/power-bank-10000mah.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-funda-para-lapt-13",
    "name": "Funda para Laptop",
    "price": 18,
    "description": "Funda para Laptop de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/funda-para-laptop.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-monitor-24-ips-14",
    "name": "Monitor 24\" IPS",
    "price": 67,
    "originalPrice": 84,
    "description": "Monitor 24\" IPS de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/monitor-24-ips.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-soporte-para-ce-15",
    "name": "Soporte para Celular",
    "price": 34,
    "originalPrice": 43,
    "description": "Soporte para Celular de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/soporte-para-celular.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-aro-de-luz-led-16",
    "name": "Aro de Luz LED",
    "price": 52,
    "originalPrice": 65,
    "description": "Aro de Luz LED de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/aro-de-luz-led.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-microfono-para--17",
    "name": "Micrófono para Streaming",
    "price": 43,
    "originalPrice": 54,
    "description": "Micrófono para Streaming de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/microfono-para-streaming.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-adaptador-usb-c-18",
    "name": "Adaptador USB-C Hub",
    "price": 61,
    "description": "Adaptador USB-C Hub de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/adaptador-usb-c-hub.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-amazo-cable-hdmi-4k-19",
    "name": "Cable HDMI 4K",
    "price": 22,
    "description": "Cable HDMI 4K de alta calidad, disponible para entrega inmediata en Amazonas Tech.",
    "image": "/images/Tecnología/Amazonas Tech/cable-hdmi-4k.png",
    "category": "gadgets",
    "storeName": "Amazonas Tech",
    "storeId": "amazonas-tech",
    "whatsappNumber": "966666666",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-smartphone-andr-0",
    "name": "Smartphone Android 128GB",
    "price": 68,
    "originalPrice": 86,
    "description": "Smartphone Android 128GB de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/smartphone-android-128gb.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-audifonos-bluet-1",
    "name": "Audífonos Bluetooth Pro",
    "price": 79,
    "description": "Audífonos Bluetooth Pro de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/audifonos-bluetooth-pro.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-smartwatch-seri-2",
    "name": "Smartwatch Serie 7",
    "price": 56,
    "originalPrice": 70,
    "description": "Smartwatch Serie 7 de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/smartwatch-serie-7.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-laptop-core-i5--3",
    "name": "Laptop Core i5 8GB",
    "price": 51,
    "description": "Laptop Core i5 8GB de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/laptop-core-i5-8gb.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-tablet-10-pulga-4",
    "name": "Tablet 10 Pulgadas",
    "price": 28,
    "originalPrice": 35,
    "description": "Tablet 10 Pulgadas de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/tablet-10-pulgadas.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-mouse-inalambri-5",
    "name": "Mouse Inalámbrico",
    "price": 49,
    "originalPrice": 62,
    "description": "Mouse Inalámbrico de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/mouse-inalambrico.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-teclado-mecanic-6",
    "name": "Teclado Mecánico RGB",
    "price": 12,
    "originalPrice": 16,
    "description": "Teclado Mecánico RGB de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/teclado-mecanico-rgb.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-camara-web-full-7",
    "name": "Cámara Web Full HD",
    "price": 61,
    "description": "Cámara Web Full HD de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/camara-web-full-hd.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-router-wifi-6-8",
    "name": "Router WiFi 6",
    "price": 60,
    "description": "Router WiFi 6 de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/router-wifi-6.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-disco-duro-exte-9",
    "name": "Disco Duro Externo 1TB",
    "price": 75,
    "description": "Disco Duro Externo 1TB de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/disco-duro-externo-1tb.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-parlante-blueto-10",
    "name": "Parlante Bluetooth WaterProof",
    "price": 35,
    "description": "Parlante Bluetooth WaterProof de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/parlante-bluetooth-waterproof.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-cargador-rapido-11",
    "name": "Cargador Rápido 20W",
    "price": 43,
    "description": "Cargador Rápido 20W de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/cargador-rapido-20w.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-power-bank-1000-12",
    "name": "Power Bank 10000mAh",
    "price": 85,
    "description": "Power Bank 10000mAh de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/power-bank-10000mah.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-funda-para-lapt-13",
    "name": "Funda para Laptop",
    "price": 32,
    "description": "Funda para Laptop de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/funda-para-laptop.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-monitor-24-ips-14",
    "name": "Monitor 24\" IPS",
    "price": 32,
    "description": "Monitor 24\" IPS de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/monitor-24-ips.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-soporte-para-ce-15",
    "name": "Soporte para Celular",
    "price": 55,
    "description": "Soporte para Celular de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/soporte-para-celular.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-aro-de-luz-led-16",
    "name": "Aro de Luz LED",
    "price": 77,
    "description": "Aro de Luz LED de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/aro-de-luz-led.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-microfono-para--17",
    "name": "Micrófono para Streaming",
    "price": 13,
    "description": "Micrófono para Streaming de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/microfono-para-streaming.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-adaptador-usb-c-18",
    "name": "Adaptador USB-C Hub",
    "price": 32,
    "originalPrice": 40,
    "description": "Adaptador USB-C Hub de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/adaptador-usb-c-hub.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mundo-cable-hdmi-4k-19",
    "name": "Cable HDMI 4K",
    "price": 14,
    "originalPrice": 18,
    "description": "Cable HDMI 4K de alta calidad, disponible para entrega inmediata en Mundo Celular.",
    "image": "/images/Tecnología/Mundo Celular/cable-hdmi-4k.png",
    "category": "gadgets",
    "storeName": "Mundo Celular",
    "storeId": "mundo-celular",
    "whatsappNumber": "977777777",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-smartphone-andr-0",
    "name": "Smartphone Android 128GB",
    "price": 70,
    "description": "Smartphone Android 128GB de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/smartphone-android-128gb.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-audifonos-bluet-1",
    "name": "Audífonos Bluetooth Pro",
    "price": 67,
    "description": "Audífonos Bluetooth Pro de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/audifonos-bluetooth-pro.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-smartwatch-seri-2",
    "name": "Smartwatch Serie 7",
    "price": 37,
    "description": "Smartwatch Serie 7 de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/smartwatch-serie-7.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-laptop-core-i5--3",
    "name": "Laptop Core i5 8GB",
    "price": 16,
    "description": "Laptop Core i5 8GB de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/laptop-core-i5-8gb.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-tablet-10-pulga-4",
    "name": "Tablet 10 Pulgadas",
    "price": 35,
    "description": "Tablet 10 Pulgadas de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/tablet-10-pulgadas.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-mouse-inalambri-5",
    "name": "Mouse Inalámbrico",
    "price": 74,
    "description": "Mouse Inalámbrico de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/mouse-inalambrico.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-teclado-mecanic-6",
    "name": "Teclado Mecánico RGB",
    "price": 61,
    "description": "Teclado Mecánico RGB de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/teclado-mecanico-rgb.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-camara-web-full-7",
    "name": "Cámara Web Full HD",
    "price": 28,
    "description": "Cámara Web Full HD de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/camara-web-full-hd.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-router-wifi-6-8",
    "name": "Router WiFi 6",
    "price": 31,
    "description": "Router WiFi 6 de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/router-wifi-6.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-disco-duro-exte-9",
    "name": "Disco Duro Externo 1TB",
    "price": 23,
    "originalPrice": 29,
    "description": "Disco Duro Externo 1TB de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/disco-duro-externo-1tb.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-parlante-blueto-10",
    "name": "Parlante Bluetooth WaterProof",
    "price": 50,
    "description": "Parlante Bluetooth WaterProof de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/parlante-bluetooth-waterproof.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-cargador-rapido-11",
    "name": "Cargador Rápido 20W",
    "price": 48,
    "description": "Cargador Rápido 20W de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/cargador-rapido-20w.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-power-bank-1000-12",
    "name": "Power Bank 10000mAh",
    "price": 42,
    "description": "Power Bank 10000mAh de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/power-bank-10000mah.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-funda-para-lapt-13",
    "name": "Funda para Laptop",
    "price": 22,
    "originalPrice": 28,
    "description": "Funda para Laptop de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/funda-para-laptop.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-monitor-24-ips-14",
    "name": "Monitor 24\" IPS",
    "price": 64,
    "originalPrice": 81,
    "description": "Monitor 24\" IPS de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/monitor-24-ips.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-soporte-para-ce-15",
    "name": "Soporte para Celular",
    "price": 73,
    "description": "Soporte para Celular de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/soporte-para-celular.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-aro-de-luz-led-16",
    "name": "Aro de Luz LED",
    "price": 46,
    "originalPrice": 58,
    "description": "Aro de Luz LED de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/aro-de-luz-led.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-microfono-para--17",
    "name": "Micrófono para Streaming",
    "price": 58,
    "description": "Micrófono para Streaming de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/microfono-para-streaming.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-adaptador-usb-c-18",
    "name": "Adaptador USB-C Hub",
    "price": 81,
    "description": "Adaptador USB-C Hub de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/adaptador-usb-c-hub.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-pc-fa-cable-hdmi-4k-19",
    "name": "Cable HDMI 4K",
    "price": 77,
    "description": "Cable HDMI 4K de alta calidad, disponible para entrega inmediata en PC Fast.",
    "image": "/images/Tecnología/PC Fast/cable-hdmi-4k.png",
    "category": "gadgets",
    "storeName": "PC Fast",
    "storeId": "pc-fast",
    "whatsappNumber": "988888888",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-smartphone-andr-0",
    "name": "Smartphone Android 128GB",
    "price": 40,
    "description": "Smartphone Android 128GB de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/smartphone-android-128gb.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-audifonos-bluet-1",
    "name": "Audífonos Bluetooth Pro",
    "price": 35,
    "description": "Audífonos Bluetooth Pro de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/audifonos-bluetooth-pro.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-smartwatch-seri-2",
    "name": "Smartwatch Serie 7",
    "price": 78,
    "description": "Smartwatch Serie 7 de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/smartwatch-serie-7.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-laptop-core-i5--3",
    "name": "Laptop Core i5 8GB",
    "price": 34,
    "description": "Laptop Core i5 8GB de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/laptop-core-i5-8gb.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-tablet-10-pulga-4",
    "name": "Tablet 10 Pulgadas",
    "price": 59,
    "description": "Tablet 10 Pulgadas de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/tablet-10-pulgadas.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-mouse-inalambri-5",
    "name": "Mouse Inalámbrico",
    "price": 56,
    "description": "Mouse Inalámbrico de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/mouse-inalambrico.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-teclado-mecanic-6",
    "name": "Teclado Mecánico RGB",
    "price": 71,
    "description": "Teclado Mecánico RGB de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/teclado-mecanico-rgb.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-camara-web-full-7",
    "name": "Cámara Web Full HD",
    "price": 27,
    "description": "Cámara Web Full HD de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/camara-web-full-hd.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-router-wifi-6-8",
    "name": "Router WiFi 6",
    "price": 64,
    "originalPrice": 81,
    "description": "Router WiFi 6 de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/router-wifi-6.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-disco-duro-exte-9",
    "name": "Disco Duro Externo 1TB",
    "price": 52,
    "originalPrice": 65,
    "description": "Disco Duro Externo 1TB de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/disco-duro-externo-1tb.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-parlante-blueto-10",
    "name": "Parlante Bluetooth WaterProof",
    "price": 60,
    "description": "Parlante Bluetooth WaterProof de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/parlante-bluetooth-waterproof.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-cargador-rapido-11",
    "name": "Cargador Rápido 20W",
    "price": 16,
    "originalPrice": 21,
    "description": "Cargador Rápido 20W de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/cargador-rapido-20w.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-power-bank-1000-12",
    "name": "Power Bank 10000mAh",
    "price": 48,
    "description": "Power Bank 10000mAh de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/power-bank-10000mah.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-funda-para-lapt-13",
    "name": "Funda para Laptop",
    "price": 72,
    "description": "Funda para Laptop de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/funda-para-laptop.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-monitor-24-ips-14",
    "name": "Monitor 24\" IPS",
    "price": 73,
    "description": "Monitor 24\" IPS de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/monitor-24-ips.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-soporte-para-ce-15",
    "name": "Soporte para Celular",
    "price": 75,
    "description": "Soporte para Celular de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/soporte-para-celular.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-aro-de-luz-led-16",
    "name": "Aro de Luz LED",
    "price": 56,
    "originalPrice": 70,
    "description": "Aro de Luz LED de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/aro-de-luz-led.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-microfono-para--17",
    "name": "Micrófono para Streaming",
    "price": 18,
    "description": "Micrófono para Streaming de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/microfono-para-streaming.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-adaptador-usb-c-18",
    "name": "Adaptador USB-C Hub",
    "price": 62,
    "description": "Adaptador USB-C Hub de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/adaptador-usb-c-hub.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-smart-cable-hdmi-4k-19",
    "name": "Cable HDMI 4K",
    "price": 64,
    "description": "Cable HDMI 4K de alta calidad, disponible para entrega inmediata en Smart Store.",
    "image": "/images/Tecnología/Smart Store/cable-hdmi-4k.png",
    "category": "gadgets",
    "storeName": "Smart Store",
    "storeId": "smart-store",
    "whatsappNumber": "999999999",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-smartphone-andr-0",
    "name": "Smartphone Android 128GB",
    "price": 66,
    "description": "Smartphone Android 128GB de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/smartphone-android-128gb.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-audifonos-bluet-1",
    "name": "Audífonos Bluetooth Pro",
    "price": 57,
    "description": "Audífonos Bluetooth Pro de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/audifonos-bluetooth-pro.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-smartwatch-seri-2",
    "name": "Smartwatch Serie 7",
    "price": 90,
    "description": "Smartwatch Serie 7 de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/smartwatch-serie-7.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-laptop-core-i5--3",
    "name": "Laptop Core i5 8GB",
    "price": 59,
    "originalPrice": 74,
    "description": "Laptop Core i5 8GB de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/laptop-core-i5-8gb.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-tablet-10-pulga-4",
    "name": "Tablet 10 Pulgadas",
    "price": 53,
    "description": "Tablet 10 Pulgadas de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/tablet-10-pulgadas.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-mouse-inalambri-5",
    "name": "Mouse Inalámbrico",
    "price": 29,
    "originalPrice": 37,
    "description": "Mouse Inalámbrico de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/mouse-inalambrico.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-teclado-mecanic-6",
    "name": "Teclado Mecánico RGB",
    "price": 69,
    "description": "Teclado Mecánico RGB de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/teclado-mecanico-rgb.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-camara-web-full-7",
    "name": "Cámara Web Full HD",
    "price": 58,
    "description": "Cámara Web Full HD de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/camara-web-full-hd.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-router-wifi-6-8",
    "name": "Router WiFi 6",
    "price": 80,
    "description": "Router WiFi 6 de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/router-wifi-6.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-disco-duro-exte-9",
    "name": "Disco Duro Externo 1TB",
    "price": 21,
    "description": "Disco Duro Externo 1TB de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/disco-duro-externo-1tb.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-parlante-blueto-10",
    "name": "Parlante Bluetooth WaterProof",
    "price": 20,
    "description": "Parlante Bluetooth WaterProof de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/parlante-bluetooth-waterproof.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-cargador-rapido-11",
    "name": "Cargador Rápido 20W",
    "price": 20,
    "originalPrice": 26,
    "description": "Cargador Rápido 20W de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/cargador-rapido-20w.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-power-bank-1000-12",
    "name": "Power Bank 10000mAh",
    "price": 55,
    "description": "Power Bank 10000mAh de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/power-bank-10000mah.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-funda-para-lapt-13",
    "name": "Funda para Laptop",
    "price": 32,
    "description": "Funda para Laptop de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/funda-para-laptop.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-monitor-24-ips-14",
    "name": "Monitor 24\" IPS",
    "price": 25,
    "description": "Monitor 24\" IPS de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/monitor-24-ips.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-soporte-para-ce-15",
    "name": "Soporte para Celular",
    "price": 46,
    "description": "Soporte para Celular de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/soporte-para-celular.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-aro-de-luz-led-16",
    "name": "Aro de Luz LED",
    "price": 47,
    "originalPrice": 59,
    "description": "Aro de Luz LED de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/aro-de-luz-led.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-microfono-para--17",
    "name": "Micrófono para Streaming",
    "price": 48,
    "originalPrice": 60,
    "description": "Micrófono para Streaming de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/microfono-para-streaming.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-adaptador-usb-c-18",
    "name": "Adaptador USB-C Hub",
    "price": 69,
    "originalPrice": 87,
    "description": "Adaptador USB-C Hub de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/adaptador-usb-c-hub.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-gadge-cable-hdmi-4k-19",
    "name": "Cable HDMI 4K",
    "price": 40,
    "description": "Cable HDMI 4K de alta calidad, disponible para entrega inmediata en Gadget Place.",
    "image": "/images/Tecnología/Gadget Place/cable-hdmi-4k.png",
    "category": "gadgets",
    "storeName": "Gadget Place",
    "storeId": "gadget-place",
    "whatsappNumber": "900000000",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-kit-de-embrague-0",
    "name": "Kit de Embrague Toyota",
    "price": 68,
    "description": "Kit de Embrague Toyota de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/kit-de-embrague-toyota.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-pastillas-de-fr-1",
    "name": "Pastillas de Freno Delanteras",
    "price": 91,
    "description": "Pastillas de Freno Delanteras de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/pastillas-de-freno-delanteras.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-amortiguadores--2",
    "name": "Amortiguadores Traseros x2",
    "price": 13,
    "description": "Amortiguadores Traseros x2 de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/amortiguadores-traseros-x2.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-filtro-de-aire--3",
    "name": "Filtro de Aire Original",
    "price": 40,
    "description": "Filtro de Aire Original de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/filtro-de-aire-original.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-filtro-de-aceit-4",
    "name": "Filtro de Aceite",
    "price": 21,
    "description": "Filtro de Aceite de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/filtro-de-aceite.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-bujias-de-iridi-5",
    "name": "Bujías de Iridium x4",
    "price": 50,
    "description": "Bujías de Iridium x4 de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/bujias-de-iridium-x4.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-bateria-13-plac-6",
    "name": "Batería 13 Placas",
    "price": 39,
    "description": "Batería 13 Placas de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/bateria-13-placas.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-aceite-multigra-7",
    "name": "Aceite Multigrado 20W-50",
    "price": 60,
    "description": "Aceite Multigrado 20W-50 de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/aceite-multigrado-20w-50.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-refrigerante-pr-8",
    "name": "Refrigerante Premium",
    "price": 27,
    "originalPrice": 34,
    "description": "Refrigerante Premium de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/refrigerante-premium.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-liquido-de-fren-9",
    "name": "Líquido de Frenos Dot4",
    "price": 79,
    "description": "Líquido de Frenos Dot4 de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/liquido-de-frenos-dot4.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-faro-delantero--10",
    "name": "Faro Delantero Derecho",
    "price": 60,
    "description": "Faro Delantero Derecho de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/faro-delantero-derecho.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-espejo-retrovis-11",
    "name": "Espejo Retrovisor Lateral",
    "price": 62,
    "originalPrice": 78,
    "description": "Espejo Retrovisor Lateral de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/espejo-retrovisor-lateral.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-bomba-de-agua-12",
    "name": "Bomba de Agua",
    "price": 67,
    "description": "Bomba de Agua de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/bomba-de-agua.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-correa-de-distr-13",
    "name": "Correa de Distribución",
    "price": 79,
    "description": "Correa de Distribución de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/correa-de-distribucion.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-rodaje-de-rueda-14",
    "name": "Rodaje de Rueda",
    "price": 67,
    "description": "Rodaje de Rueda de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/rodaje-de-rueda.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-empaque-de-cula-15",
    "name": "Empaque de Culata",
    "price": 18,
    "originalPrice": 23,
    "description": "Empaque de Culata de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/empaque-de-culata.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-sensor-de-oxige-16",
    "name": "Sensor de Oxígeno",
    "price": 90,
    "description": "Sensor de Oxígeno de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/sensor-de-oxigeno.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-radiador-de-alu-17",
    "name": "Radiador de Aluminio",
    "price": 21,
    "description": "Radiador de Aluminio de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/radiador-de-aluminio.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-arrancador-elec-18",
    "name": "Arrancador Eléctrico",
    "price": 71,
    "description": "Arrancador Eléctrico de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/arrancador-electrico.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-repue-alternador-90a-19",
    "name": "Alternador 90A",
    "price": 67,
    "description": "Alternador 90A de alta calidad, disponible para entrega inmediata en Repuestos El Cholo.",
    "image": "/images/Repuestos/Repuestos El Cholo/alternador-90a.png",
    "category": "motor",
    "storeName": "Repuestos El Cholo",
    "storeId": "repuestos-el-cholo",
    "whatsappNumber": "912312312",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-kit-de-embrague-0",
    "name": "Kit de Embrague Toyota",
    "price": 68,
    "originalPrice": 85,
    "description": "Kit de Embrague Toyota de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/kit-de-embrague-toyota.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-pastillas-de-fr-1",
    "name": "Pastillas de Freno Delanteras",
    "price": 48,
    "description": "Pastillas de Freno Delanteras de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/pastillas-de-freno-delanteras.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-amortiguadores--2",
    "name": "Amortiguadores Traseros x2",
    "price": 14,
    "description": "Amortiguadores Traseros x2 de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/amortiguadores-traseros-x2.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-filtro-de-aire--3",
    "name": "Filtro de Aire Original",
    "price": 68,
    "originalPrice": 86,
    "description": "Filtro de Aire Original de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/filtro-de-aire-original.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-filtro-de-aceit-4",
    "name": "Filtro de Aceite",
    "price": 64,
    "description": "Filtro de Aceite de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/filtro-de-aceite.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-bujias-de-iridi-5",
    "name": "Bujías de Iridium x4",
    "price": 42,
    "originalPrice": 53,
    "description": "Bujías de Iridium x4 de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/bujias-de-iridium-x4.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-bateria-13-plac-6",
    "name": "Batería 13 Placas",
    "price": 43,
    "description": "Batería 13 Placas de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/bateria-13-placas.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-aceite-multigra-7",
    "name": "Aceite Multigrado 20W-50",
    "price": 63,
    "originalPrice": 79,
    "description": "Aceite Multigrado 20W-50 de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/aceite-multigrado-20w-50.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-refrigerante-pr-8",
    "name": "Refrigerante Premium",
    "price": 57,
    "description": "Refrigerante Premium de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/refrigerante-premium.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-liquido-de-fren-9",
    "name": "Líquido de Frenos Dot4",
    "price": 19,
    "description": "Líquido de Frenos Dot4 de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/liquido-de-frenos-dot4.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-faro-delantero--10",
    "name": "Faro Delantero Derecho",
    "price": 55,
    "description": "Faro Delantero Derecho de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/faro-delantero-derecho.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-espejo-retrovis-11",
    "name": "Espejo Retrovisor Lateral",
    "price": 23,
    "description": "Espejo Retrovisor Lateral de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/espejo-retrovisor-lateral.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-bomba-de-agua-12",
    "name": "Bomba de Agua",
    "price": 34,
    "originalPrice": 43,
    "description": "Bomba de Agua de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/bomba-de-agua.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-correa-de-distr-13",
    "name": "Correa de Distribución",
    "price": 35,
    "description": "Correa de Distribución de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/correa-de-distribucion.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-rodaje-de-rueda-14",
    "name": "Rodaje de Rueda",
    "price": 23,
    "description": "Rodaje de Rueda de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/rodaje-de-rueda.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-empaque-de-cula-15",
    "name": "Empaque de Culata",
    "price": 88,
    "description": "Empaque de Culata de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/empaque-de-culata.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-sensor-de-oxige-16",
    "name": "Sensor de Oxígeno",
    "price": 58,
    "description": "Sensor de Oxígeno de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/sensor-de-oxigeno.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-radiador-de-alu-17",
    "name": "Radiador de Aluminio",
    "price": 15,
    "originalPrice": 19,
    "description": "Radiador de Aluminio de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/radiador-de-aluminio.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-arrancador-elec-18",
    "name": "Arrancador Eléctrico",
    "price": 47,
    "originalPrice": 59,
    "description": "Arrancador Eléctrico de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/arrancador-electrico.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-motor-alternador-90a-19",
    "name": "Alternador 90A",
    "price": 56,
    "description": "Alternador 90A de alta calidad, disponible para entrega inmediata en Motorepuestos San Pedro.",
    "image": "/images/Repuestos/Motorepuestos San Pedro/alternador-90a.png",
    "category": "motor",
    "storeName": "Motorepuestos San Pedro",
    "storeId": "motorepuestos-san-pedro",
    "whatsappNumber": "923423423",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--kit-de-embrague-0",
    "name": "Kit de Embrague Toyota",
    "price": 75,
    "description": "Kit de Embrague Toyota de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/kit-de-embrague-toyota.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--pastillas-de-fr-1",
    "name": "Pastillas de Freno Delanteras",
    "price": 67,
    "description": "Pastillas de Freno Delanteras de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/pastillas-de-freno-delanteras.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--amortiguadores--2",
    "name": "Amortiguadores Traseros x2",
    "price": 58,
    "originalPrice": 73,
    "description": "Amortiguadores Traseros x2 de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/amortiguadores-traseros-x2.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--filtro-de-aire--3",
    "name": "Filtro de Aire Original",
    "price": 61,
    "originalPrice": 77,
    "description": "Filtro de Aire Original de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/filtro-de-aire-original.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--filtro-de-aceit-4",
    "name": "Filtro de Aceite",
    "price": 34,
    "description": "Filtro de Aceite de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/filtro-de-aceite.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--bujias-de-iridi-5",
    "name": "Bujías de Iridium x4",
    "price": 60,
    "description": "Bujías de Iridium x4 de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/bujias-de-iridium-x4.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--bateria-13-plac-6",
    "name": "Batería 13 Placas",
    "price": 68,
    "description": "Batería 13 Placas de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/bateria-13-placas.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--aceite-multigra-7",
    "name": "Aceite Multigrado 20W-50",
    "price": 21,
    "originalPrice": 27,
    "description": "Aceite Multigrado 20W-50 de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/aceite-multigrado-20w-50.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--refrigerante-pr-8",
    "name": "Refrigerante Premium",
    "price": 39,
    "originalPrice": 49,
    "description": "Refrigerante Premium de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/refrigerante-premium.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--liquido-de-fren-9",
    "name": "Líquido de Frenos Dot4",
    "price": 16,
    "originalPrice": 20,
    "description": "Líquido de Frenos Dot4 de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/liquido-de-frenos-dot4.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--faro-delantero--10",
    "name": "Faro Delantero Derecho",
    "price": 59,
    "description": "Faro Delantero Derecho de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/faro-delantero-derecho.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--espejo-retrovis-11",
    "name": "Espejo Retrovisor Lateral",
    "price": 72,
    "description": "Espejo Retrovisor Lateral de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/espejo-retrovisor-lateral.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--bomba-de-agua-12",
    "name": "Bomba de Agua",
    "price": 48,
    "originalPrice": 60,
    "description": "Bomba de Agua de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/bomba-de-agua.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--correa-de-distr-13",
    "name": "Correa de Distribución",
    "price": 46,
    "description": "Correa de Distribución de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/correa-de-distribucion.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--rodaje-de-rueda-14",
    "name": "Rodaje de Rueda",
    "price": 79,
    "description": "Rodaje de Rueda de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/rodaje-de-rueda.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--empaque-de-cula-15",
    "name": "Empaque de Culata",
    "price": 27,
    "originalPrice": 34,
    "description": "Empaque de Culata de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/empaque-de-culata.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--sensor-de-oxige-16",
    "name": "Sensor de Oxígeno",
    "price": 31,
    "description": "Sensor de Oxígeno de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/sensor-de-oxigeno.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--radiador-de-alu-17",
    "name": "Radiador de Aluminio",
    "price": 21,
    "originalPrice": 27,
    "description": "Radiador de Aluminio de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/radiador-de-aluminio.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--arrancador-elec-18",
    "name": "Arrancador Eléctrico",
    "price": 80,
    "description": "Arrancador Eléctrico de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/arrancador-electrico.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-todo--alternador-90a-19",
    "name": "Alternador 90A",
    "price": 63,
    "originalPrice": 79,
    "description": "Alternador 90A de alta calidad, disponible para entrega inmediata en Todo Motor.",
    "image": "/images/Repuestos/Todo Motor/alternador-90a.png",
    "category": "motor",
    "storeName": "Todo Motor",
    "storeId": "todo-motor",
    "whatsappNumber": "934534534",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-kit-de-embrague-0",
    "name": "Kit de Embrague Toyota",
    "price": 37,
    "description": "Kit de Embrague Toyota de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/kit-de-embrague-toyota.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-pastillas-de-fr-1",
    "name": "Pastillas de Freno Delanteras",
    "price": 17,
    "originalPrice": 22,
    "description": "Pastillas de Freno Delanteras de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/pastillas-de-freno-delanteras.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-amortiguadores--2",
    "name": "Amortiguadores Traseros x2",
    "price": 22,
    "originalPrice": 28,
    "description": "Amortiguadores Traseros x2 de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/amortiguadores-traseros-x2.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-filtro-de-aire--3",
    "name": "Filtro de Aire Original",
    "price": 90,
    "description": "Filtro de Aire Original de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/filtro-de-aire-original.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-filtro-de-aceit-4",
    "name": "Filtro de Aceite",
    "price": 16,
    "originalPrice": 20,
    "description": "Filtro de Aceite de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/filtro-de-aceite.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-bujias-de-iridi-5",
    "name": "Bujías de Iridium x4",
    "price": 36,
    "description": "Bujías de Iridium x4 de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/bujias-de-iridium-x4.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-bateria-13-plac-6",
    "name": "Batería 13 Placas",
    "price": 24,
    "originalPrice": 30,
    "description": "Batería 13 Placas de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/bateria-13-placas.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-aceite-multigra-7",
    "name": "Aceite Multigrado 20W-50",
    "price": 28,
    "description": "Aceite Multigrado 20W-50 de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/aceite-multigrado-20w-50.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-refrigerante-pr-8",
    "name": "Refrigerante Premium",
    "price": 77,
    "description": "Refrigerante Premium de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/refrigerante-premium.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-liquido-de-fren-9",
    "name": "Líquido de Frenos Dot4",
    "price": 23,
    "description": "Líquido de Frenos Dot4 de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/liquido-de-frenos-dot4.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-faro-delantero--10",
    "name": "Faro Delantero Derecho",
    "price": 61,
    "description": "Faro Delantero Derecho de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/faro-delantero-derecho.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-espejo-retrovis-11",
    "name": "Espejo Retrovisor Lateral",
    "price": 18,
    "originalPrice": 23,
    "description": "Espejo Retrovisor Lateral de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/espejo-retrovisor-lateral.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-bomba-de-agua-12",
    "name": "Bomba de Agua",
    "price": 21,
    "originalPrice": 27,
    "description": "Bomba de Agua de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/bomba-de-agua.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-correa-de-distr-13",
    "name": "Correa de Distribución",
    "price": 90,
    "description": "Correa de Distribución de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/correa-de-distribucion.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-rodaje-de-rueda-14",
    "name": "Rodaje de Rueda",
    "price": 76,
    "description": "Rodaje de Rueda de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/rodaje-de-rueda.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-empaque-de-cula-15",
    "name": "Empaque de Culata",
    "price": 52,
    "originalPrice": 66,
    "description": "Empaque de Culata de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/empaque-de-culata.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-sensor-de-oxige-16",
    "name": "Sensor de Oxígeno",
    "price": 48,
    "originalPrice": 60,
    "description": "Sensor de Oxígeno de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/sensor-de-oxigeno.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-radiador-de-alu-17",
    "name": "Radiador de Aluminio",
    "price": 16,
    "description": "Radiador de Aluminio de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/radiador-de-aluminio.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-arrancador-elec-18",
    "name": "Arrancador Eléctrico",
    "price": 91,
    "description": "Arrancador Eléctrico de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/arrancador-electrico.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-mecan-alternador-90a-19",
    "name": "Alternador 90A",
    "price": 68,
    "originalPrice": 85,
    "description": "Alternador 90A de alta calidad, disponible para entrega inmediata en Mecánica Pro.",
    "image": "/images/Repuestos/Mecánica Pro/alternador-90a.png",
    "category": "motor",
    "storeName": "Mecánica Pro",
    "storeId": "mecanica-pro",
    "whatsappNumber": "945645645",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-kit-de-embrague-0",
    "name": "Kit de Embrague Toyota",
    "price": 30,
    "description": "Kit de Embrague Toyota de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/kit-de-embrague-toyota.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-pastillas-de-fr-1",
    "name": "Pastillas de Freno Delanteras",
    "price": 54,
    "description": "Pastillas de Freno Delanteras de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/pastillas-de-freno-delanteras.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-amortiguadores--2",
    "name": "Amortiguadores Traseros x2",
    "price": 68,
    "originalPrice": 86,
    "description": "Amortiguadores Traseros x2 de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/amortiguadores-traseros-x2.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-filtro-de-aire--3",
    "name": "Filtro de Aire Original",
    "price": 80,
    "description": "Filtro de Aire Original de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/filtro-de-aire-original.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-filtro-de-aceit-4",
    "name": "Filtro de Aceite",
    "price": 26,
    "description": "Filtro de Aceite de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/filtro-de-aceite.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-bujias-de-iridi-5",
    "name": "Bujías de Iridium x4",
    "price": 26,
    "description": "Bujías de Iridium x4 de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/bujias-de-iridium-x4.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-bateria-13-plac-6",
    "name": "Batería 13 Placas",
    "price": 12,
    "originalPrice": 15,
    "description": "Batería 13 Placas de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/bateria-13-placas.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-aceite-multigra-7",
    "name": "Aceite Multigrado 20W-50",
    "price": 75,
    "description": "Aceite Multigrado 20W-50 de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/aceite-multigrado-20w-50.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-refrigerante-pr-8",
    "name": "Refrigerante Premium",
    "price": 62,
    "description": "Refrigerante Premium de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/refrigerante-premium.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-liquido-de-fren-9",
    "name": "Líquido de Frenos Dot4",
    "price": 70,
    "description": "Líquido de Frenos Dot4 de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/liquido-de-frenos-dot4.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-faro-delantero--10",
    "name": "Faro Delantero Derecho",
    "price": 31,
    "description": "Faro Delantero Derecho de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/faro-delantero-derecho.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-espejo-retrovis-11",
    "name": "Espejo Retrovisor Lateral",
    "price": 71,
    "originalPrice": 89,
    "description": "Espejo Retrovisor Lateral de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/espejo-retrovisor-lateral.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-bomba-de-agua-12",
    "name": "Bomba de Agua",
    "price": 81,
    "description": "Bomba de Agua de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/bomba-de-agua.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-correa-de-distr-13",
    "name": "Correa de Distribución",
    "price": 25,
    "description": "Correa de Distribución de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/correa-de-distribucion.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-rodaje-de-rueda-14",
    "name": "Rodaje de Rueda",
    "price": 46,
    "description": "Rodaje de Rueda de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/rodaje-de-rueda.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-empaque-de-cula-15",
    "name": "Empaque de Culata",
    "price": 59,
    "description": "Empaque de Culata de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/empaque-de-culata.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-sensor-de-oxige-16",
    "name": "Sensor de Oxígeno",
    "price": 73,
    "description": "Sensor de Oxígeno de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/sensor-de-oxigeno.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-radiador-de-alu-17",
    "name": "Radiador de Aluminio",
    "price": 24,
    "originalPrice": 30,
    "description": "Radiador de Aluminio de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/radiador-de-aluminio.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-arrancador-elec-18",
    "name": "Arrancador Eléctrico",
    "price": 56,
    "description": "Arrancador Eléctrico de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/arrancador-electrico.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  },
  {
    "id": "prod-el-ci-alternador-90a-19",
    "name": "Alternador 90A",
    "price": 56,
    "originalPrice": 70,
    "description": "Alternador 90A de alta calidad, disponible para entrega inmediata en El Cigüeñal.",
    "image": "/images/Repuestos/El Cigüeñal/alternador-90a.png",
    "category": "motor",
    "storeName": "El Cigüeñal",
    "storeId": "el-ciguenal",
    "whatsappNumber": "956756756",
    "attributes": {
      "brand": "Local"
    }
  }
];
