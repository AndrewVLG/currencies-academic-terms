import { Box } from '@mui/material'

import { CatLogo } from '../../'
import { SelectInHeader } from '../../../Component'
import { wrapper } from './styles'

const marginLeft = { ml: '1rem' }
export const Header = () => {
  return (
    <Box component='header' sx={wrapper}>
      <CatLogo sx={marginLeft} />
      <SelectInHeader sx={marginLeft} />
    </Box>
  )
}
