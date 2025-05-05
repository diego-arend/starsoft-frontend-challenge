import React from 'react';
import { renderWithProviders } from '@/__tests__/test-utils';
import { GridContainer, Row, Col, gaps } from '@/components/Grid';

describe('Grid Components', () => {
  it('should render GridContainer with children', () => {
    const { getByText } = renderWithProviders(
      <GridContainer className="custom-container">
        <div>Container content</div>
      </GridContainer>
    );
    
    expect(getByText('Container content')).toBeInTheDocument();
  });

  it('should render Row with children and gap props', () => {
    const { getByText } = renderWithProviders(
      <Row className="custom-row" gap="md">
        <div>Row content</div>
      </Row>
    );
    
    expect(getByText('Row content')).toBeInTheDocument();
  });

  it('should render Col with responsive and alignment props', () => {
    const { getByText } = renderWithProviders(
      <Col 
        className="custom-col"
        xs={12} 
        md={6}
        align="start" 
        justify="end"
      >
        Column content
      </Col>
    );
    
    expect(getByText('Column content')).toBeInTheDocument();
  });

  // Test complete grid system
  it('should render a complete grid structure', () => {
    const { getByText } = renderWithProviders(
      <GridContainer>
        <Row gap="md">
          <Col xs={12} md={6}>Column 1</Col>
          <Col xs={12} md={6}>Column 2</Col>
        </Row>
      </GridContainer>
    );
    
    expect(getByText('Column 1')).toBeInTheDocument();
    expect(getByText('Column 2')).toBeInTheDocument();
  });

  // Only checking one essential constant
  it('should have correct gap constant', () => {
    expect(gaps.md).toBe('1rem');
  });
});