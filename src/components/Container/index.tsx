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
 * A responsive container that centers content and provides consistent padding
 * based on the theme's breakpoints.
 */
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;