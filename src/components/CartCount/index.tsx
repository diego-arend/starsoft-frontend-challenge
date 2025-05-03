"use client";

import React from 'react';
import { StyledCartCount } from './styles';
import { CartCountProps } from '@/types/cart-count-types';

/**
 * CartCount Component
 * 
 * Displays a number value with specific typography and styling
 * Used primarily for showing the number of items in a cart
 */
const CartCount: React.FC<CartCountProps> = ({ count = 0, className }) => {
  const formattedCount = React.useMemo(() => {
    // If the number is greater than 99, show 99+
    if (count > 99) {
      return '99+';
    }
    
    return count.toString();
  }, [count]);

  return (
    <StyledCartCount 
      className={className} 
      data-count={count}
      $showBackground={count > 0} 
    >
      {formattedCount}
    </StyledCartCount>
  );
};

export default CartCount;