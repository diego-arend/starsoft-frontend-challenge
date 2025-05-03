"use client";

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: ${({ theme }) => theme.paddings.md} 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  height: 64px; 
`;

export const FooterContent = styled.div`
  max-width: var(--max-width);
  width: 100%;
  padding: 0 ${({ theme }) => theme.paddings.md};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.paddings.md};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.paddings.lg};
  }
`;

export const FooterText = styled.p`
  position: absolute;
  width: 386px;
  height: 26px;
  left: calc(50% - 386px/2);
  top: calc(50% - 26px/2);
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.colors.whiteAlpha[40]};
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 280px;
    left: calc(50% - 280px/2);
    font-size: 12px;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletSmall}) and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 340px;
    left: calc(50% - 340px/2);
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}) {
    width: 280px;
    left: calc(50% - 280px/2);
    font-size: 12px;
  }
`;