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
  getProducts: async (page = 1, limit = 20): Promise<PaginatedResponse<Product>> => {
    const url = new URL(`${API_BASE_URL}/products`);
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', limit.toString());

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
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