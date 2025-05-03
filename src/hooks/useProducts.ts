"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { PaginatedResponse } from "@/types/paginate-types";
import { ProductsService } from "@/services/api/api";
import { Product } from "@/types/product-types";
import { ITEMS_PER_PAGE } from "@/constants/general-constants";

interface UseProductsParams {
  page?: number;
  limit?: number;
  options?: Omit<UseQueryOptions<PaginatedResponse<Product>, Error>, 'queryKey' | 'queryFn'>;
}

/**
 * useProducts Hook
 * 
 * Custom hook for fetching products data from the API with pagination
 * 
 * @param page - Page number (default: 1)
 * @param limit - Number of items per page (default: 20)
 * @param options - Additional React Query options
 */
export const useProducts = ({ 
  page = 1, 
  limit = ITEMS_PER_PAGE,
  options = {}
}: UseProductsParams = {}) => {
  return useQuery({
    queryKey: ['products', { page, limit }],
    queryFn: () => ProductsService.getProducts(page, limit),
    placeholderData: undefined, 
    staleTime: 1000 * 60 * 5, 
    ...options
  });
};

/**
 * useProduct Hook
 * 
 * Custom hook for fetching a single product by ID
 * 
 * @param id - Product ID
 * @param options - Additional React Query options
 */
export const useProduct = (
  id: string,
  options?: Omit<UseQueryOptions<Product, Error>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => ProductsService.getProductById(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
    ...options
  });
};