import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  width?: string;
  height?: string;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface StyledButtonProps {
  $variant?: ButtonVariant;
  $width?: string;
  $height?: string;
  $fullWidth?: boolean;
}
