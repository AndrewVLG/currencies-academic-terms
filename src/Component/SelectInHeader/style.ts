import { SxProps } from '@mui/system'

export const selectWrapper: SxProps = {
  width: '4rem',
  mb: '0.5rem',
  height: '1rem',
  '& .MuiInputBase-root': {
    width: '100%',
    height: '1rem',
    borderRadius: '0.2rem',
    fontSize: '0.5rem',
    fontFamily: 'Kreon',
    '@media(max-width:600px)': {
      height: '100%',
    },
  },
  '@media(max-width:600px)': {
    height: '2rem',
    width: '50%',
  },
}

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: '30%',
      width: '4rem',
    },
  },
}
