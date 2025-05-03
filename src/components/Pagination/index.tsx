"use client";

import React from 'react';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import { PaginationProps } from '@/types/pagination-types';
import { 
  PaginationContainer, 
  PaginationWrapper,
  ButtonContainer
} from './styles';

/**
 * Pagination Component
 * 
 * Displays pagination controls for navigating between pages
 */
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  totalItems = 0,
  itemsPerPage = 8
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const itemsViewed = Math.min((currentPage - 1) * itemsPerPage + itemsPerPage, totalItems);
  
  const progressPercentage = totalItems > 0
    ? Math.min((itemsViewed / totalItems) * 100, 100)
    : Math.min((currentPage / totalPages) * 100, 100);

  return (
    <PaginationWrapper className={className}>
      <PaginationContainer>
        <ProgressBar progress={progressPercentage} />    
        <ButtonContainer>
          <Button
            variant="secondary"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            fullWidth
          >
            Anterior
          </Button>
          
          <Button
            variant="primary"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            fullWidth
          >
            Carregar mais
          </Button>
        </ButtonContainer>
      </PaginationContainer>
    </PaginationWrapper>
  );
};

export default Pagination;