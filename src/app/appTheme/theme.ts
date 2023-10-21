import { createTheme } from '@mui/material'

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  grey: '#F0EFEF',
}
export type Colors = typeof colors

export const theme = createTheme({
  palette: {
    info: {
      main: colors.black,
    },
    appTheme: {
      white: colors.white,
      black: colors.black,
    },
  },
  components: {
    MuiSelect: {
      defaultProps: {},
      styleOverrides: {
        root: {
          '& svg': {
            width: '0.7rem',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '0.5rem',
          fontFamily: 'Kreon',
          '&:hover': { backgroundColor: colors.white },
          '&.MuiButtonBase-root.Mui-selected': {
            backgroundColor: colors.grey,
            '&:hover': { backgroundColor: 'none' },
          },
          '&. Mui-focusVisible': { backgroundColor: colors.white },
        },
      },
    },
  },
})
