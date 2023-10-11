import { SxProps } from '@mui/system'

export const layout: SxProps = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
}

export const main: SxProps = {
  height: '6.1rem',
  backgroundColor: '#000000',
  color: '#FFFFFF',
  zIndex: 20,
}

export const error: SxProps = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const alert = {
  '& div': {
    height: '0.5rem',
    fontSize: '0.3rem',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'Kreon',
  },
}
