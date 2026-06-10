export type Category = 'abarrotes' | 'repuestos' | 'moda' | 'tecnologia';

export interface BaseProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category;
  storeName: string;
  whatsappNumber: string;
}

export interface AbarrotesAttributes {
  unit: string; // ej: 'kg', 'unidad', 'litro'
}

export interface ModaAttributes {
  sizes: string[];
  colors: string[];
}

export interface RepuestosAttributes {
  compatibility: {
    brand: string;
    model: string;
    year: number;
  };
}

export interface TecnologiaAttributes {
  brand: string;
  warrantyMonths: number;
  specs?: Record<string, string>;
}

export interface AbarrotesProduct extends BaseProduct {
  category: 'abarrotes';
  attributes: AbarrotesAttributes;
}

export interface ModaProduct extends BaseProduct {
  category: 'moda';
  attributes: ModaAttributes;
}

export interface RepuestosProduct extends BaseProduct {
  category: 'repuestos';
  attributes: RepuestosAttributes;
}

export interface TecnologiaProduct extends BaseProduct {
  category: 'tecnologia';
  attributes: TecnologiaAttributes;
}

export type Product = AbarrotesProduct | ModaProduct | RepuestosProduct | TecnologiaProduct;

export interface CartItem {
  product: Product;
  quantity: number;
}
