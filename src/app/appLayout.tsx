'use client';

import React, { useEffect } from 'react';
import StyledComponentsRegistry from "../styles/registry";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "@/styles/GlobalStyles";
import theme from '@/styles/theme';
import QueryProvider from "@/providers/QueryProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { initializeCart } from '@/redux/slices/cartSlice';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize cartSlice once the component is mounted on the client
  useEffect(() => {
    store.dispatch(initializeCart());
  }, []);

  return (
    <Provider store={store}>
      <StyledComponentsRegistry>
        <QueryProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="layout-wrapper">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </QueryProvider>
      </StyledComponentsRegistry>
    </Provider>
  );
}