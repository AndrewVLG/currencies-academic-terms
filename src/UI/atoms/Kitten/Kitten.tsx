import { memo } from 'react'
import { Box } from '@mui/material'

export const Kitten = memo(() => {
  return (
    <Box>
      <img
        alt='kitten'
        style={{
          width: '4.5rem',
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 10,
        }}
        src={require('../../../assets/kitten.png')}
      />
    </Box>
  )
})
