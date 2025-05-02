import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
`;

export default GlobalStyles;