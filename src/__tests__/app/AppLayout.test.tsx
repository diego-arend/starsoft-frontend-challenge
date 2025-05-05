import React from 'react';
import { render, screen } from '@testing-library/react';
import AppLayout from '@/app/appLayout'; // Fixed import casing to match the actual file

// Mock the necessary components and hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  Provider: ({ children }: { children: React.ReactNode }) => {
    const MockProvider = () => <div data-testid="redux-provider">{children}</div>;
    MockProvider.displayName = 'MockReduxProvider';
    return <MockProvider />;
  }
}));

jest.mock('styled-components', () => ({
  ...jest.requireActual('styled-components'),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => {
    const MockThemeProvider = () => <div data-testid="theme-provider">{children}</div>;
    MockThemeProvider.displayName = 'MockThemeProvider';
    return <MockThemeProvider />;
  }
}));

jest.mock('@/providers/QueryProvider', () => {
  const MockQueryProvider = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="query-provider">{children}</div>
  );
  MockQueryProvider.displayName = 'MockQueryProvider';
  return MockQueryProvider;
});

jest.mock('@/components/Header', () => {
  const MockHeader = () => <header data-testid="header">Header</header>;
  MockHeader.displayName = 'MockHeader';
  return MockHeader;
});

jest.mock('@/components/Footer', () => {
  const MockFooter = () => <footer data-testid="footer">Footer</footer>;
  MockFooter.displayName = 'MockFooter';
  return MockFooter;
});

jest.mock('react-hot-toast', () => ({
  Toaster: () => {
    const MockToaster = () => <div data-testid="toaster">Toaster</div>;
    MockToaster.displayName = 'MockToaster';
    return <MockToaster />;
  }
}));

// Mock Redux action creator to return a valid action object
jest.mock('@/redux/slices/cartSlice', () => ({
  initializeCart: () => ({ type: 'cart/initializeCart' })
}));

// Mock the Redux store
jest.mock('@/redux/store', () => ({
  store: {
    dispatch: jest.fn(),
    getState: jest.fn(),
    subscribe: jest.fn()
  }
}));

describe('AppLayout Component', () => {
  it('should render with all required providers', () => {
    render(
      <AppLayout>
        <div data-testid="content">Test Content</div>
      </AppLayout>
    );
    
    // Verify all providers are present
    expect(screen.getByTestId('redux-provider')).toBeInTheDocument();
    expect(screen.getByTestId('theme-provider')).toBeInTheDocument();
    expect(screen.getByTestId('query-provider')).toBeInTheDocument();
    
    // Verify child content is rendered
    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    
    // Verify layout components are rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('toaster')).toBeInTheDocument();
  });
});