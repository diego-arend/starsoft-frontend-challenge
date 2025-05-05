import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import CryptoValue from '@/components/CryptoValue';
import NextImageMock from '@/__tests__/mocks/nextImage.mock';

// Setup Next.js Image mock
NextImageMock.setupNextImageMock();

describe('CryptoValue Component', () => {
  it('should render value and symbol correctly', () => {
    renderWithProviders(
      <CryptoValue 
        value="1.25" 
        symbol="ETH"
      />
    );
    
    expect(screen.getByText('1.25 ETH')).toBeInTheDocument();
    const image = screen.getByAltText('ETH icon');
    expect(image).toBeInTheDocument();
  });

  it('should use default icon path when not provided', () => {
    renderWithProviders(
      <CryptoValue 
        value="0.5" 
        symbol="BTC"
      />
    );
    
    const image = screen.getByAltText('BTC icon');
    // Check for encoded path in the src attribute
    expect(image.getAttribute('src')).toContain('%2Feth_symbol.png');
  });

  it('should use custom icon path when provided', () => {
    renderWithProviders(
      <CryptoValue 
        value="2.0" 
        symbol="SOL"
        iconPath="/sol_symbol.png"
      />
    );
    
    const image = screen.getByAltText('SOL icon');
    // Check for encoded path in the src attribute
    expect(image.getAttribute('src')).toContain('%2Fsol_symbol.png');
  });

  it('should apply custom className when provided', () => {
    renderWithProviders(
      <CryptoValue 
        value="3.75" 
        symbol="DOT"
        className="custom-crypto-class"
      />
    );
    
    const container = screen.getByText('3.75 DOT').closest('div');
    expect(container).toHaveClass('custom-crypto-class');
  });
});