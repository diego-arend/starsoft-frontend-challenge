"use client";

import { useQuery } from "@tanstack/react-query";
import { ProductsService } from "@/services/api/api";
import { ITEMS_PER_PAGE } from "@/constants/general-constants";
import { UseProductsParams } from "@/types/useProducts-types";

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