import React from 'react';

const FramerMotionMock = {
  setupMock: () => {
    jest.mock('framer-motion', () => ({
      AnimatePresence: ({ 
        children, 
        onExitComplete 
      }: { 
        children?: React.ReactNode; 
        onExitComplete?: () => void 
      }) => {
        return (
          <div 
            data-testid="animate-presence-mock" 
            data-exit-complete={!!onExitComplete}
            onClick={() => onExitComplete && onExitComplete()}
          >
            {children}
          </div>
        );
      },
      motion: {
        div: ({ 
          children, 
          ...props 
        }: { 
          children?: React.ReactNode; 
          [key: string]: unknown;
        }) => (
          <div data-testid="motion-div-mock" {...props}>
            {children}
          </div>
        ),
      },
    }));
  }
};

export default FramerMotionMock;