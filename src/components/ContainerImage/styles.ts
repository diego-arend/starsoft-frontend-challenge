"use client";

import styled, { keyframes } from 'styled-components';
import NextImage from 'next/image';

interface ImageProps {
  $fill?: boolean;
  $objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  width?: number;
  height?: number;
  src?: string; 
}

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const ImageContainer = styled.div<ImageProps>`
  position: relative;
  overflow: hidden;
  width: ${props => props.$fill ? '100%' : 'auto'};
  height: ${props => props.$fill ? '100%' : 'auto'};
  border-radius: ${({ theme }) => theme.borders.radius};
`;

export const StyledImage = styled(NextImage)<ImageProps>`
  object-fit: ${props => props.$objectFit || 'cover'};
  transition: opacity 0.3s ease;
  max-height: 100%;
  max-width: 100%;
`;

export const FallbackImage = styled.div<ImageProps>`
  width: ${props => props.$fill ? '100%' : `${props.width}px`};
  height: ${props => props.$fill ? '100%' : `${props.height}px`};
  background-image: ${props => `url(${props.src})`};
  background-size: ${props => props.$objectFit || 'cover'};
  background-position: center;
  background-repeat: no-repeat;
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.colors.gray} 25%, 
    ${({ theme }) => `${theme.colors.darkest}80`} 50%, 
    ${({ theme }) => theme.colors.gray} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;