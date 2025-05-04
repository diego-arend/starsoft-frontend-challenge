import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import theme from '@/styles/theme';

// Cria um mockStore que pode ser usado nos testes
const mockStore = configureStore([]);

// Define o estado padrão para o Redux nos testes
const defaultState = {
  cart: {
    items: [],
    isOpen: true,
  }
};

// Define os tipos para as opções de renderização com providers
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Record<string, unknown>;
  store?: ReturnType<typeof mockStore>;
}

/**
 * Renderiza um componente com os providers necessários (Redux, Styled Components, etc.)
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
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </Provider>
    );
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    store,
    // Adiciona um helper para obter as ações disparadas
    getActions: () => store.getActions(),
  };
}

// Re-exporta tudo de RTL
export * from '@testing-library/react';