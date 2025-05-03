"use client";

import styled from 'styled-components';

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Title = styled.h4`
  font-family: var(--font-poppins), sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.lightGray};
  margin: 0;
  
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Description = styled.p`
  font-family: var(--font-poppins), sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  
  flex: none;
  order: 1;
  flex-grow: 0;
  
  /* Adicionando ellipsis para texto muito longo */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;