import React from 'react';
import { screen, act, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import CartAddAnimation from '@/components/CartAddAnimation';
import FramerMotionMock from '@/__tests__/mocks/framer-motion.mock';

// Setup Framer Motion mock
FramerMotionMock.setupMock();

// Mock timers
jest.useFakeTimers();

describe('CartAddAnimation Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not render anything initially', () => {
    renderWithProviders(
      <CartAddAnimation
        uniqueId={0}
        isNewItem={true}
      />
    );
    
    // Animation should not be visible initially
    expect(screen.queryByText('Item adicionado ao carrinho!')).not.toBeInTheDocument();
  });

  it('should show animation for new item when uniqueId changes', () => {
    const { rerender } = renderWithProviders(
      <CartAddAnimation
        uniqueId={0}
        isNewItem={true}
      />
    );
    
    // Change uniqueId to trigger animation
    rerender(
      <CartAddAnimation
        uniqueId={1}
        isNewItem={true}
      />
    );
    
    // Animation should be visible
    expect(screen.getByText('Item adicionado ao carrinho!')).toBeInTheDocument();
  });

  it('should show animation for existing item', () => {
    const { rerender } = renderWithProviders(
      <CartAddAnimation
        uniqueId={0}
        isNewItem={false}
      />
    );
    
    // Change uniqueId to trigger animation
    rerender(
      <CartAddAnimation
        uniqueId={1}
        isNewItem={false}
      />
    );
    
    // Should show message for existing item
    expect(screen.getByText('Item já está no carrinho!')).toBeInTheDocument();
  });

  it('should hide animation after duration', () => {
    const { rerender } = renderWithProviders(
      <CartAddAnimation
        uniqueId={0}
        isNewItem={true}
        duration={500}
      />
    );
    
    // Change uniqueId to trigger animation
    rerender(
      <CartAddAnimation
        uniqueId={1}
        isNewItem={true}
        duration={500}
      />
    );
    
    // Animation should be initially visible
    expect(screen.getByText('Item adicionado ao carrinho!')).toBeInTheDocument();
    
    // Advance timer beyond duration
    act(() => {
      jest.advanceTimersByTime(600);
    });
    
    // Animation should disappear after duration
    expect(screen.queryByText('Item adicionado ao carrinho!')).not.toBeInTheDocument();
  });

  it('should call onAnimationStart when animation begins', () => {
    const onStartMock = jest.fn();
    const { rerender } = renderWithProviders(
      <CartAddAnimation
        uniqueId={0}
        isNewItem={true}
        onAnimationStart={onStartMock}
      />
    );
    
    // Should not be called initially
    expect(onStartMock).not.toHaveBeenCalled();
    
    // Change uniqueId to trigger animation
    rerender(
      <CartAddAnimation
        uniqueId={1}
        isNewItem={true}
        onAnimationStart={onStartMock}
      />
    );
    
    // onAnimationStart should be called when animation starts
    expect(onStartMock).toHaveBeenCalledTimes(1);
  });

  it('should call onAnimationComplete when animation ends', () => {
    const onCompleteMock = jest.fn();
    const { rerender } = renderWithProviders(
      <CartAddAnimation
        uniqueId={0}
        isNewItem={true}
        duration={500}
        onAnimationComplete={onCompleteMock}
      />
    );
    
    // Change uniqueId to trigger animation
    rerender(
      <CartAddAnimation
        uniqueId={1}
        isNewItem={true}
        duration={500}
        onAnimationComplete={onCompleteMock}
      />
    );
    
    // Advance timer beyond duration
    act(() => {
      jest.advanceTimersByTime(600);
    });
    
    // Simulate AnimatePresence callback
    const animatePresence = screen.getByTestId('animate-presence-mock');
    if (animatePresence && animatePresence.getAttribute('data-exit-complete') === 'true') {
      act(() => {
        fireEvent.click(animatePresence);
      });
    }
    
    // onAnimationComplete should be called when animation ends
    expect(onCompleteMock).toHaveBeenCalledTimes(1);
  });
});