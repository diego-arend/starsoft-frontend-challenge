import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import Header from '@/components/Header';
import * as cartSlice from '@/redux/slices/cartSlice';
import NextImageMock from '@/__tests__/mocks/nextImage.mock';
import NextLinkMock from '@/__tests__/mocks/nextLink.mock';

// Setup mocks
NextImageMock.setupNextImageMock();
NextLinkMock.setupNextLinkMock();

// Mock the initializeCart action to return a plain object instead of a thunk
jest.mock('@/redux/slices/cartSlice', () => ({
  ...jest.requireActual('@/redux/slices/cartSlice'),
  initializeCart: jest.fn(() => ({ type: 'cart/initializeCart' })),
  selectCartItems: jest.fn()
}));

// Mock CartOverlay component
jest.mock('@/components/CartOverlay', () => {
  const MockCartOverlay = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
    <div data-testid="cart-overlay" data-is-open={isOpen}>
      {isOpen && <button onClick={onClose}>Close Cart</button>}
    </div>
  );
  MockCartOverlay.displayName = 'MockCartOverlay';
  return MockCartOverlay;
});

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Set up the selectCartItems mock to return empty array by default
    (cartSlice.selectCartItems as jest.Mock).mockReturnValue([]);
  });

  it('should render logo and cart icon', () => {
    renderWithProviders(<Header />);
    
    // Check logo is present
    expect(screen.getByAltText('Starsoft Logo')).toBeInTheDocument();
    
    // Check cart icon is present
    expect(screen.getByAltText('Shopping Cart')).toBeInTheDocument();
  });

  it('should initialize cart on mount', () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        cart: {
          items: [],
          initialized: false
        }
      }
    });
    
    // Check if our mocked function was called
    expect(cartSlice.initializeCart).toHaveBeenCalled();
  });

  it('should show correct cart count', () => {
    // Mock the selectCartItems to return 3 items
    (cartSlice.selectCartItems as jest.Mock).mockReturnValue([
      { id: 1, quantity: 1 },
      { id: 2, quantity: 1 },
      { id: 3, quantity: 1 }
    ]);
    
    renderWithProviders(<Header />);
    
    const countElement = screen.getByText('3');
    expect(countElement).toBeInTheDocument();
  });

  it('should toggle cart overlay on cart icon click', () => {
    renderWithProviders(<Header />);
    
    // Cart should initially be closed
    const cartOverlay = screen.getByTestId('cart-overlay');
    expect(cartOverlay.getAttribute('data-is-open')).toBe('false');
    
    // Click cart icon to open cart
    const cartIcon = screen.getByAltText('Shopping Cart').closest('div');
    fireEvent.click(cartIcon!);
    
    // Cart should now be open
    expect(cartOverlay.getAttribute('data-is-open')).toBe('true');
    
    // Click close button
    const closeButton = screen.getByText('Close Cart');
    fireEvent.click(closeButton);
    
    // Cart should be closed again
    expect(cartOverlay.getAttribute('data-is-open')).toBe('false');
  });
});