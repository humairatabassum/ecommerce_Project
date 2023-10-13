import { Product } from './product';

export interface Cart {
    id: number;
    productId: number;
    name: string |undefined 
    quantity: number |undefined;
    product: Product |undefined;
  }