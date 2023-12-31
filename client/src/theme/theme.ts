import { createTheme, ThemeOptions } from "@mui/material/styles";

interface ColorPelete {
  primary: string;
  secondary: string;
  background: string;
  tertiary: string;
}

interface Colors {
  light: ColorPelete;
  dark: ColorPelete;
}

declare module "@mui/material/styles" {
  interface Theme {
    colors: Colors;
  }
  interface ThemeOptions {
    colors: Colors;
  }
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }

  interface TypographyVariants {
    poster: React.CSSProperties;
    title: React.CSSProperties;
    text: React.CSSProperties;
    subtitle: React.CSSProperties;
    bigNumber: React.CSSProperties;
    blockHeader: React.CSSProperties;
    blockNumber: React.CSSProperties;
    fontBreadcrumbs: React.CSSProperties;
    fontForItemsImage: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
    title?: React.CSSProperties;
    text?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    bigNumber?: React.CSSProperties;
    blockHeader?: React.CSSProperties;
    blockNumber?: React.CSSProperties;
    fontBreadcrumbs?: React.CSSProperties;
    fontForItemsImage?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    title: true;
    text: true;
    subtitle: true;
    bigNumber: true;
    blockHeader: true;
    blockNumber: true;
    fontBreadcrumbs: true;
    fontForItemsImage: true;
  }
}

export const themeOptions: ThemeOptions = {
  typography: {
    poster: {
      fontSize: "4rem",
      color: "#333333",
      fontFamily: "Orchidea Pro",
    },
    title: {
      fontSize: "55px",
      fontWeight: 600,
      lineHeight: "64.63px",
      color: "#000000",
      fontFamily: "Orchidea Pro",
    },
    text: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24.4px",
      color: "#000000",
    },
    subtitle: {
      fontSize: "25px",
      fontWeight: 600,
      lineHeight: "33.25px",
      color: "#000000",
      fontFamily: "Orchidea Pro",
    },
    bigNumber: {
      fontSize: "104px",
      fontWeight: 200,
      lineHeight: "105.04px",
      color: "#000000",
      fontFamily: "Orchidea Pro",
    },
    blockHeader: {
      fontSize: "16px",
      fontWeight: 400,
      letterSpacing: 3,
      lineHeight: "21.28px",
      color: "#000000",
      textTransform: "uppercase",
    },
    blockNumber: {
      fontSize: "27px",
      fontWeight: 400,
      lineHeight: "35.91px",
      color: "#FFC099",
    },
    fontBreadcrumbs: {
      color: "#000",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "133%",
    },
    fontForItemsImage: {
      color: "#000",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "143.5%",
      letterSpacing: "-0.36px",
    },
  },
  palette: {},
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 992,
      desktop: 1286,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 68,
      "@media (min-width:768px)": {
        minHeight: 96,
      },
      "@media (min-width:992px)": {
        minHeight: 138,
      },
    },
  },
  colors: {
    dark: {
      primary: "#E9345B",
      secondary: "#333333",
      background: "#FFFFFF",
      tertiary: "#FFC099",
    },
    light: {
      primary: "#E9345B",
      secondary: "#333333",
      background: "#FFFFFF",
      tertiary: "#FFC099",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
