"use client";

import React from "react";
import { StyledRow, StyledCol, StyledGridContainer } from "./styles";
import { ColProps, RowProps, GridContainerProps } from "@/types/grid-types";

// Define and export the gaps object
export const gaps = {
  sm: "0.5rem",   // 8px
  md: "1rem",     // 16px
  lg: "2.5rem",   // 40px
};

/**
 * GridContainer Component
 *
 * Container that wraps Row and Col components to ensure proper alignment and spacing
 */
export const GridContainer: React.FC<GridContainerProps> = ({
  children,
  className,
  maxWidth = "1200px",
  centered = true,
}) => {
  return (
    <StyledGridContainer 
      className={className} 
      $maxWidth={maxWidth} 
      $centered={centered}
    >
      {children}
    </StyledGridContainer>
  );
};

/**
 * Row Component
 *
 * Flexbox container that holds columns in a responsive grid system
 */
export const Row: React.FC<RowProps> = ({
  children,
  className,
  gap = "md",
}) => {
  return (
    <StyledRow className={className} gap={gap}>
      {children}
    </StyledRow>
  );
};

/**
 * Col Component
 *
 * Column component for the grid system with responsive breakpoints
 */
export const Col: React.FC<ColProps> = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  align = 'center', // centralizado por padrão
  justify = 'center', // centralizado por padrão
  padding = '8px', // padding padrão
}) => {
  return (
    <StyledCol 
      className={className} 
      xs={xs} 
      sm={sm} 
      md={md} 
      lg={lg}
      $align={align}
      $justify={justify}
      $padding={padding}
    >
      {children}
    </StyledCol>
  );
};
