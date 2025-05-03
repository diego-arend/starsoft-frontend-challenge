"use client";

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledCartCount } from './styles';
import { CartCountProps } from '@/types/cart-count-types';

/**
 * CartCount Component
 * 
 * Displays a number value with specific typography and styling
 * Used primarily for showing the number of items in a cart
 */
const CartCount: React.FC<CartCountProps> = ({ count = 0, className }) => {
  const prevCountRef = useRef(count);
  const hasIncreased = count > prevCountRef.current;
  
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  
  const formattedCount = React.useMemo(() => {
    // If the number is greater than 99, show 99+
    if (count > 99) {
      return '99+';
    }
    
    return count.toString();
  }, [count]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={formattedCount}
        initial={hasIncreased ? { scale: 1.5 } : { scale: 1 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 15
        }}
      >
        <StyledCartCount 
          className={className} 
          data-count={count}
          $showBackground={count > 0}
        >
          {formattedCount}
        </StyledCartCount>
      </motion.div>
    </AnimatePresence>
  );
};

export default CartCount;