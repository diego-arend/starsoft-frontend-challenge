import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import LoadingSpinner from '@/components/LoadingSpinner';

describe('LoadingSpinner Component', () => {
  it('should render with default props', () => {
    const { container } = renderWithProviders(<LoadingSpinner />);
    
    expect(container.firstChild).toBeInTheDocument();
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });

  it('should render loading text when provided', () => {
    renderWithProviders(<LoadingSpinner text="Loading items..." />);
    
    expect(screen.getByText('Loading items...')).toBeInTheDocument();
  });

  it('should apply different sizes', () => {
    const { container, rerender } = renderWithProviders(<LoadingSpinner size="small" />);
    expect(container.firstChild).toBeInTheDocument();
    
    rerender(<LoadingSpinner size="medium" />);
    expect(container.firstChild).toBeInTheDocument();
    
    rerender(<LoadingSpinner size="large" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = renderWithProviders(
      <LoadingSpinner className="custom-spinner" />
    );
    
    const spinnerContainer = container.firstChild as HTMLElement;
    expect(spinnerContainer).toHaveClass('custom-spinner');
  });
});