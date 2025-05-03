"use client";

import React from 'react';
import { SpinnerContainer, Spinner, SpinnerText } from './styles';
import { LoadingSpinnerProps } from '@/types/loading-spinner-types';

/**
 * LoadingSpinner Component
 * 
 * Displays a loading spinner animation with optional text
 */
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  text,
  className 
}) => {
  return (
    <SpinnerContainer className={className}>
      <Spinner $size={size} />
      {text && <SpinnerText>{text}</SpinnerText>}
    </SpinnerContainer>
  );
};

export default LoadingSpinner;