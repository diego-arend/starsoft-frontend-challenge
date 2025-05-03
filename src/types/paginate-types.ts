export interface PaginatedResponse<T> {
  data: T[];
  metadata: {
    page: number;
    pageCount: number;
    totalCount?: number;
    limit?: number;
  };
}