import { createBrowserRouter } from 'react-router-dom'
import { Layout, Main } from '../../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
])