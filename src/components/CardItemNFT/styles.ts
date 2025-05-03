"use client";

import styled from 'styled-components';
import { CardContainerProps } from '@/types/card-item-nft-types';

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 49px;
  width: ${({ theme }) => theme.cardSizes.width};
  height: ${({ theme }) => theme.cardSizes.height};
  min-width: ${({ theme }) => theme.cardSizes.width};
  background: ${({ theme }) => theme.colors.darkest};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borders.radius};
  flex: none;
  order: 1;
  flex-grow: 0;
  transition: ${({ theme }) => theme.transitions.default};
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletSmall}) and (max-width: ${({ theme }) => theme.breakpoints.tablet}) and (orientation: portrait) {
    width: 320px;
    min-width: 320px;
    height: 520px;
    gap: 30px; 
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletSmall}) and (max-width: ${({ theme }) => theme.breakpoints.tablet}) and (orientation: landscape) {
    width: 330px;
    min-width: 330px;
    height: 535px;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 335px;
    min-width: 335px;
    height: 545px;
  }
  
  @media (max-width: 375px) {
    width: ${({ theme }) => theme.cardSizes.mobileWidth};
    min-width: ${({ theme }) => theme.cardSizes.mobileWidth};
    height: ${({ theme }) => theme.cardSizes.mobileHeight};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 258px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const ImageContainer = styled.div`
  width: calc(100% - 40px);
  height: 220px;
  background: ${({ theme }) => theme.colors.darker};
  border-radius: ${({ theme }) => theme.borders.radius};
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  gap: 19px;
  width: 100%;
  height: auto;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 ${({ theme }) => theme.paddings.md};
  gap: 15px;
  width: 100%;
  height: auto;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  width: auto;
  height: 25px;
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: ${({ theme }) => theme.fonts.lineHeights.normal};
  color: ${({ theme }) => theme.colors.white};
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Description = styled.p`
  margin: 0;
  padding: 0;
  width: 296px;
  height: 12px;
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  line-height: 12px;
  color: ${({ theme }) => theme.colors.lightGray};
  flex: none;
  order: 1;
  flex-grow: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.paddings.md} 0 0;
  gap: 24px;
  width: 296px;
  height: auto;
  flex: none;
  order: 2;
  flex-grow: 0;
  
  /* Ajuste o botão para ocupar toda a largura */
  button {
    width: 100%;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 26px;
    gap: 10px;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 50px 100px -20px rgba(50, 50, 93, 0.25);
    border-radius: ${({ theme }) => theme.borders.radius};
    font-family: ${({ theme }) => theme.fonts.family.primary};
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    line-height: ${({ theme }) => theme.fonts.lineHeights.normal};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
    
    &:active {
      transform: translateY(1px);
    }
  }
`;

export const ResponsiveCardContainer = styled(CardContainer)`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 345px;
  }
`;

export const ResponsiveImageWrapper = styled(ImageWrapper)`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const ResponsiveImageContainer = styled(ImageContainer)`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 40px);
  }
`;
