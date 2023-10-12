import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    info: {
      main: '#000000',
    },
    appTheme: {
      white: '#FFFFFF',
      dark: '#000000',
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
          '&:hover': { backgroundColor: '#FFFFFF' },
          '&.MuiButtonBase-root.Mui-selected': {
            backgroundColor: '#F0EFEF',
            '&:hover': { backgroundColor: 'none' },
          },
          '&. Mui-focusVisible': { backgroundColor: '#FFFFFF' },
        },
      },
    },
  },
})
