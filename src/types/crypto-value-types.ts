export interface CryptoValueProps {
  /**
   * Value amount to display
   */
  value: number | string;
  
  /**
   * Cryptocurrency symbol (ETH, BTC, etc.)
   */
  symbol: string;
  
  /**
   * Path to the cryptocurrency icon
   * @default "/eth_symbol.png"
   */
  iconPath?: string;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}