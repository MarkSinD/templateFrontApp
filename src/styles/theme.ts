import type {PaletteMode, ThemeOptions} from '@mui/material'
import {grey, purple} from "./colors";

export const defaultTheme = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode: mode,
    primary: {
      // light: will be calculated from palette.primary.main,
      main: purple[600],
      dark: grey[600]
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: grey[100],
      main: grey[600],
      // dark: will be calculated from palette.secondary.main,
      contrastText: purple[500],
    },
  },
  typography: {
    allVariants: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontWeight: 400,
    },
    h1: {
      fontSize: "28px",
    },
    h2: {
      fontSize: "1.2rem",
      fontWeight: "400",
    },
    h3: {
      fontSize: 13,
      fontWeight: 700,
    }
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
  },
  shape: {
    borderRadius: 5,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 4
})