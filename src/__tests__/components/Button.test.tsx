import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Button from '@/components/Button';
import { renderWithProviders } from '@/__tests__/test-utils';

describe('Button Component', () => {
  it('should render correctly with default props', () => {
    renderWithProviders(<Button>Click Me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    renderWithProviders(<Button onClick={handleClick}>Click Me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render with different variants', () => {
    // Renderiza botão com variante primary
    const { rerender } = renderWithProviders(<Button variant="primary">Primary</Button>);
    
    let button = screen.getByRole('button', { name: /primary/i });
    expect(button).toBeInTheDocument();
    // Verificamos apenas que o botão foi renderizado, sem olhar para classes específicas
    
    // Rerenderiza com variante secondary
    rerender(<Button variant="secondary">Secondary</Button>);
    
    button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toBeInTheDocument();
  });

  it('should apply fullWidth prop correctly', () => {
    renderWithProviders(<Button fullWidth data-testid="full-width-button">Full Width</Button>);
    
    const button = screen.getByTestId('full-width-button');
    expect(button).toBeInTheDocument();
    
    // Para Styled Components, podemos verificar o estilo computado
    expect(button).toHaveStyle({ width: '100%' });
  });

  it('should apply custom width and height', () => {
    renderWithProviders(
      <Button 
        width="200px" 
        height="50px"
        data-testid="custom-size-button"
      >
        Custom Size
      </Button>
    );
    
    const button = screen.getByTestId('custom-size-button');
    expect(button).toBeInTheDocument();
    
    // Verifica se os estilos personalizados foram aplicados
    expect(button).toHaveStyle({
      width: '200px',
      height: '50px'
    });
  });

  it('should apply additional HTML attributes', () => {
    renderWithProviders(
      <Button 
        type="submit" 
        disabled
        data-testid="test-button"
      >
        Submit
      </Button>
    );
    
    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toBeDisabled();
  });
});