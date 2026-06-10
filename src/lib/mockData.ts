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
  { id: 'store-aba-1', name: 'Comercial Collantes', category: 'abarrotes', whatsapp: '978410457', description: 'Venta de abarrotes por mayor y menor en el corazón de Chachapoyas.' },
  { id: 'store-aba-2', name: 'Merca Chacha', category: 'abarrotes', whatsapp: '978410457', description: 'Frutas y verduras frescas seleccionadas diariamente.' },
  { id: 'store-aba-3', name: 'Super Bodega El Económico', category: 'abarrotes', whatsapp: '978410457' },
  { id: 'store-aba-4', name: 'Minimarket La Alameda', category: 'abarrotes', whatsapp: '978410457' },
  { id: 'store-aba-5', name: 'Distribuidora Amazonas', category: 'abarrotes', whatsapp: '978410457' },
  
  // Motor
  { id: 'store-mot-1', name: 'Repuestos Amazonas', category: 'motor', whatsapp: '978410457', description: 'Expertos en repuestos originales y accesorios para motos.' },
  { id: 'store-mot-2', name: 'Motoservice El Rayo', category: 'motor', whatsapp: '978410457' },
  { id: 'store-mot-3', name: 'La Casa del Motociclista', category: 'motor', whatsapp: '978410457' },
  { id: 'store-mot-4', name: 'Lubricantes San Juan', category: 'motor', whatsapp: '978410457' },
  { id: 'store-mot-5', name: 'Accesorios ChachaMotos', category: 'motor', whatsapp: '978410457' },

  // Outfit
  { id: 'store-out-1', name: 'Novedades Kuélap', category: 'outfit', whatsapp: '978410457', description: 'Ropa y accesorios con el mejor estilo de la región.' },
  { id: 'store-out-2', name: 'Boutique Elegancia', category: 'outfit', whatsapp: '978410457' },
  { id: 'store-out-3', name: 'Moda Urbana Chacha', category: 'outfit', whatsapp: '978410457' },
  { id: 'store-out-4', name: 'Sport Center Amazonas', category: 'outfit', whatsapp: '978410457' },
  { id: 'store-out-5', name: 'Calzado & Estilo Local', category: 'outfit', whatsapp: '978410457' },

  // Gadgets
  { id: 'store-gad-1', name: 'Cyber Mundo Chachapoyas', category: 'gadgets', whatsapp: '978410457', description: 'Tecnología, celulares y laptops de última generación.' },
  { id: 'store-gad-2', name: 'Digital Store Pro', category: 'gadgets', whatsapp: '978410457' },
  { id: 'store-gad-3', name: 'Móvil Shop Amazonas', category: 'gadgets', whatsapp: '978410457' },
  { id: 'store-gad-4', name: 'Gaming Zone Local', category: 'gadgets', whatsapp: '978410457' },
  { id: 'store-gad-5', name: 'Appliance & Tech', category: 'gadgets', whatsapp: '978410457' },

  // Ferreteria
  { id: 'store-fer-1', name: 'Ferretería El Progreso', category: 'ferreteria', whatsapp: '978410457', description: 'Herramientas y materiales de construcción de alta calidad.' },
  { id: 'store-fer-2', name: 'Comercial El Fierro', category: 'ferreteria', whatsapp: '978410457' },
  { id: 'store-fer-3', name: 'Pinturas & Metales Amazonas', category: 'ferreteria', whatsapp: '978410457' },
  { id: 'store-fer-4', name: 'Herramientas El Constructor', category: 'ferreteria', whatsapp: '978410457' },
  { id: 'store-fer-5', name: 'Ferrecer Chachapoyas', category: 'ferreteria', whatsapp: '978410457' },

  // Farmacia
  { id: 'store-far-1', name: 'Botica Amazonas', category: 'farmacia', whatsapp: '978410457', description: 'Tu salud es nuestra prioridad. Atención las 24 horas.' },
  { id: 'store-far-2', name: 'Farmacia San Lucas', category: 'farmacia', whatsapp: '978410457' },
  { id: 'store-far-3', name: 'FarmaSalud Chacha', category: 'farmacia', whatsapp: '978410457' },
  { id: 'store-far-4', name: 'Botica de la Esperanza', category: 'farmacia', whatsapp: '978410457' },
  { id: 'store-far-5', name: 'Medicinas & Salud Local', category: 'farmacia', whatsapp: '978410457' },
];

const STRICT_IMAGE_MAP: Record<string, string> = {
  // Ferretería
  'Martillo': 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80',
  'Taladro': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
  'Pintura': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
  
  // Farmacia
  'Vitaminas': 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80',
  'Pastillas': 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80',
  'Jarabe': 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=600&q=80',
  'Medicina': 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=600&q=80',
  'Crema': 'https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&w=600&q=80',
  
  // Abarrotes
  'Miel': 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
  'Café': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
  'Aceite': 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=600&q=80',
  'Leche': 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=600&q=80',
  
  // Tecnología
  'Celular': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
  'Smartphone': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
  'Laptop': 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=600&q=80',
};

const FALLBACK_IMAGES: Record<Category, string> = {
  abarrotes: 'https://images.unsplash.com/photo-1542838132102-2b29ae130e8a?auto=format&fit=crop&w=600&q=80',
  motor: 'https://images.unsplash.com/photo-1444491741275-3747c34c99d4?auto=format&fit=crop&w=600&q=80',
  outfit: 'https://images.unsplash.com/photo-1490481651871-ab68ff25d43d?auto=format&fit=crop&w=600&q=80',
  gadgets: 'https://images.unsplash.com/photo-1517336714731-48b67c11dbf5?auto=format&fit=crop&w=600&q=80',
  ferreteria: 'https://images.unsplash.com/photo-1581147036324-c17da419a811?auto=format&fit=crop&w=600&q=80',
  farmacia: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
};

const getProductImage = (category: Category, productName: string): string => {
  for (const [key, url] of Object.entries(STRICT_IMAGE_MAP)) {
    if (productName.toLowerCase().includes(key.toLowerCase())) {
      return url;
    }
  }
  return FALLBACK_IMAGES[category];
};

const DICTIONARIES = {
  abarrotes: {
    nouns: ['Arroz Extra', 'Aceite Vegetal', 'Fideos Cortos', 'Leche Evaporada', 'Miel Silvestre', 'Café Tostado'],
    brands: ['Costeño', 'Primor', 'Don Vittorio', 'Gloria', 'ChanchaMiel', 'Altomayo'],
    range: [3.5, 45.0],
  },
  motor: {
    nouns: ['Aceite de Motor', 'Bujía Iridium', 'Pastillas de Freno', 'Kit de Arrastre', 'Casco Moto'],
    brands: ['Motul', 'NGK', 'Fras-le', 'Escruton', 'LS2'],
    range: [15.0, 450.0],
  },
  outfit: {
    nouns: ['Polo Urban', 'Jean Slim', 'Casaca Cortaviento', 'Zapatillas Running', 'Gorra Snapback'],
    brands: ['Nike', 'Adidas', 'Levis', 'Diesel', 'Urban Style'],
    range: [25.0, 350.0],
  },
  gadgets: {
    nouns: ['Smartphone 5G', 'Auriculares Bluetooth', 'Cargador Rápido', 'Smartwatch Pro', 'Laptop Core i7'],
    brands: ['Samsung', 'Apple', 'Xiaomi', 'Huawei', 'HP'],
    range: [12.0, 3500.0],
  },
  ferreteria: {
    nouns: ['Martillo Carpintero', 'Pintura Látex', 'Tornillos Drywall', 'Taladro Percutor', 'Cinta Métrica'],
    brands: ['Stanley', 'Forte', 'Bosch', 'Truper', 'Tramontina'],
    range: [5.0, 550.0],
  },
  farmacia: {
    nouns: ['Paracetamol Vitaminas', 'Amoxicilina Pastillas', 'Jarabe para Tos', 'Vitamina C Pastillas', 'Crema Hidratante'],
    brands: ['Bayer', 'Genfar', '3M', 'Mibe', 'Quimica Suiza'],
    range: [2.5, 85.0],
  }
};

const generateMocks = (): Product[] => {
  const products: Product[] = [];

  STORES.forEach((store) => {
    const dict = (DICTIONARIES as any)[store.category];
    
    for (let i = 1; i <= 20; i++) {
       const noun = dict.nouns[i % dict.nouns.length];
       const brand = dict.brands[i % dict.brands.length];
       const price = Math.random() * (dict.range[1] - dict.range[0]) + dict.range[0];
       const name = `${noun} ${brand}`;
       
       const product: any = {
         id: `prod-${store.id}-${i}`,
         name: name,
         price: parseFloat(price.toFixed(2)),
         description: `Excelente producto ${noun} de la marca ${brand}, garantizado por ${store.name}. Ideal para residentes de Chachapoyas.`,
         image: getProductImage(store.category, name),
         category: store.category,
         storeName: store.name,
         storeId: store.id,
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
