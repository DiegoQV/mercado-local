import { Product, Category } from "@/types/product";

export interface StoreDefinition {
  id: string;
  name: string;
  category: Category;
  whatsapp: string;
  description?: string;
}

export const STORES: StoreDefinition[] = [
  // Abarrotes
  { id: 'store-aba-1', name: 'Comercial Collantes', category: 'abarrotes', whatsapp: '978410457', description: 'Venta de abarrotes por mayor y menor.' },
  { id: 'store-aba-2', name: 'Merca Chacha', category: 'abarrotes', whatsapp: '978410457', description: 'Frutas y verduras frescas de la región.' },
  { id: 'store-aba-3', name: 'Super Bodega El Económico', category: 'abarrotes', whatsapp: '978410457' },
  { id: 'store-aba-4', name: 'Minimarket La Alameda', category: 'abarrotes', whatsapp: '978410457' },
  { id: 'store-aba-5', name: 'Distribuidora Amazonas', category: 'abarrotes', whatsapp: '978410457' },
  
  // Motor
  { id: 'store-mot-1', name: 'Repuestos Amazonas', category: 'motor', whatsapp: '978410457', description: 'Expertos en motores y repuestos originales.' },
  { id: 'store-mot-2', name: 'Motoservice El Rayo', category: 'motor', whatsapp: '978410457' },
  { id: 'store-mot-3', name: 'La Casa del Motociclista', category: 'motor', whatsapp: '978410457' },
  { id: 'store-mot-4', name: 'Lubricantes San Juan', category: 'motor', whatsapp: '978410457' },
  { id: 'store-mot-5', name: 'Accesorios ChachaMotos', category: 'motor', whatsapp: '978410457' },

  // Outfit
  { id: 'store-out-1', name: 'Novedades Kuélap', category: 'outfit', whatsapp: '978410457', description: 'Moda y accesorios inspirados en nuestra cultura.' },
  { id: 'store-out-2', name: 'Boutique Elegancia', category: 'outfit', whatsapp: '978410457' },
  { id: 'store-out-3', name: 'Moda Urbana Chacha', category: 'outfit', whatsapp: '978410457' },
  { id: 'store-out-4', name: 'Sport Center Amazonas', category: 'outfit', whatsapp: '978410457' },
  { id: 'store-out-5', name: 'Calzado & Estilo Local', category: 'outfit', whatsapp: '978410457' },

  // Gadgets
  { id: 'store-gad-1', name: 'Cyber Mundo Chachapoyas', category: 'gadgets', whatsapp: '978410457', description: 'Tecnología de última generación a tu alcance.' },
  { id: 'store-gad-2', name: 'Digital Store Pro', category: 'gadgets', whatsapp: '978410457' },
  { id: 'store-gad-3', name: 'Móvil Shop Amazonas', category: 'gadgets', whatsapp: '978410457' },
  { id: 'store-gad-4', name: 'Gaming Zone Local', category: 'gadgets', whatsapp: '978410457' },
  { id: 'store-gad-5', name: 'Appliance & Tech', category: 'gadgets', whatsapp: '978410457' },

  // Ferreteria
  { id: 'store-fer-1', name: 'Ferretería El Progreso', category: 'ferreteria', whatsapp: '978410457', description: 'Todo en materiales de construcción y herramientas.' },
  { id: 'store-fer-2', name: 'Comercial El Fierro', category: 'ferreteria', whatsapp: '978410457' },
  { id: 'store-fer-3', name: 'Pinturas & Metales Amazonas', category: 'ferreteria', whatsapp: '978410457' },
  { id: 'store-fer-4', name: 'Herramientas El Constructor', category: 'ferreteria', whatsapp: '978410457' },
  { id: 'store-fer-5', name: 'Ferrecer Chachapoyas', category: 'ferreteria', whatsapp: '978410457' },

  // Farmacia
  { id: 'store-far-1', name: 'Botica Amazonas', category: 'farmacia', whatsapp: '978410457', description: 'Salud y bienestar para toda la familia.' },
  { id: 'store-far-2', name: 'Farmacia San Lucas', category: 'farmacia', whatsapp: '978410457' },
  { id: 'store-far-3', name: 'FarmaSalud Chacha', category: 'farmacia', whatsapp: '978410457' },
  { id: 'store-far-4', name: 'Botica de la Esperanza', category: 'farmacia', whatsapp: '978410457' },
  { id: 'store-far-5', name: 'Medicinas & Salud Local', category: 'farmacia', whatsapp: '978410457' },
];

const DICTIONARIES = {
  abarrotes: {
    nouns: ['Arroz Extra', 'Aceite Vegetal', 'Fideos Cortos', 'Leche Evaporada', 'Azúcar Rubia', 'Café Tostado'],
    brands: ['Costeño', 'Primor', 'Don Vittorio', 'Gloria', 'Paramonga', 'Altomayo'],
    range: [3.5, 45.0],
    imageIds: ['1542838132102-2b29ae130e8a', '1543083477048-b3986427d2d1', '1516594773460-a60187a503c4', '1506484334406-3d120cc9c37f', '1498837167922-ddd27525d352']
  },
  motor: {
    nouns: ['Aceite de Motor', 'Bujía Iridium', 'Pastillas de Freno', 'Kit de Arrastre', 'Casco Moto'],
    brands: ['Motul', 'NGK', 'Fras-le', 'Escruton', 'LS2'],
    range: [15.0, 450.0],
    imageIds: ['1444491741275-3747c34c99d4', '1558981403-c5f91cbba522', '1586936893354-362ad6ae47fd', '1591410257437-03c004dcfa76', '1558981359-15015b6348c4']
  },
  outfit: {
    nouns: ['Polo Urban', 'Jean Slim', 'Casaca Cortaviento', 'Zapatillas Running', 'Gorra Snapback'],
    brands: ['Nike', 'Adidas', 'Levis', 'Diesel', 'Urban Style'],
    range: [25.0, 350.0],
    imageIds: ['1490481651871-ab68ff25d43d', '1489987707025-afc232f7ea0f', '1523381235212-d73f8038f93a', '1445204450375-7c934bb18458', '1511499767330-aef236371f84']
  },
  gadgets: {
    nouns: ['Smartphone 5G', 'Auriculares Bluetooth', 'Cargador Rápido', 'Smartwatch Pro', 'Laptop Core i7'],
    brands: ['Samsung', 'Apple', 'Xiaomi', 'Huawei', 'HP'],
    range: [12.0, 3500.0],
    imageIds: ['1517336714731-48b67c11dbf5', '1525547710557-7aa86881f7cf', '1498050108023-c5249f4df085', '1588872657578-be133873d2b2', '1521333673332-e9dd20b33c0a']
  },
  ferreteria: {
    nouns: ['Martillo Carpintero', 'Pintura Látex', 'Tornillos Drywall', 'Taladro Percutor', 'Cinta Métrica'],
    brands: ['Stanley', 'Forte', 'Bosch', 'Truper', 'Tramontina'],
    range: [5.0, 550.0],
    imageIds: ['1581147036324-c17da419a811', '1504148455328-c396957c5593', '1530124560676-44433e14d338', '1588854337222-44223316af7a', '1572981779307-38b8c9132c28']
  },
  farmacia: {
    nouns: ['Paracetamol 500mg', 'Amoxicilina 250mg', 'Alcohol en Gel', 'Vitamina C', 'Jarabe para Tos'],
    brands: ['Bayer', 'Genfar', '3M', 'Mibe', 'Quimica Suiza'],
    range: [2.5, 85.0],
    imageIds: ['1584308666744-24d5c474f2ae', '1576086213369-97a306d36557', '1587854680352-936b22b91033', '1550573105-95021810816a', '1471864190281-ed5af7010243']
  }
};

const getImageUrl = (category: string, index: number): string => {
  const ids = (DICTIONARIES as any)[category].imageIds;
  const id = ids[index % ids.length];
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;
};

const generateMocks = (): Product[] => {
  const products: Product[] = [];

  STORES.forEach((store) => {
    const dict = (DICTIONARIES as any)[store.category];
    
    for (let i = 1; i <= 20; i++) {
       const noun = dict.nouns[i % dict.nouns.length];
       const brand = dict.brands[i % dict.brands.length];
       const price = Math.random() * (dict.range[1] - dict.range[0]) + dict.range[0];
       
       const product: any = {
         id: `prod-${store.id}-${i}`,
         name: `${noun} ${brand}`,
         price: parseFloat(price.toFixed(2)),
         description: `Excelente producto ${noun} de la marca ${brand}, garantizado por ${store.name}.`,
         image: getImageUrl(store.category, i),
         category: store.category,
         storeName: store.name,
         storeId: store.id, // Explicit storeId for filtering
         whatsappNumber: store.whatsapp,
       };

       // Add specific attributes
       switch(store.category) {
         case 'abarrotes':
           product.attributes = { unit: i % 2 === 0 ? 'kg' : 'unidad' };
           break;
         case 'motor':
           product.attributes = { compatibility: { brand: brand, model: 'Universal', year: 2024 } };
           break;
         case 'outfit':
           product.attributes = { sizes: ['S', 'M', 'L'], colors: ['Negro', 'Blanco'] };
           break;
         case 'gadgets':
           product.attributes = { brand: brand, warrantyMonths: 12 };
           break;
         case 'ferreteria':
           product.attributes = { brand: brand, material: 'Industrial' };
           break;
         case 'farmacia':
           product.attributes = { prescriptionRequired: i % 10 === 0 };
           break;
       }

       products.push(product as Product);
    }
  });

  return products;
};

export const MOCK_PRODUCTS = generateMocks();
