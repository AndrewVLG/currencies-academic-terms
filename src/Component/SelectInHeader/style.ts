import { SxProps } from '@mui/system'

export const selectWrapper: SxProps = {
  width: '4rem',
  mb: '0.5rem',
  '& .MuiInputBase-root': {
    width: '4rem',
    height: '1rem',
    borderRadius: '0.2rem',
    fontSize: '0.5rem',
    fontFamily: 'Kreon',
  },
}

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: '4rem',
      width: '4rem',
    },
  },
}
export const menuItem: SxProps = {
  fontSize: '0.5rem',
  fontFamily: 'Kreon',
  '&:hover': { backgroundColor: '#FFFFFF' },
  '&.MuiButtonBase-root.Mui-selected': {
    backgroundColor: '#F0EFEF',
    '&:hover': { backgroundColor: 'none' },
  },
  '&. Mui-focusVisible': { backgroundColor: '#FFFFFF' },
}
