"use client";

import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 164px);

  padding: 24px 16px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 32px 24px;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 40px 32px;
  }
`;