import { Product } from "@/types/product";

export const MOCK_PRODUCTS: Product[] = [
  // ABARROTES
  {
    id: "ab-001",
    name: "Café Orgánico de la Sierra",
    price: 15.50,
    description: "Café de grano selecto, tostado artesanalmente en las montañas locales. Aroma intenso y sabor equilibrado.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
    category: "abarrotes",
    storeName: "La Despensa de Doña Rosa",
    whatsappNumber: "573101234567",
    attributes: {
      unit: "500g"
    }
  },
  {
    id: "ab-002",
    name: "Miel de Abeja Pura",
    price: 12.00,
    description: "Miel 100% natural, extraída directamente de colmenas locales sin aditivos ni conservantes.",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=600&q=80",
    category: "abarrotes",
    storeName: "El Panal Dorado",
    whatsappNumber: "573209876543",
    attributes: {
      unit: "750ml"
    }
  },
  {
    id: "ab-003",
    name: "Queso Costeño Fresco",
    price: 8.50,
    description: "Queso artesanal semi-salado, ideal para acompañar tus platos tradicionales locales.",
    image: "https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?auto=format&fit=crop&w=600&q=80",
    category: "abarrotes",
    storeName: "Lácteos El Corral",
    whatsappNumber: "573005554433",
    attributes: {
      unit: "1kg"
    }
  },

  // REPUESTOS
  {
    id: "rp-001",
    name: "Pastillas de Freno Cerámicas",
    price: 45.00,
    description: "Pastillas de alto rendimiento para frenado silencioso y duradero. Kit para las dos ruedas delanteras.",
    image: "/images/brake-pads.png",
    category: "repuestos",
    storeName: "Repuestos El Pistón",
    whatsappNumber: "573152223344",
    attributes: {
      compatibility: {
        brand: "Toyota",
        model: "Corolla",
        year: 2022
      }
    }
  },
  {
    id: "rp-002",
    name: "Kit de Luces LED H4",
    price: 32.50,
    description: "Bombillos LED de alta intensidad 6000K (luz blanca). Fácil instalación plug & play.",
    image: "/images/led-h4.png",
    category: "repuestos",
    storeName: "Techno-Auto Local",
    whatsappNumber: "573118889900",
    attributes: {
      compatibility: {
        brand: "Chevrolet",
        model: "Onix",
        year: 2021
      }
    }
  },
  {
    id: "rp-003",
    name: "Cadena de Tracción Reforzada",
    price: 28.00,
    description: "Cadena de alta resistencia para motocicletas, lubricada de fábrica para mayor vida útil.",
    image: "/images/moto-chain.png",
    category: "repuestos",
    storeName: "Moto-Repuestos Central",
    whatsappNumber: "573121112233",
    attributes: {
      compatibility: {
        brand: "Yamaha",
        model: "FZ-25",
        year: 2023
      }
    }
  },

  // MODA
  {
    id: "mo-001",
    name: "Chaqueta Denim Urbana",
    price: 55.00,
    description: "Chaqueta de mezclilla premium con diseño moderno y corte ajustado.",
    image: "/images/denim-jacket.png",
    category: "moda",
    storeName: "Boutique Estilo Libre",
    whatsappNumber: "573183334455",
    attributes: {
      sizes: ["S", "M", "L", "XL"],
      colors: ["Azul Classic", "Negro Lavado"]
    }
  },
  {
    id: "mo-002",
    name: "Vestido Floral de Verano",
    price: 42.00,
    description: "Vestido ligero y fresco con estampado botánico, perfecto para el clima local.",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80",
    category: "moda",
    storeName: "Modas del Sol",
    whatsappNumber: "573017778899",
    attributes: {
      sizes: ["XS", "S", "M"],
      colors: ["Blanco/Rojo", "Azul/Verde"]
    }
  },
  {
    id: "mo-003",
    name: "Tenis Deportivos 'Neo-Flex'",
    price: 75.00,
    description: "Calzado ultra-ligero para running o uso diario, con tecnología de amortiguación avanzada.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    category: "moda",
    storeName: "Sport Center Digital",
    whatsappNumber: "573149996655",
    attributes: {
      sizes: ["38", "39", "40", "41", "42"],
      colors: ["Gris Espacial", "Naranja Eléctrico"]
    }
  },

  // TECNOLOGIA
  {
    id: "te-001",
    name: "Audífonos Noise-Cancelling Pro",
    price: 120.00,
    description: "Auriculares inalámbricos con cancelación activa de ruido y 30 horas de batería.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    category: "tecnologia",
    storeName: "Smart-Tech Store",
    whatsappNumber: "573164445566",
    attributes: {
      brand: "AudioMax",
      warrantyMonths: 12,
      specs: {
        "Bluetooth": "5.2",
        "Driver": "40mm",
        "Charging": "USB-C"
      }
    }
  },
  {
    id: "te-002",
    name: "Teclado Mecánico RGB",
    price: 85.00,
    description: "Teclado gamer con switches táctiles, retroiluminación personalizable y estructura de aluminio.",
    image: "/images/rgb-keyboard.png",
    category: "tecnologia",
    storeName: "PC Master Local",
    whatsappNumber: "573216667788",
    attributes: {
      brand: "ForgeKeys",
      warrantyMonths: 6,
      specs: {
        "Switches": "Brown",
        "Layout": "ES-ISO",
        "Connection": "Wired"
      }
    }
  },
  {
    id: "te-003",
    name: "Banco de Energía 20,000mAh",
    price: 35.00,
    description: "Powerbank de alta capacidad con carga rápida y múltiples salidas para todos tus dispositivos.",
    image: "/images/powerbank.png",
    category: "tecnologia",
    storeName: "Conecta-T",
    whatsappNumber: "573132228899",
    attributes: {
      brand: "PowerSwift",
      warrantyMonths: 3,
      specs: {
        "Capacity": "20,000mAh",
        "Max Output": "22.5W",
        "Ports": "2x USB-A, 1x USB-C"
      }
    }
  }
];
