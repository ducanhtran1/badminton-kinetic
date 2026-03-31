export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  tag?: string;
  rating?: number;
  reviewsCount?: number;
  description?: string;
  specs?: {
    label: string;
    value: string;
  }[];
  performance?: {
    label: string;
    value: number;
  }[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}
