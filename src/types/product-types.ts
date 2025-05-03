export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  createdAt: string;
  crypto_symbol?: string;
  crypto_icon_path?: string;
}