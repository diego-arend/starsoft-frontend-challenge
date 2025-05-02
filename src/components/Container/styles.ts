"use client";

import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.paddings.md}`};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `0 ${theme.paddings.lg}`};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => `0 ${theme.paddings.xl}`};
  }
`;