import { ProductsService } from '@/services/api/api';
import { handleErrorStatusCode, handleApiError } from '@/services/ErrorStatusCode';
import { API_BASE_URL } from '@/constants/api-url-constants';

// Mock the ErrorStatusCode module
jest.mock('@/services/ErrorStatusCode', () => ({
  handleErrorStatusCode: jest.fn(),
  handleApiError: jest.fn().mockImplementation((error) => {
    throw error;
  }),
}));

// Mock fetch
global.fetch = jest.fn();

describe('API Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('ProductsService', () => {
    const mockProducts = {
      data: [
        { 
          id: 1, 
          name: 'Product 1',
          description: 'Description 1',
          image: '/image1.jpg',
          price: 1.5,
          crypto_symbol: 'ETH',
          crypto_icon_path: '/eth.svg',
          createdAt: '2023-01-01'
        }
      ],
      metadata: {
        page: 1,
        pageCount: 10,
        totalCount: 100
      }
    };

    it('should fetch products successfully', async () => {
      // Mock a successful response
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue(mockProducts)
      };
      (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

      const result = await ProductsService.getProducts();

      // Verify fetch was called with correct URL
      expect(global.fetch).toHaveBeenCalledWith(`${API_BASE_URL}/products?page=1&limit=8`);
      
      // Verify response was parsed correctly
      expect(result).toEqual(mockProducts);
      
      // Verify error handlers weren't called
      expect(handleErrorStatusCode).not.toHaveBeenCalled();
      expect(handleApiError).not.toHaveBeenCalled();
    });

    it('should fetch products with custom pagination', async () => {
      // Mock a successful response
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue(mockProducts)
      };
      (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

      await ProductsService.getProducts(2, 20);

      // Verify fetch was called with correct URL including pagination params
      expect(global.fetch).toHaveBeenCalledWith(`${API_BASE_URL}/products?page=2&limit=20`);
    });

    it('should handle api response errors', async () => {
      // Mock a failed response
      const errorResponse = {
        ok: false,
        status: 404,
        statusText: 'Not Found'
      };
      (global.fetch as jest.Mock).mockResolvedValue(errorResponse);

      try {
        await ProductsService.getProducts();
        fail('Expected an error but none was thrown');
      } catch {
        // Verify error handler was called with correct parameters
        expect(handleErrorStatusCode).toHaveBeenCalledWith(
          errorResponse, 
          "Erro ao carregar produtos"
        );
      }
    });

    it('should handle network errors', async () => {
      // Mock a network error
      const networkError = new Error('Network failure');
      (global.fetch as jest.Mock).mockRejectedValue(networkError);

      try {
        await ProductsService.getProducts();
        fail('Expected an error but none was thrown');
      } catch {
        // Verify network error handler was called with correct parameters
        expect(handleApiError).toHaveBeenCalledWith(
          networkError,
          "Erro ao carregar produtos. Verifique sua conexão de internet.",
          "getProducts"
        );
      }
    });
  });
});