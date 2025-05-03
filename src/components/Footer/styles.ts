"use client";

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  height: 64px; 
`;

export const FooterContent = styled.div`
  max-width: var(--max-width);
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 24px;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 32px;
  }
`;

export const FooterText = styled.p`
  position: absolute;
  width: 386px;
  height: 26px;
  left: calc(50% - 386px/2);
  top: calc(50% - 26px/2);
  font-family: var(--font-ibm-plex-sans), sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px; /* identical to box height, or 186% */
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  color: rgba(255, 255, 255, 0.44);
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 280px;
    left: calc(50% - 280px/2);
    font-size: 12px;
  }
`;