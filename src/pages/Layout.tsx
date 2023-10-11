import { Box } from '@mui/material'
import { Header, Kitten } from '../UI'
import { Outlet } from 'react-router-dom'
import { layout } from './styles'

export const Layout = () => {
  return (
    <Box sx={layout}>
      <Header />
      <Kitten />
      <Outlet />
    </Box>
  )
}
