"use client";

import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.paddings.md}`};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `0 ${theme.paddings.lg}`};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => `0 ${theme.paddings.xl}`};
  }
`;

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;