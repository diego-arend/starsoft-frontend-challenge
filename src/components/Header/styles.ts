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
  border-bottom: 1px solid ${({ theme }) => theme.colors.whiteAlpha[20]};
  height: 70px;
  padding: 0 41px; 
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndices.fixed};
  box-sizing: border-box; 
  
  @supports (-webkit-touch-callout: none) {
    @media (max-width: 480px) {
      height: 70px !important;
      position: sticky !important;
      -webkit-position: sticky !important;
      top: 0 !important;
      padding: 0 41px !important;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0 41px !important;
    position: fixed !important;
    height: 70px !important;
    min-height: 70px !important;
    max-height: 70px !important;
    transform: translate3d(0, 0, 0) !important; 
    -webkit-transform: translate3d(0, 0, 0) !important;
    transition: none !important;
    -webkit-transition: none !important;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 80px;
    padding: 0 41px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletSmall}) and (max-width: ${({ theme }) => theme.breakpoints.tablet}) and (orientation: portrait) {
    height: 80px;
    padding: 0 41px;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletSmall}) and (max-width: ${({ theme }) => theme.breakpoints.desktop}) and (orientation: landscape) {
    height: 90px;
    padding: 0 41px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 100px;
    padding: 0 41px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin: 0; 
  height: 100%;
  box-sizing: border-box; 
  transition: none !important;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;
  padding: 0;
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
  padding: 0;
  margin: 0;

  @media (max-width: 480px) {
    padding: 0; 
    margin: 0; 
  }
`;

export const CartIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  position: relative;
  padding: 0;
  margin: 0;
  
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
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 9px;
  }
`;
