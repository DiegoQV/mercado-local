export type Category = 'abarrotes' | 'motor' | 'outfit' | 'gadgets' | 'ferreteria' | 'farmacia' | 'comidas' | 'bebidas';

export interface BaseProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number; // Precio antes del descuento
  description: string;
  image: string;
  category: Category;
  storeName: string;
  storeId: string;
  whatsappNumber: string;
}

export interface AbarrotesAttributes {
  unit: string;
}

export interface OutfitAttributes {
  sizes: string[];
  colors: string[];
}

export interface MotorAttributes {
  compatibility: {
    brand: string;
    model: string;
    year: number;
  };
}

export interface GadgetAttributes {
  brand: string;
  warrantyMonths: number;
  specs?: Record<string, string>;
}

export interface FerreteriaAttributes {
  brand: string;
  material?: string;
}

export interface FarmaciaAttributes {
  dosage?: string;
  prescriptionRequired: boolean;
}

export interface ComidaAttributes {
  portion: string;
}

export interface BebidaAttributes {
  unit: string;
}

export interface AbarrotesProduct extends BaseProduct {
  category: 'abarrotes';
  attributes: AbarrotesAttributes;
}

export interface OutfitProduct extends BaseProduct {
  category: 'outfit';
  attributes: OutfitAttributes;
}

export interface MotorProduct extends BaseProduct {
  category: 'motor';
  attributes: MotorAttributes;
}

export interface GadgetProduct extends BaseProduct {
  category: 'gadgets';
  attributes: GadgetAttributes;
}

export interface FerreteriaProduct extends BaseProduct {
  category: 'ferreteria';
  attributes: FerreteriaAttributes;
}

export interface FarmaciaProduct extends BaseProduct {
  category: 'farmacia';
  attributes: FarmaciaProductAttributes;
}

export interface ComidaProduct extends BaseProduct {
  category: 'comidas';
  attributes: ComidaAttributes;
}

export interface BebidaProduct extends BaseProduct {
  category: 'bebidas';
  attributes: BebidaAttributes;
}

// Fixed minor naming inconsistency for farmacia attributes
export interface FarmaciaProductAttributes {
  dosage?: string;
  prescriptionRequired: boolean;
}

export type Product = 
  | AbarrotesProduct 
  | OutfitProduct 
  | MotorProduct 
  | GadgetProduct 
  | FerreteriaProduct 
  | FarmaciaProduct
  | ComidaProduct
  | BebidaProduct;

export interface CartItem {
  product: Product;
  quantity: number;
}
