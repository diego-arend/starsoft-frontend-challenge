import styled, { css } from 'styled-components';
import { ButtonVariant } from '@/components/Button';

interface StyledButtonProps {
  $variant?: ButtonVariant;
  $width?: string;
  $height?: string;
  $fullWidth?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borders.radius};
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  
  /* Configurable dimensions */
  width: ${({ $width, $fullWidth }) => ($fullWidth ? '100%' : $width || 'auto')};
  height: ${({ $height }) => $height || 'auto'};
  
  /* Style variants */
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'secondary':
        return css`
          background-color: ${theme.colors.gray};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: #454545;
          }
          
          &:active {
            background-color: #2d2d2d;
          }
        `;
      case 'primary':
      default:
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: #e67400;
          }
          
          &:active {
            background-color: #cc6700;
          }
        `;
    }
  }}
`;