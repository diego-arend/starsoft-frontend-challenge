import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import QuantitySelector from '@/components/QuantitySelector';

describe('QuantitySelector Component', () => {
  const mockProps = {
    quantity: 2,
    onIncrease: jest.fn(),
    onDecrease: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with the correct quantity', () => {
    renderWithProviders(<QuantitySelector {...mockProps} />);
    
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should call onIncrease when plus button is clicked', () => {
    renderWithProviders(<QuantitySelector {...mockProps} />);
    
    // Find the increase button (the one with the plus icon)
    const increaseButton = screen.getAllByRole('button')[1];
    fireEvent.click(increaseButton);
    
    expect(mockProps.onIncrease).toHaveBeenCalledTimes(1);
  });

  it('should call onDecrease when minus button is clicked', () => {
    renderWithProviders(<QuantitySelector {...mockProps} />);
    
    // Find the decrease button (the one with the minus icon)
    const decreaseButton = screen.getAllByRole('button')[0];
    fireEvent.click(decreaseButton);
    
    expect(mockProps.onDecrease).toHaveBeenCalledTimes(1);
  });

  it('should disable the decrease button when quantity equals minQuantity', () => {
    renderWithProviders(
      <QuantitySelector 
        {...mockProps} 
        quantity={1} 
        minQuantity={1} 
      />
    );
    
    const decreaseButton = screen.getAllByRole('button')[0];
    expect(decreaseButton).toBeDisabled();
    
    // Click should not trigger onDecrease
    fireEvent.click(decreaseButton);
    expect(mockProps.onDecrease).not.toHaveBeenCalled();
  });

  it('should enable the decrease button when quantity is greater than minQuantity', () => {
    renderWithProviders(
      <QuantitySelector 
        {...mockProps} 
        quantity={2} 
        minQuantity={1} 
      />
    );
    
    const decreaseButton = screen.getAllByRole('button')[0];
    expect(decreaseButton).not.toBeDisabled();
  });

  it('should use the default minQuantity of 1 when not provided', () => {
    renderWithProviders(
      <QuantitySelector 
        {...mockProps} 
        quantity={1}
        // minQuantity not provided, should default to 1
      />
    );
    
    const decreaseButton = screen.getAllByRole('button')[0];
    expect(decreaseButton).toBeDisabled();
  });
});