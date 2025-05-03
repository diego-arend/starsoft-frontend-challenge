"use client";

import { ButtonProps } from '@/types/button-types';
import { StyledButton } from './styles';

/**
 * Button component props
 * @param {string} variant 
 * @param {string} width 
 * @param {string} height 
 * @param {boolean} fullWidth 
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} props 
 */


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