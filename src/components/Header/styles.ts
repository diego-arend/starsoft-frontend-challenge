import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: ${({ theme }) => `${theme.paddings.xs} ${theme.paddings.xxl}`};
  background-color: ${({ theme }) => theme.colors.dark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
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
`;

export const CartCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: bold;
  width: 12px;
  height: 26px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-left: ${({ theme }) => theme.margins.sm};
`;