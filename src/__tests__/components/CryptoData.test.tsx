import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import CryptoData from '@/components/CryptoData';

describe('CryptoData Component', () => {
  const daggerData = {
    id: 4,
    name: "Demon Dagger",
    description: "Uma adaga negra com runas ígneas incrustadas na lâmina, concedendo ao portador o poder de infligir feridas malditas que queimam a alma de seus adversários.",
    image: "https://softstar.s3.amazonaws.com/items/demon-dagger.png",
    price: 225,
    createdAt: "2024-07-18T23:55:43.238Z"
  };

  it('should render title and description correctly', () => {
    renderWithProviders(
      <CryptoData 
        title={daggerData.name}
        description={daggerData.description}
      />
    );
    
    expect(screen.getByText('Demon Dagger')).toBeInTheDocument();
    expect(screen.getByText(daggerData.description)).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    renderWithProviders(
      <CryptoData 
        title={daggerData.name}
        description={daggerData.description}
        className="custom-class"
      />
    );
    
    const container = screen.getByText('Demon Dagger').closest('div');
    expect(container).toHaveClass('custom-class');
  });

  it('should handle empty description', () => {
    renderWithProviders(
      <CryptoData 
        title={daggerData.name}
        description=""
      />
    );
    
    expect(screen.getByText('Demon Dagger')).toBeInTheDocument();
    
    // Find the description by getting all paragraphs and finding the empty one
    const paragraphs = screen.getAllByRole('paragraph');
    const emptyDescription = paragraphs.find(p => p.textContent === '');
    
    expect(emptyDescription).toBeInTheDocument();
    expect(emptyDescription?.textContent).toBe('');
  });

  it('should handle truncated description', () => {
    // Using only part of the description to test truncation
    const truncatedDescription = daggerData.description.substring(0, 50) + '...';
    
    renderWithProviders(
      <CryptoData 
        title={daggerData.name}
        description={truncatedDescription}
      />
    );
    
    expect(screen.getByText('Demon Dagger')).toBeInTheDocument();
    expect(screen.getByText(truncatedDescription)).toBeInTheDocument();
  });
});