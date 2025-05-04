import { API_BASE_URL } from "@/constants/api-url-constants";
import { PaginatedResponse } from "@/types/paginate-types";
import { Product } from "@/types/product-types";
import { handleErrorStatusCode, handleApiError } from "@/services/ErrorStatusCode";

/**
 * Handle API response errors with appropriate toast notifications
 * 
 * @param response - Fetch API response object
 * @param customMessage - Optional custom error message prefix
 * @returns The parsed JSON response
 * @throws Error if response is not ok
 */
const handleApiResponse = async <T>(response: Response, customMessage?: string): Promise<T> => {
  if (!response.ok) {
    handleErrorStatusCode(response, customMessage);
  }
  
  return response.json() as Promise<T>;
};

/**
 * Service for handling API requests related to products
 */
export const ProductsService = {
  /**
   * Fetch products with pagination
   *
   * @param page - Page number (default: 1)
   * @param limit - Items per page (default: 8)
   * @returns Promise with paginated products
   * @throws Error if request fails
   */
  getProducts: async (
    page = 1,
    limit = 8
  ): Promise<PaginatedResponse<Product>> => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/products?page=${page}&limit=${limit}`
      );
      
      return await handleApiResponse<PaginatedResponse<Product>>(response, "Erro ao carregar produtos");
    } catch (error) {
      return handleApiError(error, "Erro ao carregar produtos. Verifique sua conexão de internet.", "getProducts");
    }
  }
};
