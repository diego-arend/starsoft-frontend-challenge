import { waitFor } from '@testing-library/react';
import { renderHookWithQueryClient } from '@/__tests__/test-utils';
import { useProducts } from '@/hooks/useProducts';
import { ProductsService } from '@/services/api/api';
import { ITEMS_PER_PAGE } from '@/constants/general-constants';

// Mock the ProductsService
jest.mock('@/services/api/api', () => ({
  ProductsService: {
    getProducts: jest.fn()
  }
}));

// Sample response data
const mockProductsResponse = {
  data: [
    { 
      id: 1, 
      name: 'NFT #1', 
      description: 'First NFT', 
      image: '/image1.jpg', 
      price: 1.5, 
      crypto_symbol: 'ETH', 
      crypto_icon_path: '/eth.png',
      createdAt: '2023-01-01T00:00:00Z'
    }
  ],
  metadata: {
    page: 1,
    pageCount: 5,
    totalCount: 100
  }
};

describe('useProducts Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (ProductsService.getProducts as jest.Mock).mockResolvedValue(mockProductsResponse);
  });

  it('should fetch products with default parameters', async () => {
    const { result } = renderHookWithQueryClient(() => useProducts());

    // Initially in loading state
    expect(result.current.isLoading).toBe(true);

    // Wait for query to complete
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    // Should have called API with default values
    expect(ProductsService.getProducts).toHaveBeenCalledWith(1, ITEMS_PER_PAGE);
    
    // Should have the correct data
    expect(result.current.data).toEqual(mockProductsResponse);
  });

  it('should fetch products with custom parameters', async () => {
    const customPage = 2;
    const customLimit = 10;

    const { result } = renderHookWithQueryClient(() => 
      useProducts({ page: customPage, limit: customLimit })
    );

    // Wait for query to complete
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    // Should have called API with custom values
    expect(ProductsService.getProducts).toHaveBeenCalledWith(customPage, customLimit);
  });

  it('should handle API errors correctly', async () => {
    const testError = new Error('Failed to fetch products');
    (ProductsService.getProducts as jest.Mock).mockRejectedValue(testError);

    const { result } = renderHookWithQueryClient(() => useProducts());

    // Wait for query to error
    await waitFor(() => expect(result.current.isError).toBe(true));

    // Should have error state
    expect(result.current.error).toBeDefined();
  });

  it('should apply custom query options', async () => {
    const customOptions = {
      staleTime: 0,
      retry: false
    };

    const { result } = renderHookWithQueryClient(() => 
      useProducts({ options: customOptions })
    );

    // Wait for query to complete
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    // Can't directly test that options were applied, but we can verify
    // the basic functionality still works
    expect(ProductsService.getProducts).toHaveBeenCalled();
    expect(result.current.data).toEqual(mockProductsResponse);
  });
});