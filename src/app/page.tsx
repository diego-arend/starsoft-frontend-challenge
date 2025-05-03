'use client';

import React, { useState } from 'react';
import Container from "@/components/Container";
import CardItemNFT from "@/components/CardItemNFT";
import Pagination from "@/components/Pagination";
import { DEFAULT_CRYPTO_ICON, DEFAULT_CRYPTO_SYMBOL } from '@/constants/crypto-constants';
import LoadingSpinner from '@/components/LoadingSpinner';
import { GridContainer, Row, Col } from "@/components/Grid";
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/types/product-types';
import { useAppDispatch } from '@/hooks/useRedux';
import { addToCart } from '@/redux/slices/cartSlice';
import { ITEMS_PER_PAGE } from '@/constants/general-constants';
import { PaginatedResponse } from '@/types/paginate-types'; 

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const { 
    data: productsResponse,
    isLoading,
    isError,
    error
  } = useProducts({ 
    page: currentPage,
    limit: ITEMS_PER_PAGE
  });
  const typedResponse = productsResponse as PaginatedResponse<Product>;
  const displayItems = typedResponse?.data || [];
  const totalPages = typedResponse?.metadata?.pageCount || 1;
  const totalItems = typedResponse?.metadata?.totalCount || 0;
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBuyClick = (productId: number | string) => {
    const productToAdd = displayItems.find(item => item.id === productId);
    
    if (productToAdd) {
      dispatch(addToCart(productToAdd));
    }
  };

  return (
    <Container fullWidth noPadding>      
      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '2rem' }}>
          <LoadingSpinner 
            size="large" 
            text="Carregando itens"
          />
        </div>
      )}
      
      {isError && (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
          <p>{error?.message || 'Ocorreu um erro ao carregar os produtos.'}</p>
        </div>
      )}
      
      {!isLoading && !isError && displayItems.length > 0 && (
        <>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <GridContainer maxWidth="1600px" centered>
              <Row gap="lg">
                {displayItems.map((product: Product) => (
                  <Col 
                    xs={12}
                    sm={6}
                    md={6}
                    lg={3}
                    key={product.id} 
                    align="center"
                    justify="center"
                    padding="16px"
                  >
                    <CardItemNFT
                      id={product.id}
                      title={product.name}
                      description={product.description}
                      imageUrl={product.image}
                      price={product.price}
                      cryptoSymbol={product.crypto_symbol || DEFAULT_CRYPTO_SYMBOL}
                      cryptoIconPath={product.crypto_icon_path || DEFAULT_CRYPTO_ICON}
                      onBuyClick={handleBuyClick}
                    />
                  </Col>
                ))}
              </Row>
            </GridContainer>
          </div>
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalItems={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
          />
        </>
      )}
      
      {!isLoading && !isError && displayItems.length === 0 && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Nenhum produto disponível no momento.</p>
        </div>
      )}
    </Container>
  );
};

export default HomePage;
