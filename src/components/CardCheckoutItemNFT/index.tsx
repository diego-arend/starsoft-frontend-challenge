"use client";

import React from "react";
import ContainerImage from "@/components/ContainerImage";
import CryptoValue from "@/components/CryptoValue";
import QuantitySelector from "@/components/QuantitySelector";
import CircularButton from "@/components/CircularButton";
import ItemDetails from "@/components/ItemDetails";
import {
  CardContainer,
  ContentWrapper,
  ImageSection,
  ImageContainer,
  DetailsSection,
  ActionsSection,
} from "./styles";
import { CardCheckoutItemNFTProps } from "@/types/cardCheckoutItemNFT-types";

/**
 * CardCheckoutItemNFT - Component for displaying NFT items in the checkout cart
 * 
 * This component renders an NFT item card in the checkout cart with image, details,
 * price information, quantity controls, and a remove button.
 * 
 */
const CardCheckoutItemNFT: React.FC<CardCheckoutItemNFTProps> = ({
  id,
  title,
  description,
  image,
  price,
  quantity,
  cryptoSymbol = "ETH",
  cryptoIconPath = "/eth_symbol.png",
  onQuantityChange,
  onRemove,
}) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(id, quantity + 1);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  const trashIcon = (
    <svg
      width="25.8"
      height="25.8"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6.5H5.5H23"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6.5V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V6.5M21.5 6.5V22C21.5 22.5304 21.2893 23.0391 20.9142 23.4142C20.5391 23.7893 20.0304 24 19.5 24H6.5C5.96957 24 5.46086 23.7893 5.08579 23.4142C4.71071 23.0391 4.5 22.5304 4.5 22V6.5H21.5Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11.5V19"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 11.5V19"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <CardContainer>
      <ContentWrapper>
        <ImageSection>
          <ImageContainer>
            <ContainerImage
              src={image}
              alt={title}
              width={139}
              height={139}
              objectFit="contain"
              priority
            />
          </ImageContainer>
        </ImageSection>

        <DetailsSection>
          <ItemDetails title={title} description={description} />
          
          <CryptoValue
            value={price}
            symbol={cryptoSymbol}
            iconPath={cryptoIconPath}
          />
          
          <ActionsSection>
            <QuantitySelector
              quantity={quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            
            <CircularButton 
              onClick={handleRemove}
              icon={trashIcon}
              color="primary"
              ariaLabel="Remove item"
            />
          </ActionsSection>
        </DetailsSection>
      </ContentWrapper>
    </CardContainer>
  );
};

export default CardCheckoutItemNFT;
