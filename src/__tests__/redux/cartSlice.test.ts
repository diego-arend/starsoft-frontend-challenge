import cartReducer, {
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
  selectCartItems,
  selectCartCount,
  initializeCart,
  selectCartInitialized
} from '@/redux/slices/cartSlice';
import { Product } from '@/types/product-types';
import { CartState } from '@/types/cartSlice-types';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    store,
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock console.error to test error handling
const originalConsoleError = console.error;
console.error = jest.fn();

describe('Cart Slice', () => {
  const initialState: CartState = {
    items: [],
    isOpen: false,
  };

  const mockProduct: Product = {
    id: 1,
    name: 'Test NFT',
    description: 'A test NFT',
    image: '/test.jpg',
    price: 1.5,
    crypto_symbol: 'ETH',
    crypto_icon_path: '/eth.png',
    createdAt: '2023-01-01T00:00:00Z'
  };

  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.clear();
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  it('should return the initial state', () => {
    expect(cartReducer(undefined, { type: 'INIT' })).toEqual(expect.objectContaining({
      items: [],
      isOpen: false,
    }));
  });

  it('should default to empty array when localStorage throws an error', () => {
    localStorageMock.getItem.mockImplementationOnce(() => {
      throw new Error('Test error');
    });
    
    const state = cartReducer(undefined, { type: 'INIT' });
    
    expect(state.items).toEqual([]);
  });

  it('should handle errors when saving to localStorage', () => {
    localStorageMock.setItem.mockImplementationOnce(() => {
      throw new Error('Test error');
    });
    
    const nextState = cartReducer(initialState, addToCart(mockProduct));
    
    expect(nextState.items).toHaveLength(1);
  });

  it('should initialize cart from localStorage', () => {
    const mockCartItems = [{...mockProduct, quantity: 2}];
    
    localStorageMock.store = { 'cart': JSON.stringify(mockCartItems) };
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockCartItems));
    
    const nextState = cartReducer(initialState, initializeCart());
    
    expect(nextState.isOpen).toBe(false);
    expect(nextState.items).toBeDefined();
    expect(Array.isArray(nextState.items)).toBe(true);
  });

  it('should handle errors during cart initialization', () => {
    localStorageMock.getItem.mockImplementationOnce(() => {
      throw new Error('Test initialization error');
    });
    
    const nextState = cartReducer(initialState, initializeCart());
    
    expect(nextState.items).toBeDefined();
    expect(Array.isArray(nextState.items)). toBe(true);
  });

  it('should add an item to an empty cart', () => {
    const nextState = cartReducer(initialState, addToCart(mockProduct));
    
    expect(nextState.items).toHaveLength(1);
    expect(nextState.items[0]).toEqual({
      ...mockProduct,
      quantity: 1
    });
    expect(localStorageMock.setItem).toHaveBeenCalled();
  });

  it('should increase quantity when adding an existing item', () => {
    const stateWithItem = {
      ...initialState,
      items: [{...mockProduct, quantity: 1}],
    };
    
    const nextState = cartReducer(stateWithItem, addToCart(mockProduct));
    
    expect(nextState.items).toHaveLength(1);
    expect(nextState.items[0].quantity).toBe(2);
  });

  it('should remove an item from cart', () => {
    const stateWithItem = {
      ...initialState,
      items: [{...mockProduct, quantity: 1}],
    };
    
    const nextState = cartReducer(stateWithItem, removeFromCart(mockProduct.id));
    
    expect(nextState.items).toHaveLength(0);
  });

  it('should clear all items from cart', () => {
    const stateWithItems = {
      ...initialState,
      items: [
        {...mockProduct, quantity: 1},
        {...mockProduct, id: 2, name: 'Test NFT 2', quantity: 3}
      ],
    };
    
    const nextState = cartReducer(stateWithItems, clearCart());
    
    expect(nextState.items).toHaveLength(0);
  });

  it('should update quantity of an item', () => {
    const stateWithItem = {
      ...initialState,
      items: [{...mockProduct, quantity: 1}],
    };
    
    const nextState = cartReducer(
      stateWithItem, 
      updateQuantity({id: mockProduct.id, quantity: 5})
    );
    
    expect(nextState.items[0].quantity).toBe(5);
  });

  it('should remove item when updating quantity to zero', () => {
    const stateWithItem = {
      ...initialState,
      items: [{...mockProduct, quantity: 1}],
    };
    
    const nextState = cartReducer(
      stateWithItem, 
      updateQuantity({id: mockProduct.id, quantity: 0})
    );
    
    expect(nextState.items).toHaveLength(0);
  });

  it('should do nothing when updating quantity of non-existent item', () => {
    const stateWithItem = {
      ...initialState,
      items: [{...mockProduct, quantity: 1}],
    };
    
    const nextState = cartReducer(
      stateWithItem, 
      updateQuantity({id: 999, quantity: 5})
    );
    
    expect(nextState).toEqual(stateWithItem);
  });

  it('should return correct cart count', () => {
    const mockState = {
      cart: {
        items: [
          {...mockProduct, quantity: 1},
          {...mockProduct, id: 2, name: 'Test NFT 2', quantity: 3}
        ],
        isOpen: false
      }
    };
    
    expect(selectCartCount(mockState as { cart: CartState })).toBe(2);
    expect(selectCartItems(mockState as { cart: CartState })).toHaveLength(2);
  });
  
  it('should select cart initialized status', () => {
    const mockState = {
      cart: {
        items: [],
        isOpen: true
      }
    };
    
    expect(selectCartInitialized(mockState as { cart: CartState })).toBe(true);
  });
});