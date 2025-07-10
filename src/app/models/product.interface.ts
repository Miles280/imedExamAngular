import { Feature } from "./features.interface";

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  fullPrice: number;
  discountPercent: number;
  category: string;
  features: Feature[];
}