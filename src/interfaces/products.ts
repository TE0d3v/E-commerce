export interface Products {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number; 
  reviews: number; 
  category: string;
  isNew?: boolean;
  discount?: number;
}