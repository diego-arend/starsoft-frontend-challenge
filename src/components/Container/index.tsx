"use client";

import React from 'react';
import { StyledContainer } from './styles';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Container Component
 * 
 * Main container for page content with consistent styling and layout
 * 
 * @prop {React.ReactNode} children - Content to be rendered inside the container
 * @prop {string} className - Optional CSS class name for additional styling
 */
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;