import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      dark: string;
      darkest: string;
      gray: string;
      lightGray: string;
      white: string;
    };
    fonts: {
      family: string;
    };
    borders: {
      radius: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: '#FF8310',   // #FF8310
    dark: '#232323',      // #232323
    darkest: '#191A20',   // #191A20
    gray: '#393939',      // #393939
    lightGray: '#CCCCCC', // #CCCCCC
    white: '#FFFFFF',     // #FFFFFF
  },
  fonts: {
    family: 'Poppins, sans-serif',
  },
  borders: {
    radius: '8px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export default theme;