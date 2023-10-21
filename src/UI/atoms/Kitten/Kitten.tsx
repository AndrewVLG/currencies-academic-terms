import { memo } from 'react'
import { Box } from '@mui/material'
import { kitten } from './style'

export const Kitten = memo(() => {
  return (
    <Box>
      <img
        alt='kitten'
        style={kitten}
        src={require('../../../shared/assets/kitten.png')}
      />
    </Box>
  )
})
