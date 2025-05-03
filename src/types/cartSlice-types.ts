export interface CartItem {
  id: number | string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}
