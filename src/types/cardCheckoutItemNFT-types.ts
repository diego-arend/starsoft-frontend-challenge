export interface CardCheckoutItemNFTProps {
  id: string | number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  cryptoSymbol?: string;
  cryptoIconPath?: string;
  onQuantityChange: (id: string | number, quantity: number) => void;
  onRemove: (id: string | number) => void;
}
