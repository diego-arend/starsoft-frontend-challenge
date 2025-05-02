import { DefaultTheme } from "styled-components";

declare module "styled-components" {
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
      sizes: {
        sm: string;
        md: string;
        lg: string;
      };
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
    margins: {
      sm: string;
      md: string;
      lg: string;
    };
    paddings: {
      xs: string
      sm: string;
      md: string;
      lg: string;
      xl: string; 
      xxl: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#FF8310", // #FF8310
    dark: "#232323", // #232323
    darkest: "#191A20", // #191A20
    gray: "#393939", // #393939
    lightGray: "#CCCCCC", // #CCCCCC
    white: "#FFFFFF", // #FFFFFF
  },
  fonts: {
    family: "var(--font-poppins), sans-serif",
    sizes: {
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.25rem", // 20px
    },
  },
  borders: {
    radius: "0.5rem", // 8px
  },
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
  },
  margins: {
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
  },
  paddings: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    xxl: "3rem", // 48px
  },
  breakpoints: {
    mobile: "30rem", // 480px
    tablet: "48rem", // 768px
    desktop: "64rem", // 1024px
    wide: "80rem", // 1280px
  },
};

export default theme;
