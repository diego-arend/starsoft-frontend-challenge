"use client";

import { StyledCartCountProps } from "@/types/cart-count-types";
import styled from "styled-components";

export const StyledCartCount = styled.span<StyledCartCountProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: none;
  order: 1;
  flex-grow: 0;
  font-family: var(--font-ibm-plex-sans), sans-serif;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  width: auto;
  min-width: 10px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.24px;
  height: 22px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.26px;
    height: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.292683px;
    height: 26px;
  }
`;

export const CartCountContainer = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  
  @media (max-width: 480px) {
    top: -5px;
    right: -5px; 
    min-width: 16px;
    height: 16px;
    font-size: 10px;
  }
`;
