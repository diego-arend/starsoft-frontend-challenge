import { ReactNode } from "react";

export interface StyledButtonProps {
    $backgroundColor: string;
    $size: 'small' | 'medium' | 'large';
  }
  
  export interface CircularButtonProps {
    onClick: () => void;
    icon: ReactNode;
    color?: "primary" | "secondary" | "danger" | "dark"; 
    size?: "small" | "medium" | "large";
    ariaLabel?: string;
  }