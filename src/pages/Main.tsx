import { Box, Typography } from '@mui/material'
import { main } from './styles'

export const Main = () => {
  return (
    <Box sx={main}>
      <Typography fontFamily='Kreon' textAlign='center' fontSize='3rem' m={0}>
        Russian Ruby
      </Typography>
    </Box>
  )
}
