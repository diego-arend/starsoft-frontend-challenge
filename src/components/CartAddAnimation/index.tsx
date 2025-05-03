"use client";

import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AnimationContainer, AnimationIconContainer, AnimationText } from './styles';

export interface CartAddAnimationProps {
  uniqueId: number;  // Identificador único para forçar re-renders
  isNewItem: boolean;
  onAnimationStart?: () => void;  
  onAnimationComplete?: () => void;  
  duration?: number;  
}

/**
 * CartAddAnimation Component
 * 
 * Animation overlay that displays when an item is added to cart.
 * Handles its own animation state internally.
 */
const CartAddAnimation: React.FC<CartAddAnimationProps> = ({
  uniqueId,
  isNewItem,
  onAnimationStart,
  onAnimationComplete,
  duration = 1000  
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const previousIdRef = useRef(uniqueId);
  
  useEffect(() => {
    // Se o uniqueId mudou, inicia uma nova animação
    if (uniqueId !== previousIdRef.current) {
      setIsVisible(true);
      previousIdRef.current = uniqueId;
      
      if (onAnimationStart) {
        onAnimationStart();
      }
      
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [uniqueId, duration, onAnimationStart]);

  const handleExitComplete = () => {
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <AnimationContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
        >
          {/* Conteúdo da animação não mudou */}
          <AnimationIconContainer
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 0.1, 
              type: "spring", 
              stiffness: 300,
              damping: 20
            }}
            $isNewItem={isNewItem}
          >
            {isNewItem ? (
              <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 17.2L3 10.2L0.6 12.6L10 22L30 2L27.6 -0.400002L10 17.2Z" fill="white"/>
              </svg>
            ) : (
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C11.45 6 11 6.45 11 7V13C11 13.55 11.45 14 12 14C12.55 14 13 13.55 13 13V7C13 6.45 12.55 6 12 6ZM12 16C11.45 16 11 16.45 11 17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17C13 16.45 12.55 16 12 16Z" fill="white"/>
              </svg>
            )}
          </AnimationIconContainer>
          
          <AnimationText
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {isNewItem 
              ? "Item adicionado ao carrinho!" 
              : "Item já está no carrinho!"}
          </AnimationText>
        </AnimationContainer>
      )}
    </AnimatePresence>
  );
};

export default CartAddAnimation;
