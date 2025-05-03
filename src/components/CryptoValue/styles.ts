"use client";

import styled from 'styled-components';

export const CryptoContainer = styled.div`
  /* Garantir que o container use flexbox com direção de linha */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 10px;
  width: auto; 
  height: 29px;
`;

export const CryptoIcon = styled.div`
  /* Manter o ícone dentro do fluxo inline */
  width: 29px;
  height: 29px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CryptoText = styled.span`
  /* Estilos do texto */
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  line-height: 110%;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap; /* Evita quebra de linha no texto */
`;