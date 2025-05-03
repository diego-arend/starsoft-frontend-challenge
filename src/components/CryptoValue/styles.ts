"use client";

import styled from 'styled-components';

export const CryptoContainer = styled.div`
  /* Garantir que o container use flexbox com direção de linha */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: auto; /* Permitir que o container se ajuste ao conteúdo */
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
  font-family: var(--font-poppins), sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 110%;
  color: #F0F0F0;
  white-space: nowrap; /* Evita quebra de linha no texto */
`;