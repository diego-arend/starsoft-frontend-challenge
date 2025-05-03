"use client";

import React from 'react';
import Button from '@/components/Button';
import ContainerImage from '@/components/ContainerImage';
import CryptoValue from '@/components/CryptoValue';
import {
  CardContainer,
  ImageWrapper,
  ImageContainer,
  ContentWrapper,
  ContentContainer,
  Title,
  Description,
  PriceContainer
} from './styles';

interface CardItemNFTProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  price: number | string;
  cryptoSymbol?: string;
  cryptoIconPath?: string;
  onBuyClick?: (id: string | number) => void;
  className?: string;
}

/**
 * CardItemNFT Component
 * 
 * Card displaying an NFT item with image, title, description, price and buy button
 */
const CardItemNFT: React.FC<CardItemNFTProps> = ({
  id,
  title,
  description,
  imageUrl,
  price,
  cryptoSymbol = "ETH",
  cryptoIconPath = "/eth_symbol.png",
  onBuyClick,
  className,
}) => {
  const handleBuyClick = () => {
    if (onBuyClick) {
      onBuyClick(id);
    }
  };

  return (
    <CardContainer className={className}>
      <ImageWrapper>
        <ImageContainer>
          <ContainerImage
            src={imageUrl}
            alt={title}
            width={217}
            height={217}
            objectFit="contain"
            fill={false}
            priority
          />
        </ImageContainer>
      </ImageWrapper>

      <ContentWrapper>
        <ContentContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>

          <PriceContainer>
            <CryptoValue
              value={price}
              symbol={cryptoSymbol}
              iconPath={cryptoIconPath}
            />

            <Button
              variant="primary"
              fullWidth
              onClick={handleBuyClick}
            >
              COMPRAR
            </Button>
          </PriceContainer>
        </ContentContainer>
      </ContentWrapper>
    </CardContainer>
  );
};

export default CardItemNFT;