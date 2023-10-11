declare module '@mui/material/styles' {
  export interface PaletteOptions {
    appTheme: {
      white: string
      dark: string
    }
  }
}

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    appTheme: {
      white: string
      dark: string
    }
  }
}
export {}
