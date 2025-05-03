"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import ContainerImage from "@/components/ContainerImage";
import CryptoValue from "@/components/CryptoValue";
import CartAddAnimation from "@/components/CartAddAnimation";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks/useAnimation"; // Importando o novo hook
import {
  CardContainer,
  ImageWrapper,
  ImageContainer,
  ContentWrapper,
  ContentContainer,
  Title,
  Description,
  PriceContainer,
} from "./styles";
import { CardItemNFTProps } from "@/types/card-item-nft-types";
import { useAppSelector } from "@/hooks/useRedux";
import { selectCartItems } from "@/redux/slices/cartSlice";

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
  // Estado para controle do carrinho
  const [itemExistsInCart, setItemExistsInCart] = useState(false);
  const [wasNewlyAdded, setWasNewlyAdded] = useState(false);
  
  // Usando o hook de animação
  const { 
    isAnimating, 
    triggerAnimation, 
    onAnimationStart, 
    onAnimationComplete 
  } = useAnimation();
  
  // ID único para a animação (começa em 0 e é incrementado quando triggerAnimation é chamado)
  const [animationId, setAnimationId] = useState(0);
  
  // Obter itens do carrinho
  const cartItems = useAppSelector(selectCartItems);

  // Verificar se o item já está no carrinho
  useEffect(() => {
    const itemInCart = cartItems.some((item) => item.id === id);
    setItemExistsInCart(itemInCart);
  }, [cartItems, id]);

  // Lidar com o clique no botão de comprar
  const handleBuyClick = () => {
    if (onBuyClick && !isAnimating) {
      // Verificar se o item já existe no carrinho antes de adicionar
      const existsBeforeAdding = cartItems.some((item) => item.id === id);
      setWasNewlyAdded(!existsBeforeAdding);
      
      // Chamar a função para adicionar ao carrinho
      onBuyClick(id);
      
      // Inicia a animação e incrementa o ID
      triggerAnimation();
      setAnimationId(prev => prev + 1);
    }
  };

  return (
    <CardContainer
      className={className}
      $width={width}
      $height={height}
      as={motion.div}
    >
      <CartAddAnimation
        uniqueId={animationId}
        isNewItem={wasNewlyAdded}
        onAnimationStart={onAnimationStart}
        onAnimationComplete={onAnimationComplete}
        duration={1000}
      />

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

            <motion.div
              whileHover={{ scale: !isAnimating ? 1.02 : 1 }}
              whileTap={{ scale: !isAnimating ? 0.98 : 1 }}
              style={{ width: "100%" }}
            >
              <Button
                variant={itemExistsInCart ? "secondary" : "primary"}
                fullWidth
                onClick={handleBuyClick}
                disabled={isAnimating}
              >
                {itemExistsInCart ? "NO CARRINHO" : "COMPRAR"}
              </Button>
            </motion.div>
          </PriceContainer>
        </ContentContainer>
      </ContentWrapper>
    </CardContainer>
  );
};

export default CardItemNFT;
