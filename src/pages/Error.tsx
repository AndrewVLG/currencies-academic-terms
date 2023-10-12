import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { error } from './styles'

interface Props {
  message: string
}
export const Error: FC<Props> = ({ message }) => {
  return (
    <Box sx={error}>
      <Box>
        <img
          style={{ height: '1rem', width: '1rem' }}
          src={require('../shared/assets/kitten-dance.gif')}
        />
        <Typography variant='caption' fontFamily='Kreon'>
          {message}
        </Typography>
      </Box>
    </Box>
  )
}
