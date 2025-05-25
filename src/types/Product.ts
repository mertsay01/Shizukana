export type ProductImageSet = {
  pouch?: string;
  pouchnobg?: string;
  bowl?: string;
  combined?: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  images: ProductImageSet;
  description?: string;
};
