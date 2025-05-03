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
import { CardItemNFTProps } from '@/types/card-item-nft-types';

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
  width = 345,
  height = 555,
}) => {
  const handleBuyClick = () => {
    if (onBuyClick) {
      onBuyClick(id);
    }
  };

  return (
    <CardContainer className={className} $width={width} $height={height}>
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