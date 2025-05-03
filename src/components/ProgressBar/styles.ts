"use client";

import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1); 
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary}; 
  border-radius: 4px;
  transition: width 0.3s ease-in-out;
`;