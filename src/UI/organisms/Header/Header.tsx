import { Box } from '@mui/material'
import { wrapper } from './styles'
import { CatLogo } from '../../'
import { SelectInHeader } from '../../../Component'
const marginLeft = { ml: '1rem' }
export const Header = () => {
  return (
    <Box component='header' sx={wrapper}>
      <CatLogo sx={marginLeft} />
      <SelectInHeader sx={marginLeft} />
    </Box>
  )
}
