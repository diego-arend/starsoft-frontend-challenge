import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import Pagination from '@/components/Pagination';

// Mock Button component
jest.mock('@/components/Button', () => {
  const MockButton = ({ 
    children, 
    onClick, 
    disabled, 
    variant 
  }: { 
    children: React.ReactNode; 
    onClick?: () => void; 
    disabled?: boolean; 
    variant?: string;
  }) => (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      data-variant={variant}
      data-testid="mock-button"
    >
      {children}
    </button>
  );
  MockButton.displayName = 'MockButton';
  return MockButton;
});

// Mock ProgressBar component
jest.mock('@/components/ProgressBar', () => {
  const MockProgressBar = ({ progress }: { progress: number }) => (
    <div data-testid="mock-progress-bar" data-progress={progress} />
  );
  MockProgressBar.displayName = 'MockProgressBar';
  return MockProgressBar;
});

describe('Pagination Component', () => {
  const defaultProps = {
    currentPage: 2,
    totalPages: 5,
    onPageChange: jest.fn(),
    totalItems: 40,
    itemsPerPage: 8
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not render when there is only one page', () => {
    const { container } = renderWithProviders(
      <Pagination {...defaultProps} totalPages={1} />
    );
    
    expect(container.firstChild).toBeNull();
  });

  it('should render previous and next buttons', () => {
    renderWithProviders(<Pagination {...defaultProps} />);
    
    const buttons = screen.getAllByTestId('mock-button');
    expect(buttons).toHaveLength(2);
    
    expect(buttons[0]).toHaveTextContent('Anterior');
    expect(buttons[1]).toHaveTextContent('Carregar mais');
  });

  it('should call onPageChange with correct values', () => {
    renderWithProviders(<Pagination {...defaultProps} />);
    
    const buttons = screen.getAllByTestId('mock-button');
    const prevButton = buttons[0];
    const nextButton = buttons[1];
    
    fireEvent.click(prevButton);
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(1);
    
    fireEvent.click(nextButton);
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(3);
  });

  it('should disable previous button on first page', () => {
    renderWithProviders(<Pagination {...defaultProps} currentPage={1} />);
    
    const buttons = screen.getAllByTestId('mock-button');
    expect(buttons[0]).toBeDisabled();
    expect(buttons[1]).not.toBeDisabled();
  });

  it('should disable next button on last page', () => {
    renderWithProviders(<Pagination {...defaultProps} currentPage={5} />);
    
    const buttons = screen.getAllByTestId('mock-button');
    expect(buttons[0]).not.toBeDisabled();
    expect(buttons[1]).toBeDisabled();
  });

  it('should render progress bar with correct percentage', () => {
    renderWithProviders(<Pagination {...defaultProps} />);
    
    const progressBar = screen.getByTestId('mock-progress-bar');
    expect(progressBar).toHaveAttribute('data-progress', '40');
  });

  it('should apply custom className', () => {
    const { container } = renderWithProviders(
      <Pagination {...defaultProps} className="custom-pagination" />
    );
    
    expect(container.firstChild).toHaveClass('custom-pagination');
  });
});