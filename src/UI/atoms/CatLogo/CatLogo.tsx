import { FC, memo } from 'react'
import { Box, BoxProps, Typography } from '@mui/material'

import { logoContainer } from './style'

const title = 'CAT'
const arrayWithText = ['currencies', 'academic', 'terms']

interface Props extends Pick<BoxProps, 'sx'> {}

export const CatLogo: FC<Props> = memo(({ sx = {} }) => {
  const sxProps = { ...logoContainer, ...sx }
  const text = arrayWithText.map((el) => (
    <Typography variant='body2' key={el}>
      {el}
    </Typography>
  ))
  return (
    <Box sx={sxProps}>
      <Typography variant='h1'>{title}</Typography>
      <div>{text}</div>
    </Box>
  )
})
