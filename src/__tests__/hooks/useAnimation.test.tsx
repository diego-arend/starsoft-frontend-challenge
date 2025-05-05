import { renderHook, act } from '@testing-library/react';
import { useAnimation } from '@/hooks/useAnimation';

describe('useAnimation Hook', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useAnimation());
    
    expect(result.current.isAnimating).toBe(false);
    expect(result.current.uniqueId).toBe(0);
  });

  it('should trigger animation and increment uniqueId', () => {
    const { result } = renderHook(() => useAnimation());
    
    act(() => {
      result.current.triggerAnimation();
    });
    
    expect(result.current.isAnimating).toBe(true);
    expect(result.current.uniqueId).toBe(1);
  });

  it('should not increment uniqueId if already animating', () => {
    const { result } = renderHook(() => useAnimation());
    
    // First trigger
    act(() => {
      result.current.triggerAnimation();
    });
    
    // Second trigger while still animating
    act(() => {
      result.current.triggerAnimation();
    });
    
    expect(result.current.uniqueId).toBe(1); // Should still be 1, not 2
    expect(result.current.isAnimating).toBe(true);
  });

  it('should handle animation lifecycle correctly', () => {
    const { result } = renderHook(() => useAnimation());
    
    // Start animation
    act(() => {
      result.current.onAnimationStart();
    });
    expect(result.current.isAnimating).toBe(true);
    
    // Complete animation
    act(() => {
      result.current.onAnimationComplete();
    });
    expect(result.current.isAnimating).toBe(false);
  });

  it('should allow triggering animation again after completion', () => {
    const { result } = renderHook(() => useAnimation());
    
    // First animation cycle
    act(() => {
      result.current.triggerAnimation();
    });
    expect(result.current.uniqueId).toBe(1);
    
    act(() => {
      result.current.onAnimationComplete();
    });
    
    // Second animation cycle
    act(() => {
      result.current.triggerAnimation();
    });
    
    expect(result.current.isAnimating).toBe(true);
    expect(result.current.uniqueId).toBe(2);
  });
});