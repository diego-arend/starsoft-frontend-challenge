export interface CartAddAnimationProps {
    uniqueId: number;  // Identificador único para forçar re-renders
    isNewItem: boolean;
    onAnimationStart?: () => void;  
    onAnimationComplete?: () => void;  
    duration?: number;  
  }