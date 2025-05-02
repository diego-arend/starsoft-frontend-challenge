"use client";

import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

export type ButtonVariant = 'primary' | 'secondary';

/**
 * Button component props
 * @param {string} variant 
 * @param {string} width 
 * @param {string} height 
 * @param {boolean} fullWidth 
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} props 
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  width?: string;
  height?: string;
  fullWidth?: boolean;
}

/**
 * Button Component
 * 
 * Reusable styled button that follows the application's theme
 *
 */
const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  width,
  height,
  fullWidth = false,
  ...props 
}) => {
  return (
    <StyledButton 
      $variant={variant}
      $width={width}
      $height={height}
      $fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;