import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  it('should render with copyright text', () => {
    renderWithProviders(<Footer />);
    
    expect(screen.getByText('STARSOFT © TODOS OS DIREITOS RESERVADOS')).toBeInTheDocument();
  });

  it('should apply custom className when provided', () => {
    renderWithProviders(<Footer className="custom-footer" />);
    
    const footerElement = screen.getByText('STARSOFT © TODOS OS DIREITOS RESERVADOS').closest('footer');
    expect(footerElement).toHaveClass('custom-footer');
  });
});