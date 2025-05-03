"use client";

import styled from 'styled-components';
import { gaps } from './index';
import { StyledColProps, StyledRowProps, StyledGridContainerProps } from '@/types/grid-types';

// Helper function for column width calculation
export const getColWidth = (span?: number) => {
  if (!span) return;
  const width = (span / 12) * 100;
  return `flex: 0 0 ${width}%; max-width: ${width}%;`;
};

export const StyledGridContainer = styled.div<StyledGridContainerProps>`
  width: 100%;
  max-width: ${props => props.$maxWidth || 'var(--max-width)'};
  margin: ${props => props.$centered ? '0 auto' : '0'};
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledRow = styled.div<StyledRowProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(100% + ${props => props.gap ? gaps[props.gap] : gaps.md});
  margin-left: -${props => props.gap ? gaps[props.gap] : gaps.md};
  margin-right: -${props => props.gap ? gaps[props.gap] : gaps.md};
  min-width: calc(${({ theme }) => theme.cardSizes.width} * 4 + ${props => props.gap ? gaps[props.gap] : gaps.md} * 3);
  
  & > * {
    padding-left: ${props => props.gap ? gaps[props.gap] : gaps.md};
    padding-right: ${props => props.gap ? gaps[props.gap] : gaps.md};
    margin-bottom: ${props => props.gap ? gaps[props.gap] : gaps.md};
  }
  
  /* Responsividade */
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: auto;
  }
`;

export const StyledCol = styled.div<StyledColProps>`
  flex: 1 0 0%;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: ${({ theme }) => theme.cardSizes.width};
  }
  

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletSmall}) and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: "320px"; 
  }
  
  ${({ xs }) => xs && `
    ${getColWidth(xs)}
  `}
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${({ sm }) => sm && getColWidth(sm)}
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletSmall}) {
    ${({ md }) => md && getColWidth(md)}
  }
  
  /* Específico para iPad Pro */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${({ md }) => md && getColWidth(md)}
    min-height: ${({ theme }) => `calc(${theme.cardSizes.height} - 50px)`};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${({ lg }) => lg && getColWidth(lg)}
  }

  display: flex;
  flex-direction: column;
  align-items: ${props => {
    switch (props.$align) {
      case 'start': return 'flex-start';
      case 'center': return 'center';
      case 'end': return 'flex-end';
      case 'stretch': return 'stretch';
      default: return 'center'; 
    }
  }};
  
  justify-content: ${props => {
    switch (props.$justify) {
      case 'start': return 'flex-start';
      case 'center': return 'center';
      case 'end': return 'flex-end';
      case 'space-between': return 'space-between';
      case 'space-around': return 'space-around';
      default: return 'center'; 
    }
  }};
  
  /* Permitindo padding personalizado */
  padding: ${props => props.$padding ? props.$padding : undefined};
  
  /* Garantindo espaço adequado para cards */
  min-height: ${({ theme }) => `calc(${theme.cardSizes.height} - 100px)`};
`;