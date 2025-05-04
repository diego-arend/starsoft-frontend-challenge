"use client";

import React from 'react';
import { 
  QuantityControl, 
  QuantityButton, 
  QuantityValue 
} from './styles';
import { QuantitySelectorProps } from '@/types/quantitySelector-types';

/**
 * QuantitySelector Component
 * 
 * A reusable component for incrementing and decrementing quantity values.
 * Used in shopping carts, product detail pages, and anywhere quantity selection is needed.
 * 
 */
const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  minQuantity = 1
}) => {
  return (
    <QuantityControl>
      <QuantityButton 
        onClick={onDecrease}
        disabled={quantity <= minQuantity}
      >
        <svg
          width="16"
          height="2"
          viewBox="0 0 16 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </QuantityButton>

      <QuantityValue>{quantity}</QuantityValue>

      <QuantityButton onClick={onIncrease}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1V15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 8H15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </QuantityButton>
    </QuantityControl>
  );
};

export default QuantitySelector;