"use client";

import styled, { keyframes } from 'styled-components';
import { SpinnerProps } from '@/types/loading-spinner-types';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Spinner = styled.div<SpinnerProps>`
  width: ${props => {
    switch (props.$size) {
      case 'small': return '20px';
      case 'large': return '50px';
      case 'medium':
      default: return '35px';
    }
  }};
  
  height: ${props => {
    switch (props.$size) {
      case 'small': return '20px';
      case 'large': return '50px';
      case 'medium':
      default: return '35px';
    }
  }};
  
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  animation: ${spin} 1s linear infinite;
`;

export const SpinnerText = styled.p`
  font-family: var(--font-ibm-plex-sans), sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin: 0;
`;