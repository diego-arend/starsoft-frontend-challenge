"use client";

import { OverlayProps } from "@/types/cartOverlay-types";
import styled from "styled-components";

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkest};
  z-index: 1000;
  transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  max-width: 100vw;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 650px;
  }
`;

// Modificar esta interface para usar $isOpen 
export const OverlayBackdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  height: 60px;
`;

export const BackButtonContainer = styled.div`
  margin-right: 16px;
`;

export const CartTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  flex: 1;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const CartContent = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden; 
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  /* Estilizando a scrollbar */
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

export const EmptyCartMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 20px;
`;

export const EmptyCartIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const EmptyCartText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

export const CartFooter = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TotalSection = styled.div`
  padding: 0 10px;
`;

export const TotalLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 10px 0;
  text-transform: uppercase;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TotalText = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const TotalValue = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;
