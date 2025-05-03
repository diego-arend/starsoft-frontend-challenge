"use client";

import { StyledContainerProps } from '@/types/container-types';
import styled from 'styled-components';

export const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  max-width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'var(--max-width)'};
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; 
  min-height: calc(100vh - 164px);

  padding: ${({ $noPadding, theme }) => $noPadding ? '0' : `${theme.paddings.md} ${theme.paddings.md}`};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletSmall}) and (max-width: ${({ theme }) => theme.breakpoints.tablet}) and (orientation: portrait) {
    padding: ${({ $noPadding, theme }) => $noPadding ? '0' : `${theme.paddings.md} ${theme.paddings.md}`};
    min-height: calc(100vh - 144px); 
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletSmall}) and (max-width: ${({ theme }) => theme.breakpoints.desktop}) and (orientation: landscape) {
    padding: ${({ $noPadding, theme }) => $noPadding ? '0' : `${theme.paddings.lg} ${theme.paddings.md}`};
    min-height: calc(100vh - 154px);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ $noPadding, theme }) => $noPadding ? '0' : `${theme.paddings.xl} ${theme.paddings.lg}`};
  }
`;