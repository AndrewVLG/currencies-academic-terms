import { Box } from '@mui/material'
import { wrapper } from './styles'
import { CatLogo } from '../../'

export const Header = () => {
  return (
    <Box component='header' sx={wrapper}>
      <CatLogo />
    </Box>
  )
}
