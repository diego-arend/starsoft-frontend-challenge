import { API_BASE_URL } from "@/constants/api-url-constants";
import { PaginatedResponse } from "@/types/paginate-types";
import { Product } from "@/types/product-types";

/**
 * Service for handling API requests related to products
 */
export const ProductsService = {
  /**
   * Fetch products with pagination
   * 
   * @param page - Page number (default: 1)
   * @param limit - Items per page (default: 20)
   */
  getProducts: async (page = 1, limit = 8): Promise<PaginatedResponse<Product>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log('API response:', data);
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
  
  /**
   * Fetch a single product by ID
   * 
   * @param id - Product ID
   */
  getProductById: async (id: string): Promise<Product> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
  }
};