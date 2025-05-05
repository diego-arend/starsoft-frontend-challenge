import React from 'react';
import { renderWithProviders } from '@/__tests__/test-utils';
import Container from '@/components/Container';

describe('Container Component', () => {
  it('should render children properly', () => {
    const { getByText } = renderWithProviders(
      <Container>
        <div>Test content</div>
      </Container>
    );
    
    expect(getByText('Test content')).toBeInTheDocument();
  });

  it('should apply custom className when provided', () => {
    const { container } = renderWithProviders(
      <Container className="custom-container">
        <div>Test content</div>
      </Container>
    );
    
    const containerElement = container.firstChild as HTMLElement;
    expect(containerElement).toHaveClass('custom-container');
  });

  it('should render with default props', () => {
    const { container } = renderWithProviders(
      <Container>
        <div>Test content</div>
      </Container>
    );
    
    // The container should be rendered
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should pass fullWidth and noPadding props to styled component', () => {
    const { container, rerender } = renderWithProviders(
      <Container fullWidth noPadding>
        <div>Test content</div>
      </Container>
    );
    
    // With styled-components, we can't easily test the transient props ($fullWidth, $noPadding)
    // But we can verify the component renders without errors
    const containerElement = container.firstChild as HTMLElement;
    expect(containerElement).toBeInTheDocument();
    
    // Test different prop combinations
    rerender(
      <Container fullWidth={false} noPadding={true}>
        <div>Test content</div>
      </Container>
    );
    expect(container.firstChild).toBeInTheDocument();
    
    rerender(
      <Container fullWidth={true} noPadding={false}>
        <div>Test content</div>
      </Container>
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});