"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import ContainerImage from "@/components/ContainerImage";
import CryptoValue from "@/components/CryptoValue";
import CartAddAnimation from "@/components/CartAddAnimation";
import ItemDetails from "@/components/ItemDetails";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks/useAnimation";
import {
  CardContainer,
  ImageWrapper,
  ImageContainer,
  ContentWrapper,
  ContentContainer,
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
  const [itemExistsInCart, setItemExistsInCart] = useState(false);
  const [wasNewlyAdded, setWasNewlyAdded] = useState(false);
  const {
    isAnimating,
    triggerAnimation,
    onAnimationStart,
    onAnimationComplete,
  } = useAnimation();
  const [animationId, setAnimationId] = useState(0);
  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    const itemInCart = cartItems.some((item) => item.id === id);
    setItemExistsInCart(itemInCart);
  }, [cartItems, id]);

  const handleBuyClick = () => {
    if (onBuyClick && !isAnimating) {
      // Verificar se o item já existe no carrinho antes de adicionar
      const existsBeforeAdding = cartItems.some((item) => item.id === id);
      
      // Se o item já existe no carrinho, não fazemos nada além da animação
      if (existsBeforeAdding) {
        // Apenas executamos a animação para feedback visual
        setWasNewlyAdded(false);
        triggerAnimation();
        setAnimationId((prev) => prev + 1);
        return; // Não chamar onBuyClick para evitar adicionar novamente
      } else {
        // Item não está no carrinho, podemos adicioná-lo
        setWasNewlyAdded(true);
        onBuyClick(id);
        
        // Inicia a animação e incrementa o ID
        triggerAnimation();
        setAnimationId((prev) => prev + 1);
      }
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
          <ItemDetails title={title} description={description} />

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
