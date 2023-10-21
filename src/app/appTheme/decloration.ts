declare module '@mui/material/styles' {
  export interface PaletteOptions {
    appTheme: {
      white: string
      black: string
    }
  }
}

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    appTheme: {
      white: string
      black: string
    }
  }
}
export {}
