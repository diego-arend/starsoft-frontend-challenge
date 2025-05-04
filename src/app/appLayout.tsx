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
import { Toaster } from 'react-hot-toast'; // Importar o Toaster
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
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 3000,
                  style: {
                    background: '#222222',
                    color: '#fff',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    fontSize: '14px',
                    fontFamily: 'Poppins, sans-serif'
                  },
                  success: {
                    iconTheme: {
                      primary: '#10B981',
                      secondary: '#fff',
                    },
                  },
                  error: {
                    iconTheme: {
                      primary: '#EF4444',
                      secondary: '#fff',
                    },
                  }
                }}
              />
            </div>
          </ThemeProvider>
        </QueryProvider>
      </StyledComponentsRegistry>
    </Provider>
  );
}