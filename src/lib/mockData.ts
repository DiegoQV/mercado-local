import { Product, Category } from "@/types/product";

interface StoreDefinition {
  id: string;
  name: string;
  category: Category;
  whatsapp: string;
}

const STORES: StoreDefinition[] = [
  // Abarrotes
  { id: 'store-aba-1', name: 'Minimarket La Alameda', category: 'abarrotes', whatsapp: '978410457' },
  { id: 'store-aba-2', name: 'Bodega El Vecino', category: 'abarrotes', whatsapp: '978410457' },
  { id: 'store-aba-3', name: 'Super Dulce Hogar', category: 'abarrotes', whatsapp: '978410457' },
  { id: 'store-aba-4', name: 'Abarrotes Don Lucho', category: 'abarrotes', whatsapp: '978410457' },
  { id: 'store-aba-5', name: 'Mercadito Chachapoyano', category: 'abarrotes', whatsapp: '978410457' },
  
  // Motor
  { id: 'store-mot-1', name: 'Repuestos Amazonas', category: 'motor', whatsapp: '978410457' },
  { id: 'store-mot-2', name: 'Motoservice El Rayo', category: 'motor', whatsapp: '978410457' },
  { id: 'store-mot-3', name: 'La Casa del Motor', category: 'motor', whatsapp: '978410457' },
  { id: 'store-mot-4', name: 'Lubricantes San Juan', category: 'motor', whatsapp: '978410457' },
  { id: 'store-mot-5', name: 'Accesorios ChachaMotos', category: 'motor', whatsapp: '978410457' },

  // Outfit
  { id: 'store-out-1', name: 'Novedades Kuélap', category: 'outfit', whatsapp: '978410457' },
  { id: 'store-out-2', name: 'Boutique Elegancia', category: 'outfit', whatsapp: '978410457' },
  { id: 'store-out-3', name: 'Moda Urbana Chacha', category: 'outfit', whatsapp: '978410457' },
  { id: 'store-out-4', name: 'Sport Center Amazonas', category: 'outfit', whatsapp: '978410457' },
  { id: 'store-out-5', name: 'Ropa & Estilo Local', category: 'outfit', whatsapp: '978410457' },

  // Gadgets
  { id: 'store-gad-1', name: 'Cyber Mundo', category: 'gadgets', whatsapp: '978410457' },
  { id: 'store-gad-2', name: 'Tech Solutions Chachapoyas', category: 'gadgets', whatsapp: '978410457' },
  { id: 'store-gad-3', name: 'Móvil Store Pro', category: 'gadgets', whatsapp: '978410457' },
  { id: 'store-gad-4', name: 'Gaming Zone Amazonas', category: 'gadgets', whatsapp: '978410457' },
  { id: 'store-gad-5', name: 'Audio & Video Local', category: 'gadgets', whatsapp: '978410457' },

  // Ferreteria
  { id: 'store-fer-1', name: 'Ferretería El Progreso', category: 'ferreteria', whatsapp: '978410457' },
  { id: 'store-fer-2', name: 'Materiales Amazonas', category: 'ferreteria', whatsapp: '978410457' },
  { id: 'store-fer-3', name: 'Construya Bien', category: 'ferreteria', whatsapp: '978410457' },
  { id: 'store-fer-4', name: 'Pinturas & Metales', category: 'ferreteria', whatsapp: '978410457' },
  { id: 'store-fer-5', name: 'Herramientas del Norte', category: 'ferreteria', whatsapp: '978410457' },

  // Farmacia
  { id: 'store-far-1', name: 'Botica Amazonas', category: 'farmacia', whatsapp: '978410457' },
  { id: 'store-far-2', name: 'Farmacia San Lucas', category: 'farmacia', whatsapp: '978410457' },
  { id: 'store-far-3', name: 'FarmaSalud Chacha', category: 'farmacia', whatsapp: '978410457' },
  { id: 'store-far-4', name: 'Botica de la Esperanza', category: 'farmacia', whatsapp: '978410457' },
  { id: 'store-far-5', name: 'Droguería Médica Amazonas', category: 'farmacia', whatsapp: '978410457' },
];

const DICTIONARIES = {
  abarrotes: {
    nouns: ['Arroz Extra', 'Aceite Vegetal', 'Fideos Cortos', 'Leche Evaporada', 'Azúcar Rubia', 'Café Tostado', 'Atún en Trozos', 'Harina Preparada', 'Sal Marina', 'Galletas Soda'],
    brands: ['Costeño', 'Primor', 'Don Vittorio', 'Gloria', 'Paramonga', 'Altomayo', 'Real', 'Blanca Flor', 'Lobos', 'San Jorge'],
    range: [3.5, 45.0],
    keywords: 'grocery,food,supermarket'
  },
  motor: {
    nouns: ['Aceite de Motor', 'Bujía Iridium', 'Pastillas de Freno', 'Kit de Arrastre', 'Filtro de Aire', 'Batería de Gel', 'Neumático Delantero', 'Cadena Reforzada', 'Espejo Retrovisor', 'Casco Integral'],
    brands: ['Motul', 'NGK', 'Fras-le', 'Escruton', 'Bosch', 'Yamaha', 'Michelin', 'DID', 'Honda', 'LS2'],
    range: [15.0, 450.0],
    keywords: 'motorcycle,engine,parts'
  },
  outfit: {
    nouns: ['Polo Urban', 'Jean Slim', 'Casaca Cortaviento', 'Zapatillas Running', 'Gorra Snapback', 'Camisa Manga Larga', 'Short Deportivo', 'Reloj de Pulsera', 'Billetera Cuero', 'Lentes de Sol'],
    brands: ['Premium', 'Urban Style', 'North Face Alpha', 'Nike Air', 'Adidas Originals', 'Tommy Hilfiger', 'Levis', 'Diesel', 'Gucci Style', 'Ray-Ban'],
    range: [25.0, 350.0],
    keywords: 'fashion,clothing,outfit'
  },
  gadgets: {
    nouns: ['Smartphone 5G', 'Auriculares Bluetooth', 'Cargador Rápido', 'Smartwatch Pro', 'Cable USB-C', 'Power Bank 20k', 'Teclado Mecánico', 'Mouse Gamer', 'Parlante Portátil', 'Tablet Full HD'],
    brands: ['Xiaomi', 'Samsung', 'Apple', 'Huawei', 'Motorola', 'Adata', 'Logitech', 'Razer', 'JBL', 'Lenovo'],
    range: [12.0, 1800.0],
    keywords: 'technology,gadget,phone'
  },
  ferreteria: {
    nouns: ['Martillo de Carpintero', 'Pintura Látex', 'Tornillos Drywall', 'Cinta Métrica', 'Taladro Percutor', 'Destornillador Phillips', 'Pegamento PVC', 'Alicate de Presión', 'Malla Metálica', 'Escalera de Aluminio'],
    brands: ['Tramontina', 'Ceresita', 'Forte', 'Stanley', 'Bosch Pro', 'Truper', 'Soldimix', 'Starrett', 'Prodac', 'National'],
    range: [5.0, 550.0],
    keywords: 'hardware,tools,construction'
  },
  farmacia: {
    nouns: ['Paracetamol 500mg', 'Amoxicilina 250mg', 'Alcohol en Gel', 'Mascarillas KN95', 'Jarabe Multivitamínico', 'Crema Anti-inflamatoria', 'Termómetro Digital', 'Gasa Estéril', 'Suero Oral', 'Vitaminas C'],
    brands: ['Genfar', 'Mibe', 'Quimica Suiza', '3M', 'Bayer', 'Voltaren', 'Omron', 'Huggies', 'Lansier', 'Farmindustria'],
    range: [2.5, 85.0],
    keywords: 'pharmacy,medicine,health'
  }
};

const generateMocks = (): Product[] => {
  const products: Product[] = [];

  STORES.forEach((store) => {
    const dict = DICTIONARIES[store.category];
    
    for (let i = 1; i <= 20; i++) {
       const noun = dict.nouns[Math.floor(Math.random() * dict.nouns.length)];
       const brand = dict.brands[Math.floor(Math.random() * dict.brands.length)];
       const price = Math.random() * (dict.range[1] - dict.range[0]) + dict.range[0];
       
       const product: any = {
         id: `prod-${store.id}-${i}`,
         name: `${noun} ${brand}`,
         price: parseFloat(price.toFixed(2)),
         description: `Producto de alta calidad disponible en ${store.name}. Ideal para tus necesidades diarias en Chachapoyas.`,
         image: `https://images.unsplash.com/photo-1?auto=format&fit=crop&w=600&q=80&keywords=${dict.keywords},${noun.replace(/ /g, ',')}`, // Note: Unsplash needs real IDs, but keywords in query sometimes work with specific API endpoints. Using a simpler approach for now.
         category: store.category,
         storeName: store.name,
         whatsappNumber: store.whatsapp,
       };

       // Add specific attributes
       switch(store.category) {
         case 'abarrotes':
           product.attributes = { unit: i % 3 === 0 ? 'kg' : (i % 2 === 0 ? 'litro' : 'unidad') };
           break;
         case 'motor':
           product.attributes = { 
             compatibility: { 
               brand: brand, 
               model: 'Universal', 
               year: 2020 + (i % 5) 
             } 
           };
           break;
         case 'outfit':
           product.attributes = { 
             sizes: ['S', 'M', 'L', 'XL'], 
             colors: ['Negro', 'Blanco', 'Azul'] 
           };
           break;
         case 'gadgets':
           product.attributes = { brand: brand, warrantyMonths: 12 };
           break;
         case 'ferreteria':
           product.attributes = { brand: brand, material: 'Acero/Industrial' };
           break;
         case 'farmacia':
           product.attributes = { prescriptionRequired: i % 5 === 0 };
           break;
       }

       products.push(product as Product);
    }
  });

  return products;
};

// Fixed Unsplash URL strategy to ensure valid images
const getUnsplashUrl = (category: Category, index: number) => {
  const categoryIds: Record<Category, string[]> = {
    abarrotes: ['1542838132102-2b29ae130e8a', '1543083477048-b3986427d2d1', '1516594773460-a60187a503c4'],
    motor: ['1444491741275-3747c34c99d4', '1558981403-c5f91cbba522', '1586936893354-362ad6ae47fd'],
    outfit: ['1490481651871-ab68ff25d43d', '1489987707025-afc232f7ea0f', '1523381235212-d73f8038f93a'],
    gadgets: ['1517336714731-48b67c11dbf5', '1525547710557-7aa86881f7cf', '1498050108023-c5249f4df085'],
    ferreteria: ['1581244277943-fe4a9c777189', '1504148455328-c396957c5593', '1530124560676-44433e14d338'],
    farmacia: ['1584308666744-24d5c474f2ae', '1576086213369-97a306d36557', '1587854680352-936b22b91033']
  };

  const ids = categoryIds[category];
  const id = ids[index % ids.length];
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;
};

// Re-generate products with fixed URLs
export const MOCK_PRODUCTS = generateMocks().map((p, idx) => ({
  ...p,
  image: getUnsplashUrl(p.category, idx)
}));
