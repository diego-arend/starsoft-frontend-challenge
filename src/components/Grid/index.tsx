"use client";

import React from "react";
import { StyledRow, StyledCol } from "./styles";

export type GapSize = "sm" | "md" | "lg";

// Define and export the gaps object
export const gaps = {
  sm: "0.5rem",  
  md: "1rem",   
  lg: "1.5rem",  
};

interface RowProps {
  children: React.ReactNode;
  className?: string;
  gap?: GapSize;
}

interface ColProps {
  children: React.ReactNode;
  className?: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

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
}) => {
  return (
    <StyledCol className={className} xs={xs} sm={sm} md={md} lg={lg}>
      {children}
    </StyledCol>
  );
};
