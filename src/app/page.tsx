'use client';

import React, { useState } from 'react';
import Container from "@/components/Container";
import CardItemNFT from "@/components/CardItemNFT";
import { useProducts } from '@/hooks/useProducts';
import Pagination from "@/components/Pagination";
import { Product } from '@/types/product-types';
import { DEFAULT_CRYPTO_ICON, DEFAULT_CRYPTO_SYMBOL } from '@/constants/crypto-constants';
import LoadingSpinner from '@/components/LoadingSpinner';
import { GridContainer, Row, Col } from "@/components/Grid";
import { ITEMS_PER_PAGE } from '@/constants/general-constants';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { 
    data: productsResponse, 
    isLoading, 
  } = useProducts({ 
    page: currentPage, 
    limit: ITEMS_PER_PAGE 
  });

  const typedResponse = productsResponse as unknown as {
    data: Product[];
    metadata: {
      page: number;
      pageCount: number;
      totalItems: number; 
    };
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const displayItems = typedResponse?.data || [];
  const totalItems = typedResponse?.metadata?.totalItems || 0;

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
      
      {typedResponse && displayItems.length > 0 && (
        <>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <GridContainer maxWidth="1600px" centered>
              <Row gap="lg">
                {displayItems.map(product => (
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
                      onBuyClick={(id) => console.log(`Buy item with id: ${id}`)}
                    />
                  </Col>
                ))}
              </Row>
            </GridContainer>
          </div>
          
          <Pagination
            currentPage={typedResponse.metadata.page}
            totalPages={typedResponse.metadata.pageCount || 1}
            onPageChange={handlePageChange}
            totalItems={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
          />
        </>
      )}
      
      {typedResponse && typedResponse.data.length === 0 && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Nenhum produto disponível no momento.</p>
        </div>
      )}
    </Container>
  );
};

export default HomePage;
