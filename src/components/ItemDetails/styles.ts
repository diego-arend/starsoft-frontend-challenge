"use client";

import styled from "styled-components";

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DescriptionContainer = styled.div`
  position: relative;
  height: 40px; /* Altura aproximada para 2 linhas */
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightGray};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  height: 100%;
`;

export const ExpandIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.darkest} 30%);
  padding-left: 15px;
  padding-right: 2px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(2px);
  }
`;

export const ExpandedDescription = styled.div`
  position: absolute;
  top: calc(1.8em + 8px); /* Posição abaixo do título */
  left: 0;
  right: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightGray};
  background: ${({ theme }) => theme.colors.darkest}; /* Fundo para melhor legibilidade */
  padding: 10px;
  border-radius: 8px;
  z-index: 10;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  line-height: 1.4;
  max-height: 200px;
  overflow-y: auto;
  
  /* Estilização da scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.darker};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }
`;
