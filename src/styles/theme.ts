import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;      
      primaryActive: string;    
      dark: string;
      darker: string;            
      darkest: string;
      gray: string;
      lightGray: string;
      white: string;
      whiteAlpha: {              
        10: string;
        20: string;
        40: string;
        60: string;
        80: string;
      };
    };
    fonts: {
      family: {
        primary: string;
        secondary: string;
      };
      sizes: {
        xs: string;             
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      weights: {
        light: number;          
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
      radiusSm: string;          
      radiusLg: string;          
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
      tabletSmall: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
    shadows: {                  
      sm: string;
      md: string;
      lg: string;
    };
    transitions: {               
      default: string;
      fast: string;
      slow: string;
    };
    zIndices: {                  
      base: number;
      dropdown: number;
      sticky: number;
      fixed: number;
      modal: number;
      tooltip: number;
    };
    cardSizes: {                 
      width: string;
      height: string;
      mobileWidth: string;
      mobileHeight: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#FF8310",
    primaryHover: "#E67400",
    primaryActive: "#CC6700",
    dark: "#232323",
    darker: "#22232C",
    darkest: "#191A20",
    gray: "#393939",
    lightGray: "#CCCCCC",
    white: "#FFFFFF",
    whiteAlpha: {
      10: "rgba(255, 255, 255, 0.1)",
      20: "rgba(255, 255, 255, 0.2)",
      40: "rgba(255, 255, 255, 0.4)",
      60: "rgba(255, 255, 255, 0.6)",
      80: "rgba(255, 255, 255, 0.8)",
    },
  },
  fonts: {
    family: {
      primary: "var(--font-poppins), sans-serif",
      secondary: "var(--font-ibm-plex-sans), sans-serif",
    },
    sizes: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
    },
    weights: {
      light: 300,
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
    radius: "0.5rem", // 8px
    radiusSm: "0.25rem", // 4px
    radiusLg: "1rem", // 16px
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
    lg: "2.5rem", // 40px
  },
  breakpoints: {
    mobile: "30rem", // 480px
    tabletSmall: "48rem", // 768px - iPad Mini, iPad (portrait)
    tablet: "64rem", // 1024px - iPad (landscape), iPad Pro 11" (portrait)
    desktop: "80rem", // 1280px - iPad Pro 12.9" (landscape)
    wide: "90rem", // 1440px
  },
  shadows: {
    sm: "0px 1px 2px rgba(0, 0, 0, 0.1)",
    md: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    lg: "0px 10px 20px rgba(0, 0, 0, 0.3)",
  },
  transitions: {
    default: "all 0.3s ease",
    fast: "all 0.2s ease",
    slow: "all 0.5s ease",
  },
  zIndices: {
    base: 1,
    dropdown: 10,
    sticky: 100,
    fixed: 200,
    modal: 300,
    tooltip: 400,
  },
  cardSizes: {
    width: "345px",
    height: "555px",
    mobileWidth: "300px",
    mobileHeight: "520px",
  },
};

export default theme;
