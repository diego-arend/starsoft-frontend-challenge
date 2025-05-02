import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 76px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  margin: 0 auto;

  /* Layout properties based on specs */
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
`;

export const FooterContent = styled.div`
  max-width: var(--max-width, 1200px);
  width: 100%;
  padding: 0 ${({ theme }) => theme.paddings.md};
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.paddings.lg};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.paddings.xl};
  }
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  text-align: center;
`;