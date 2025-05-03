"use client";

import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 11px;
  
  margin: 0 auto;
  width: 403px;
  height: 107px;
  
  /* Responsividade para telas menores */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    max-width: 403px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  
  & > button {
    width: 49%; /* Quase metade, com pequeno espaço entre eles */
  }
`;