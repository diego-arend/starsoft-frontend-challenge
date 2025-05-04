"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryProviderProps } from "@/types/queryProvider.-type";

/**
 * QueryProvider Component
 *
 * Provides React Query context to the application
 */
const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Configurações padrão para as queries
            staleTime: 1000 * 60 * 5, // 5 minutos
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
};

export default QueryProvider;
