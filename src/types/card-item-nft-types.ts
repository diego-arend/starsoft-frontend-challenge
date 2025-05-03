export interface CardItemNFTProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  price: number | string;
  cryptoSymbol?: string;
  cryptoIconPath?: string;
  onBuyClick?: (id: string | number) => void;
  className?: string;
  // Novas propriedades para dimensões
  width?: string | number;
  height?: string | number;
}

export interface CardContainerProps {
  $width?: string | number;
  $height?: string | number;
}