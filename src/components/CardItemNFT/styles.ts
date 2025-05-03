"use client";

import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 49px;
  width: 345px;
  height: 555px;
  background: ${({ theme }) => theme.colors.darkest};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borders.radius};
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const ImageWrapper = styled.div`
  /* img-1 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 31px;
  width: 345px;
  height: 258px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const ImageContainer = styled.div`
  /* img-2 */
  width: 289px;
  height: 258px;
  background: #22232C; /* Cor um pouco mais clara que o darkest para dar contraste */
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
  /* Frame 9 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  gap: 19px;
  width: 345px;
  height: auto;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const ContentContainer = styled.div`
  /* title+price */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 296px;
  height: auto;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Title = styled.h3`
  /* CryptoPunk #1 */
  margin: 0;
  padding: 0;
  width: auto;
  height: 25px;
  font-family: var(--font-poppins);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.white};
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Description = styled.p`
  /* Description */
  margin: 0;
  padding: 0;
  width: 296px;
  height: 12px;
  font-family: var(--font-poppins);
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
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
  /* Frame 70 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px 0px;
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
    font-family: var(--font-poppins);
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background: ${({ theme }) => {
        const color = theme.colors.primary;
        return `color-mix(in srgb, ${color}, white 20%)`;
      }};
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
