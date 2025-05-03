import { useState, useCallback } from "react";

interface UseAnimationReturn {
  isAnimating: boolean;
  uniqueId: number;  // Adicionando à interface
  triggerAnimation: () => void;
  onAnimationStart: () => void;
  onAnimationComplete: () => void;
}

/**
* Hook for managing animation state
*
* Keeps track of animation state and provides callbacks to
* update the state at the start and end of the animation
*/
export const useAnimation = (): UseAnimationReturn => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [uniqueId, setUniqueId] = useState(0); 

  const triggerAnimation = useCallback(() => {
    if (!isAnimating) {
      setUniqueId((prevId) => prevId + 1); 
      setIsAnimating(true);
    }
  }, [isAnimating]);

  const onAnimationStart = useCallback(() => {
    setIsAnimating(true);
  }, []);

  const onAnimationComplete = useCallback(() => {
    setIsAnimating(false);
  }, []);

  return {
    isAnimating,
    uniqueId,  // Retornando o valor
    triggerAnimation,
    onAnimationStart,
    onAnimationComplete,
  };
};
