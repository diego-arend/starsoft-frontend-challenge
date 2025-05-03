"use client";

import React from 'react';
import { DataContainer, Title, Description } from './styles';
import { CryptoDataProps } from '@/types/crypto-data-types';

/**
 * CryptoData Component
 * 
 * Displays structured crypto information with a title and description
 * Useful for showing details like market cap, volume, or other metrics
 */
const CryptoData: React.FC<CryptoDataProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <DataContainer className={className}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </DataContainer>
  );
};

export default CryptoData;