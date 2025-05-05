import React from 'react';
import { screen, fireEvent, act } from '@testing-library/react';
import { renderWithProviders } from '@/__tests__/test-utils';
import ItemDetails from '@/components/ItemDetails';
import FramerMotionMock from '@/__tests__/mocks/framer-motion.mock';

// Setup Framer Motion mock
FramerMotionMock.setupMock();

// Mock timers for the hover delay
jest.useFakeTimers();

describe('ItemDetails Component', () => {
  const mockProps = {
    title: 'Ancient Sword',
    description: 'A legendary sword with mysterious powers that has been passed down through generations of warriors.'
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should render title and description correctly', () => {
    renderWithProviders(<ItemDetails {...mockProps} />);
    
    expect(screen.getByText('Ancient Sword')).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it('should handle mouse enter/leave interactions', () => {
    renderWithProviders(<ItemDetails {...mockProps} />);
    
    const container = screen.getByText('Ancient Sword').closest('div')!;
    
    // Initial state - only one description
    expect(screen.getAllByText(mockProps.description).length).toBe(1);
    
    // Hover to expand
    fireEvent.mouseEnter(container);
    act(() => { jest.advanceTimersByTime(600); });
    
    // After hover - two descriptions (original + expanded)
    expect(screen.getAllByText(mockProps.description).length).toBe(2);
    
    // Mouse leave to collapse
    fireEvent.mouseLeave(container);
    act(() => { jest.runAllTimers(); });
    
    // Check for either collapsing or collapsed state
    const descriptions = screen.queryAllByText(mockProps.description);
    if (descriptions.length === 2) {
      // If still animating out, check it's becoming invisible
      expect(descriptions[1]).toHaveStyle({ opacity: '0' });
    } else {
      // If animation completed, only one remains
      expect(descriptions.length).toBe(1);
    }
  });

  it('should expand when clicking the icon', () => {
    renderWithProviders(<ItemDetails {...mockProps} />);
    
    // Find and click the expand icon
    const expandIcon = document.querySelector('svg')!.parentElement!;
    fireEvent.click(expandIcon);
    
    // Should be expanded without waiting for timer
    expect(screen.getAllByText(mockProps.description).length).toBe(2);
  });

  it('should cancel expansion when mouse leaves before timeout', () => {
    renderWithProviders(<ItemDetails {...mockProps} />);
    
    const container = screen.getByText('Ancient Sword').closest('div')!;
    
    // Start hover but don't complete timeout
    fireEvent.mouseEnter(container);
    act(() => { jest.advanceTimersByTime(300); });
    
    // Leave before timeout completes
    fireEvent.mouseLeave(container);
    act(() => { jest.advanceTimersByTime(300); });
    
    // Should remain unexpanded
    expect(screen.getAllByText(mockProps.description).length).toBe(1);
  });
});