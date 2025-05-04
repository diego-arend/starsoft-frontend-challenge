"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ItemInfoContainer, 
  Title, 
  DescriptionContainer,
  Description,
  ExpandIcon,
  ExpandedDescription
} from './styles';

interface ItemDetailsProps {
  title: string;
  description: string;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 600); // 600ms de delay antes de expandir
    
    setHoverTimer(timer);
  };

  const handleMouseLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
    setIsExpanded(false);
  };

  // Função para expandir imediatamente ao clicar no ícone
  const handleExpandClick = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
    setIsExpanded(true);
  };

  return (
    <ItemInfoContainer 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Title>{title}</Title>
      
      <DescriptionContainer>
        <Description>
          {description}
        </Description>
        
        {/* Ícone de expansão */}
        {!isExpanded && (
          <ExpandIcon onClick={handleExpandClick}>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7 10L12 15L17 10" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </ExpandIcon>
        )}
      </DescriptionContainer>
      
      {/* Descrição expandida animada */}
      <AnimatePresence>
        {isExpanded && (
          <ExpandedDescription
            as={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {description}
          </ExpandedDescription>
        )}
      </AnimatePresence>
    </ItemInfoContainer>
  );
};

export default ItemDetails;