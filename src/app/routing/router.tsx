import { createBrowserRouter } from 'react-router-dom'

import { Error, Layout, Main } from '../../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error message={`Нет такой страницы:)`} />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
])
