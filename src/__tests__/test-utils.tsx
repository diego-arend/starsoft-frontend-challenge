import React, { ReactElement, PropsWithChildren } from "react";
import { render, RenderOptions, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import configureStore from "redux-mock-store";
import theme from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Creates a mockStore that can be used in tests
const mockStore = configureStore([]);

// Defines the default state for Redux in tests
const defaultState = {
  cart: {
    items: [],
    isOpen: true,
  },
};

// Defines types for rendering options with providers
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Record<string, unknown>;
  store?: ReturnType<typeof mockStore>;
}

/**
 * Renders a component with necessary providers (Redux, Styled Components, etc.)
 */
export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    store = mockStore({ ...defaultState, ...preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    store,
    // Adds a helper to get dispatched actions
    getActions: () => store.getActions(),
  };
}

export function renderHookWithQueryClient<TResult, TProps>(
  renderCallback: (props: TProps) => TResult,
  { initialProps }: { initialProps?: TProps } = {}
) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
        staleTime: 0,
        refetchOnWindowFocus: false,
      },
    },
  });

  const wrapper = ({ children }: PropsWithChildren<object>) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return renderHook(renderCallback, { wrapper, initialProps });
}

export * from "@testing-library/react";
