"use client";

import React from 'react';
import { StyledContainer } from './styles';
import { ContainerProps } from '@/types/container-types';

/**
 * Container Component
 * 
 * Main container for page content with consistent styling and layout
 * 
 * @prop {React.ReactNode} children - Content to be rendered inside the container
 * @prop {string} className - Optional CSS class name for additional styling
 */
const Container: React.FC<ContainerProps> = ({ 
  children, 
  className,
  fullWidth = false,
  noPadding = false
}) => {
  return (
    <StyledContainer 
      className={className} 
      $fullWidth={fullWidth}
      $noPadding={noPadding}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;