import { FC, memo } from 'react'
import { Box, BoxProps, Typography } from '@mui/material'
import { logoContainer } from './style'

interface Props extends Pick<BoxProps, 'sx'> {}

const arrayWithText = ['currencies', 'academic', 'terms']

export const CatLogo: FC<Props> = memo(({ sx = {} }) => {
  const sxProps = { ...logoContainer, ...sx }
  const text = arrayWithText.map((el) => (
    <Typography variant='body2' key={el}>
      {el}
    </Typography>
  ))
  return (
    <Box sx={sxProps}>
      <Typography variant='h1'>CAT</Typography>
      <div>{text}</div>
    </Box>
  )
})
