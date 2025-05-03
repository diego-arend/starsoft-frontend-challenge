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
      family: {
        primary: string;
        secondary: string;
      };
      sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string; 
      };
      weights: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      lineHeights: {
        tight: string;
        normal: string;
        relaxed: string;
      };
      letterSpacing: {
        tight: string;
        normal: string;
        wide: string;
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
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    gaps: {
      sm: string;
      md: string;
      lg: string;
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
    primary: "#FF8310",
    dark: "#232323",
    darkest: "#191A20",
    gray: "#393939",
    lightGray: "#CCCCCC",
    white: "#FFFFFF",
  },
  fonts: {
    family: {
      primary: "var(--font-poppins), sans-serif",
      secondary: "var(--font-ibm-plex-sans), sans-serif",
    },
    sizes: {
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: "100%",
      normal: "140%",
      relaxed: "160%",
    },
    letterSpacing: {
      tight: "-0.29px",
      normal: "0",
      wide: "0.5px",
    },
  },
  borders: {
    radius: "0.5rem",
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
  gaps: {
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
  },
  breakpoints: {
    mobile: "30rem", // 480px
    tablet: "48rem", // 768px
    desktop: "64rem", // 1024px
    wide: "80rem", // 1280px
  },
};

export default theme;
