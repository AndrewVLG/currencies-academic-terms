import { Outlet } from 'react-router-dom'
import { Box, useMediaQuery } from '@mui/material'
import { Header, Kitten } from '../UI'
import { layout } from './styles'

export const Layout = () => {
  const isDesktop = useMediaQuery('(min-width: 500px)')
  return (
    <Box sx={layout}>
      <Header />
      {isDesktop && <Kitten />}
      <Outlet />
    </Box>
  )
}
