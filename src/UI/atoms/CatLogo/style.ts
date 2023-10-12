import { SxProps } from '@mui/material'

export const logoContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',
  '& h1': { fontFamily: 'Kreon', fontSize: '3rem', fontWeight: 'bold' },
  '& p': {
    fontFamily: 'Kreon',
    fontSize: '0.6rem',
    fontWeight: '300',
    marginLeft: '0.3rem',
  },
  '@media(max-width: 500px)': {
    justifyContent: 'center',
    '& h1': { fontSize: '6rem' },
    '& p': { fontSize: '1.2rem' },
  },
}
