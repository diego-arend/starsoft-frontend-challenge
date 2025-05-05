import React from 'react';

/**
 * Sets up a mock for Next.js Link component
 * 
 * This mock renders an anchor tag with the href and children passed to the Link component,
 * making it easy to test navigation in components that use Next/Link.
 */
export const setupNextLinkMock = () => {
  jest.mock('next/link', () => {
    const MockNextLink = ({ children, href, ...rest }: { 
      children: React.ReactNode; 
      href: string; 
      [key: string]: unknown;
    }) => (
      <a href={href} {...rest}>
        {children}
      </a>
    );
    MockNextLink.displayName = 'MockNextLink';
    return MockNextLink;
  });
};

const nextLinkMock = { setupNextLinkMock };
export default nextLinkMock;