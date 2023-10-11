import { memo } from 'react'
import { Box, Typography } from '@mui/material'
import { logoContainer } from './style'

export const CatLogo = memo(() => {
  return (
    <Box sx={logoContainer}>
      <Typography variant='h1'>CAT</Typography>
      <div>
        <Typography variant='body2'>currencies</Typography>
        <Typography variant='body2'>academic</Typography>
        <Typography variant='body2'>terms</Typography>
      </div>
    </Box>
  )
})
