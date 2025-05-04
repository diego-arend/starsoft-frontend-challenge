import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import CardCheckoutItemNFT from '@/components/CardCheckoutItemNFT';

// Simple mocks of dependent components
jest.mock('@/components/ContainerImage', () => {
  return {
    __esModule: true,
    default: (props: { src: string; alt?: string }) => <div data-testid="container-image" {...props} />
  };
});

jest.mock('@/components/CryptoValue', () => {
  return {
    __esModule: true,
    default: (props: { value: number; symbol: string }) => <div data-testid="crypto-value">{props.value} {props.symbol}</div>
  };
});

jest.mock('@/components/ItemDetails', () => {
  return {
    __esModule: true,
    default: (props: { title: string }) => <div data-testid="item-details">{props.title}</div>
  };
});

jest.mock('@/components/QuantitySelector', () => {
  return {
    __esModule: true,
    default: ({ quantity, onIncrease, onDecrease }: { quantity: number; onIncrease: () => void; onDecrease: () => void }) => (
      <div data-testid="quantity-selector">
        <button data-testid="decrease-button" onClick={onDecrease} />
        <span data-testid="quantity-value">{quantity}</span>
        <button data-testid="increase-button" onClick={onIncrease} />
      </div>
    )
  };
});

jest.mock('@/components/CircularButton', () => {
  return {
    __esModule: true,
    default: ({ onClick, ariaLabel }: { onClick: () => void; ariaLabel: string }) => (
      <button 
        data-testid="remove-button" 
        onClick={onClick} 
        aria-label={ariaLabel} 
      />
    )
  };
});

describe('CardCheckoutItemNFT Component', () => {
  // Default props for tests
  const defaultProps = {
    id: 1,
    title: 'Test NFT',
    description: 'This is a test NFT',
    image: '/test-image.jpg',
    price: 1.5,
    quantity: 2,
    cryptoSymbol: 'ETH',
    cryptoIconPath: '/eth_symbol.png',
    onQuantityChange: jest.fn(),
    onRemove: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with correct props', () => {
    renderWithProviders(<CardCheckoutItemNFT {...defaultProps} />);
    
    // Check if main components received the correct props
    expect(screen.getByTestId('container-image')).toHaveAttribute('src', '/test-image.jpg');
    expect(screen.getByTestId('item-details')).toHaveTextContent('Test NFT');
    expect(screen.getByTestId('crypto-value')).toHaveTextContent('1.5 ETH');
    expect(screen.getByTestId('quantity-value')).toHaveTextContent('2');
  });

  it('should call onQuantityChange when increasing quantity', () => {
    renderWithProviders(<CardCheckoutItemNFT {...defaultProps} />);
    
    fireEvent.click(screen.getByTestId('increase-button'));
    
    expect(defaultProps.onQuantityChange).toHaveBeenCalledWith(defaultProps.id, 3);
  });

  it('should call onQuantityChange when decreasing quantity if quantity > 1', () => {
    renderWithProviders(<CardCheckoutItemNFT {...defaultProps} />);
    
    fireEvent.click(screen.getByTestId('decrease-button'));
    
    expect(defaultProps.onQuantityChange).toHaveBeenCalledWith(defaultProps.id, 1);
  });

  it('should not call onQuantityChange when decreasing if quantity = 1', () => {
    renderWithProviders(<CardCheckoutItemNFT {...{...defaultProps, quantity: 1}} />);
    
    fireEvent.click(screen.getByTestId('decrease-button'));
    
    expect(defaultProps.onQuantityChange).not.toHaveBeenCalled();
  });

  it('should call onRemove when remove button is clicked', () => {
    renderWithProviders(<CardCheckoutItemNFT {...defaultProps} />);
    
    fireEvent.click(screen.getByTestId('remove-button'));
    
    expect(defaultProps.onRemove).toHaveBeenCalledWith(defaultProps.id);
  });

  it('should use default crypto values when not provided', () => {
    // Omitting cryptoSymbol and cryptoIconPath
    const { ...propsWithoutCrypto } = defaultProps;
    
    renderWithProviders(<CardCheckoutItemNFT {...propsWithoutCrypto} />);
    
    // Check if default values are used in the CryptoValue component
    expect(screen.getByTestId('crypto-value')).toHaveTextContent('1.5 ETH');
  });
});