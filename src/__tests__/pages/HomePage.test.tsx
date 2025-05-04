import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import HomePage from '@/app/page';
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/types/product-types';
import { PaginatedResponse } from '@/types/paginate-types';
import { CardItemNFTProps } from '@/types/card-item-nft-types';

// Mock the useProducts hook
jest.mock('@/hooks/useProducts', () => ({
  useProducts: jest.fn(),
}));

// Mock components that we don't need to test in detail
jest.mock('@/components/LoadingSpinner', () => {
  return {
    __esModule: true,
    // Using the most basic type possible, just what's needed for the test
    default: ({ text }: { text: string }) => <div data-testid="loading-spinner">{text}</div>,
  };
});

jest.mock('@/components/CardItemNFT', () => {
  return {
    __esModule: true,
    default: (props: CardItemNFTProps) => (
      <div data-testid="card-item-nft" id={`card-${props.id}`}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button onClick={() => props.onBuyClick && props.onBuyClick(props.id)}>COMPRAR</button>
      </div>
    ),
  };
});

jest.mock('@/components/Pagination', () => {
  return {
    __esModule: true,
    default: (props: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) => (
      <div data-testid="pagination">
        <button onClick={() => props.onPageChange(props.currentPage - 1)}>Anterior</button>
        <span>Página {props.currentPage} de {props.totalPages}</span>
        <button onClick={() => props.onPageChange(props.currentPage + 1)}>Próxima</button>
      </div>
    ),
  };
});

// Test data using existing interfaces
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'NFT Test 1',
    description: 'First test NFT',
    image: '/test-image-1.jpg',
    price: 1.5,
    crypto_symbol: 'ETH',
    crypto_icon_path: '/eth_symbol.png',
    createdAt: new Date().toISOString() 
  },
  {
    id: 2,
    name: 'NFT Test 2',
    description: 'Second test NFT',
    image: '/test-image-2.jpg',
    price: 2.5,
    crypto_symbol: 'ETH',
    crypto_icon_path: '/eth_symbol.png',
    createdAt: new Date().toISOString() 
  },
];

const mockProductsResponse: PaginatedResponse<Product> = {
  data: mockProducts,
  metadata: {
    pageCount: 2,
    page: 1,
    totalCount: 22,
  },
};

describe('HomePage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show loading spinner when data is loading', () => {
    (useProducts as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
      error: null,
    });

    renderWithProviders(<HomePage />);
    
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('should render products when loaded successfully', () => {
    (useProducts as jest.Mock).mockReturnValue({
      data: mockProductsResponse,
      isLoading: false,
      isError: false,
      error: null,
    });

    renderWithProviders(<HomePage />);

    // Check if products were rendered
    expect(screen.getByText('NFT Test 1')).toBeInTheDocument();
    expect(screen.getByText('NFT Test 2')).toBeInTheDocument();
    
    // Check pagination
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });

  it('should show error message when API request fails', () => {
    const errorMessage = 'Failed to load products';
    
    (useProducts as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
      error: { message: errorMessage },
    });

    renderWithProviders(<HomePage />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('should show message when no products are available', () => {
    (useProducts as jest.Mock).mockReturnValue({
      data: { data: [], metadata: { pageCount: 0, page: 1, totalCount: 0 } },
      isLoading: false,
      isError: false,
      error: null,
    });

    renderWithProviders(<HomePage />);

    expect(screen.getByText('Nenhum produto disponível no momento.')).toBeInTheDocument();
  });

  it('should dispatch addToCart action when buy button is clicked', () => {
    (useProducts as jest.Mock).mockReturnValue({
      data: mockProductsResponse,
      isLoading: false,
      isError: false,
      error: null,
    });

    const { store } = renderWithProviders(<HomePage />);
    
    // Click the buy button
    const buyButtons = screen.getAllByText('COMPRAR');
    fireEvent.click(buyButtons[0]);
    
    // Check if the action was dispatched
    const actions = store.getActions();
    expect(actions[0].type).toBe('cart/addToCart');
    expect(actions[0].payload).toEqual(mockProducts[0]);
  });

  it('should change page when pagination is used', () => {
    (useProducts as jest.Mock).mockReturnValue({
      data: mockProductsResponse,
      isLoading: false,
      isError: false,
      error: null,
    });

    renderWithProviders(<HomePage />);
    
    // Get "Next" button
    const nextButton = screen.getByText('Próxima');
    
    // Simulate click on pagination
    fireEvent.click(nextButton);
    
    // Check if the hook was called with the new page
    expect(useProducts).toHaveBeenCalledWith(
      expect.objectContaining({ page: 2 })
    );
  });
});