"use client";

import { StyledButtonProps } from '@/types/circularButton-types';
import styled from 'styled-components';

const sizeMap = {
  small: {
    size: '32px',
    iconSize: '16px'
  },
  medium: {
    size: '40px',
    iconSize: '20px'
  },
  large: {
    size: '48px',
    iconSize: '24px'
  }
};

function darkenColor(color: string): string {
  if (color.startsWith('#')) {
    return color; 
  }
  return color;
}

export const StyledCircularButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => sizeMap[props.$size].size};
  height: ${props => sizeMap[props.$size].size};
  border-radius: 50%;
  background-color: ${props => props.$backgroundColor};
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
  padding: 0;
  
  svg {
    color: white;
    width: ${props => sizeMap[props.$size].iconSize};
    height: ${props => sizeMap[props.$size].iconSize};
  }
  
  &:hover {
    transform: scale(1.05);
    background-color: ${props => darkenColor(props.$backgroundColor)};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;