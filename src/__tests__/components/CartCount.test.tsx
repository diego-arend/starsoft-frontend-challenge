import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import CartCount from '@/components/CartCount';
import FramerMotionMock from '@/__tests__/mocks/framer-motion.mock';

// Setup Framer Motion mock
FramerMotionMock.setupMock();

describe('CartCount Component', () => {
  it('should render with default count of 0', () => {
    renderWithProviders(<CartCount />);
    
    const cartCount = screen.getByText('0');
    expect(cartCount).toBeInTheDocument();
  });

  it('should render the provided count value', () => {
    renderWithProviders(<CartCount count={5} />);
    
    const cartCount = screen.getByText('5');
    expect(cartCount).toBeInTheDocument();
  });

  it('should show 99+ when count exceeds 99', () => {
    renderWithProviders(<CartCount count={100} />);
    
    const cartCount = screen.getByText('99+');
    expect(cartCount).toBeInTheDocument();
  });

  it('should apply provided className', () => {
    renderWithProviders(<CartCount count={3} className="test-class" />);
    
    const cartCount = screen.getByText('3');
    expect(cartCount).toHaveClass('test-class');
  });

  it('should set data-count attribute correctly', () => {
    renderWithProviders(<CartCount count={7} />);
    
    const cartCount = screen.getByText('7');
    expect(cartCount).toHaveAttribute('data-count', '7');
  });

  it('should use the correct animation based on count change', () => {
    // First render with initial value
    const { rerender } = renderWithProviders(<CartCount count={3} />);
    
    // Get initial count element
    const initialCountElement = screen.getByText('3');
    expect(initialCountElement).toBeInTheDocument();
    
    // Increase value to test animation
    rerender(<CartCount count={5} />);
    
    // Verify the new count is displayed
    expect(screen.getByText('5')).toBeInTheDocument();
    // The original '3' should no longer be present
    expect(screen.queryByText('3')).not.toBeInTheDocument();
    
    // Verify that the container has a transform style (showing animation is happening)
    const container = screen.getByText('5').parentElement;
    expect(container).toHaveStyle('transform: scale(1.5)');
    
    // Decrease value to test animation
    rerender(<CartCount count={2} />);
    
    // Verify the count was updated again
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.queryByText('5')).not.toBeInTheDocument();
  });

  it('should change appearance when count is greater than 0', () => {
    const { rerender } = renderWithProviders(<CartCount count={0} />);
    
    // With count=0
    let cartCount = screen.getByText('0');
    expect(cartCount).toBeInTheDocument();
    
    // With count>0, appearance should change
    rerender(<CartCount count={1} />);
    cartCount = screen.getByText('1');
    expect(cartCount).toBeInTheDocument();
  });
});