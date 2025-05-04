import { UseQueryOptions } from "@tanstack/react-query";
import { PaginatedResponse } from "./paginate-types";
import { Product } from "./product-types";

export interface UseProductsParams {
  page?: number;
  limit?: number;
  options?: Omit<
    UseQueryOptions<PaginatedResponse<Product>, Error>,
    "queryKey" | "queryFn"
  >;
}
