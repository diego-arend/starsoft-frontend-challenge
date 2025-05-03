"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin: 0;
  background: ${({ theme }) => theme.colors.dark};
  border-bottom: 1px solid rgba(255, 255, 255, 0.21);
  height: 70px;
  padding: 0 16px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; 
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 80px;
    padding: 0 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 100px;
    padding: 0 32px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1728px; /* Largura máxima do conteúdo */
  margin: 0 auto;
  height: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 80px;
  height: 30px;
    
  img {
    width: 80px;
    height: 30px;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 90px;
      height: 34px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 101px;
      height: 38px;
    }
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 6px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 10px;
  }
`;

export const CartIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 25px;
  
  img {
    width: 25px;
    height: 25px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 28px;
      height: 28px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 33px;
      height: 33px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 7px;
    width: 45px;
    height: 28px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 9px;
    width: 54px;
    height: 33px;
  }
`;
