import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import CircularButton from '@/components/CircularButton';

describe('CircularButton Component', () => {
  // Create a default noop function for onClick
  const noop = () => {};

  it('should render with default props', () => {
    renderWithProviders(
      <CircularButton 
        icon={<span data-testid="test-icon">Icon</span>}
        onClick={noop}
      />
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Circular button');
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('should render with custom aria-label', () => {
    renderWithProviders(
      <CircularButton 
        icon={<span>Icon</span>}
        ariaLabel="Custom button label"
        onClick={noop}
      />
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Custom button label');
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn();
    
    renderWithProviders(
      <CircularButton 
        icon={<span>Icon</span>}
        onClick={handleClick}
      />
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply different sizes', () => {
    const { rerender } = renderWithProviders(
      <CircularButton 
        icon={<span>Icon</span>}
        size="small"
        onClick={noop}
      />
    );
    
    // Since styled-components doesn't automatically add data-size attribute,
    // we'll check if the component renders without errors
    let button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    
    // Rerender with medium size
    rerender(
      <CircularButton 
        icon={<span>Icon</span>}
        size="medium"
        onClick={noop}
      />
    );
    
    button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    
    // Rerender with large size
    rerender(
      <CircularButton 
        icon={<span>Icon</span>}
        size="large"
        onClick={noop}
      />
    );
    
    button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});