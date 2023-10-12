import { SxProps } from '@mui/system'

export const wrapper: SxProps = {
  width: '99%',
  minHeight: '4rem',
  flexGrow: 1,
  '@media(max-width: 500px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}
