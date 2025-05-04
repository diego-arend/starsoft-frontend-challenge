"use client";

import styled from "styled-components";

export const QuantityControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
  gap: 10px;
  width: 115px;
  height: 49px;
  background: ${({ theme }) => theme.colors.darkest};
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "768px"}) {
    width: 100px;
    height: 40px;
    padding: 8px 6px;
  }
`;

export const QuantityButton = styled.button`
  width: 16px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: opacity ${({ theme }) => theme.transitions?.fast || "0.2s"} ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
  }

  &:focus {
    outline: none;

    box-shadow: 0 0 0 1px
      ${({ theme }) =>
        theme.colors?.whiteAlpha?.[20] ||
        theme.colors?.whiteAlpha?.[40] ||
        "rgba(255, 255, 255, 0.3)"};
  }
`;

export const QuantityValue = styled.span`
  font-family: ${({ theme }) =>
    theme.fonts?.family?.secondary || "'Inter', sans-serif"};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts?.weights?.semibold};
  font-size: ${({ theme }) => theme.fonts?.sizes?.sm};
  line-height: ${({ theme }) => theme.fonts?.lineHeights?.normal};
  text-align: center;
  color: ${({ theme }) => theme.colors?.white};
  min-width: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fonts?.sizes?.xs};
  }
`;
