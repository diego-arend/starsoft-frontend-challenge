"use client";

import styled from 'styled-components';
import { gaps } from './index';

// Helper function for column width calculation
export const getColWidth = (span?: number) => {
  if (!span) return;
  const width = (span / 12) * 100;
  return `flex: 0 0 ${width}%; max-width: ${width}%;`;
};

interface StyledRowProps {
  gap?: keyof typeof gaps;
}

interface StyledColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export const StyledRow = styled.div<StyledRowProps>`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + ${props => props.gap ? gaps[props.gap] : gaps.md});
  margin-left: -${props => props.gap ? gaps[props.gap] : gaps.md};
  margin-right: -${props => props.gap ? gaps[props.gap] : gaps.md};
  
  & > * {
    padding-left: ${props => props.gap ? gaps[props.gap] : gaps.md};
    padding-right: ${props => props.gap ? gaps[props.gap] : gaps.md};
    margin-bottom: ${props => props.gap ? gaps[props.gap] : gaps.md};
  }
`;

export const StyledCol = styled.div<StyledColProps>`
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