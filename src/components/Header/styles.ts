import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px; // Mais compacto em telas menores
  width: 100%;
  padding: ${({ theme }) => `${theme.paddings.xs} ${theme.paddings.md}`};
  background-color: ${({ theme }) => theme.colors.dark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  position: sticky; // Manter o header visível ao rolar
  top: 0;
  z-index: 1000;

  /* Tablets */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 75px;
    padding: ${({ theme }) => `${theme.paddings.xs} ${theme.paddings.xl}`};
  }

  /* Desktop */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 80px;
    padding: ${({ theme }) => `${theme.paddings.xs} ${theme.paddings.xxl}`};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 80px;
    height: auto;
    transition: width 0.3s ease; // Transição suave

    /* Tablets */
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 90px;
    }

    /* Desktop */
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 101px;
    }
  }
`;

export const CartContainer = styled.div`
  position: relative;
`;

export const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  img {
    width: 25px;
    height: auto;
    transition: width 0.3s ease; // Transição suave

    /* Tablets */
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 28px;
    }

    /* Desktop */
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 33px;
    }
  }
`;

export const CartCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: bold;
  width: 10px;
  height: 22px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-left: ${({ theme }) => theme.margins.sm};
  transition: all 0.3s ease; // Transição suave

  /* Tablets */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 11px;
    height: 24px;
    font-size: ${({ theme }) => theme.fonts.sizes.md};
  }

  /* Desktop */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 12px;
    height: 26px;
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;