import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import CardItemNFT from '@/components/CardItemNFT';
import { CartItem } from '@/types/cartSlice-types'; 
import Image from 'next/image';

// Mock components with simple implementations
jest.mock('@/components/ContainerImage', () => ({
  __esModule: true,
  default: (props: { src: string; alt?: string }) => (
    <Image
      data-testid="container-image"
      alt={props.alt || ''}
      {...props}
    />
  )
}));

jest.mock('@/components/ItemDetails', () => ({
  __esModule: true,
  default: ({ title, description }: { title: string; description: string }) => (
    <div data-testid="item-details">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}));

jest.mock('@/components/CryptoValue', () => ({
  __esModule: true,
  default: ({ value, symbol }: { value: number; symbol: string }) => (
    <div data-testid="crypto-value">{value} {symbol}</div>
  )
}));

// Animation mock with simplified implementation
jest.mock('@/components/CartAddAnimation', () => ({
  __esModule: true,
  default: ({ isNewItem, onAnimationStart, onAnimationComplete }: { 
    isNewItem: boolean; 
    onAnimationStart: () => void; 
    onAnimationComplete: () => void 
  }) => {
    // Call the handlers immediately in the render phase if isNewItem is true
    if (isNewItem) {
      // Use setTimeout with 0ms to move these calls outside the render cycle
      setTimeout(() => {
        onAnimationStart();
        // Simulate animation completion after a brief delay
        setTimeout(onAnimationComplete, 10);
      }, 0);
    }
    
    return <div data-testid="cart-animation" data-is-new-item={isNewItem.toString()} />;
  }
}));

const defaultProps = {
  id: 1,
  title: 'Test NFT',
  description: 'This is a test NFT',
  imageUrl: '/test-image.jpg',
  price: 1.5,
  cryptoSymbol: 'ETH',
  cryptoIconPath: '/eth_symbol.png',
  onBuyClick: jest.fn(),
};

const emptyCartState = {
  cart: { items: [], isOpen: false }
};

const itemInCartState = {
  cart: {
    items: [{
      id: 1,
      name: 'Test NFT',
      description: 'This is a test NFT',
      image: '/test-image.jpg',
      price: 1.5,
      crypto_symbol: 'ETH',
      crypto_icon_path: '/eth_symbol.png',
      quantity: 1,
    } as CartItem],
    isOpen: false
  }
};

describe('CardItemNFT Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with buy button when item is not in cart', () => {
    renderWithProviders(<CardItemNFT {...defaultProps} />, {
      preloadedState: emptyCartState,
    });

    // Check main elements
    expect(screen.getByTestId('container-image')).toHaveAttribute('src', '/test-image.jpg');
    expect(screen.getByText('Test NFT')).toBeInTheDocument();
    expect(screen.getByText('This is a test NFT')).toBeInTheDocument();
    expect(screen.getByTestId('crypto-value')).toHaveTextContent('1.5 ETH');
    expect(screen.getByText('COMPRAR')).toBeInTheDocument();
  });

  it('should show "NO CARRINHO" button when item is in cart', () => {
    renderWithProviders(<CardItemNFT {...defaultProps} />, {
      preloadedState: itemInCartState,
    });

    expect(screen.getByText('NO CARRINHO')).toBeInTheDocument();
    expect(screen.queryByText('COMPRAR')).not.toBeInTheDocument();
  });

  it('should call onBuyClick and trigger animation when buy button is clicked', async () => {
    renderWithProviders(<CardItemNFT {...defaultProps} />, {
      preloadedState: emptyCartState,
    });

    const buyButton = screen.getByText('COMPRAR');
    
    // Click button and check if handler was called
    fireEvent.click(buyButton);
    expect(defaultProps.onBuyClick).toHaveBeenCalledWith(defaultProps.id);
    
    // Check animation
    expect(screen.getByTestId('cart-animation')).toHaveAttribute('data-is-new-item', 'true');
    
    // Check if button is temporarily disabled
    expect(buyButton).toBeDisabled();
    
    // Wait for animation to complete and check if button is enabled again
    await waitFor(() => {
      expect(buyButton).not.toBeDisabled();
    });
  });

  it('should not call onBuyClick but trigger animation when item is already in cart', () => {
    renderWithProviders(<CardItemNFT {...defaultProps} />, {
      preloadedState: itemInCartState,
    });

    const inCartButton = screen.getByText('NO CARRINHO');
    fireEvent.click(inCartButton);
    
    // Should not call onBuyClick
    expect(defaultProps.onBuyClick).not.toHaveBeenCalled();
    
    // But should start animation
    expect(screen.getByTestId('cart-animation')).toBeInTheDocument();
  });

  it('should use default crypto values when not provided', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { cryptoSymbol, cryptoIconPath, ...propsWithoutCrypto } = defaultProps;
    
    renderWithProviders(<CardItemNFT {...propsWithoutCrypto} />, {
      preloadedState: emptyCartState,
    });

    // Check if default values are applied
    expect(screen.getByTestId('crypto-value')).toHaveTextContent('1.5 ETH');
  });
});