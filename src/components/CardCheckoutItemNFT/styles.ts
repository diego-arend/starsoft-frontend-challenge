"use client";

import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 17px 30px;
  gap: 10px;
  width: 619px;
  height: 200px;
  background: ${({ theme }) => theme.colors.darker};
  border-radius: 8px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
    padding: 15px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 31px;
  width: 559px;
  height: 161px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    height: auto;
    gap: 20px;
  }
`;

export const ImageSection = styled.div`
  width: 161px;
  height: 161px;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 130px;
    height: 130px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 161px;
  height: 161px;
  left: 0px;
  top: 0px;
  background: ${({ theme }) => theme.colors.darkest};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 130px;
    height: 130px;
  }
`;

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0px;
  gap: 16px;
  width: 367px;
  height: 160px;
  flex: none;
  order: 1;
  flex-grow: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
    gap: 12px;
    padding: 0;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 100%;
  height: 42px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
  }
`;

export const ItemTitle = styled.h3`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const ItemDescription = styled.p`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.lightGray};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 11px;
  }
`;

export const ActionsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 135px;
  width: 100%;
  height: 49px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 20px;
    height: 40px;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
  gap: 10px;
  width: 115px;
  height: 49px;
  background: ${({ theme }) => theme.colors.darkest};
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100px;
    height: 40px;
    padding: 8px 6px;
  }
`;

export const QuantityButton = styled.button`
  width: 16px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const QuantityValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const DeleteButton = styled.button`
  width: 43px;
  height: 43px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  flex: none;
  order: 1;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover };
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 38px;
    height: 38px;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;