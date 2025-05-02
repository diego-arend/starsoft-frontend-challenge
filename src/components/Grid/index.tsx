"use client";

import React from 'react';
import styled from 'styled-components';

interface RowProps {
  children: React.ReactNode;
  className?: string;
  gap?: keyof typeof gaps;
}

interface ColProps {
  children: React.ReactNode;
  className?: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

// Possíveis valores para gap
const gaps = {
  small: '0.5rem',
  medium: '1rem',
  large: '1.5rem',
};

const Row = styled.div<RowProps & { gap?: keyof typeof gaps }>`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + ${props => props.gap ? gaps[props.gap] : gaps.medium});
  margin-left: -${props => props.gap ? gaps[props.gap] : gaps.medium};
  margin-right: -${props => props.gap ? gaps[props.gap] : gaps.medium};
  
  & > * {
    padding-left: ${props => props.gap ? gaps[props.gap] : gaps.medium};
    padding-right: ${props => props.gap ? gaps[props.gap] : gaps.medium};
    margin-bottom: ${props => props.gap ? gaps[props.gap] : gaps.medium};
  }
`;

const getColWidth = (span?: number) => {
  if (!span) return;
  const width = (span / 12) * 100;
  return `flex: 0 0 ${width}%; max-width: ${width}%;`;
};

const Col = styled.div<ColProps>`
  flex: 1 0 0%;
  
  ${({ xs }) => xs && `
    ${getColWidth(xs)}
  `}
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${({ sm }) => sm && getColWidth(sm)}
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${({ md }) => md && getColWidth(md)}
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${({ lg }) => lg && getColWidth(lg)}
  }
`;

export { Row, Col };