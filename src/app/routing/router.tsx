import { createBrowserRouter } from 'react-router-dom'

import { Error, Layout, Main } from '../../pages'

const errorMessage = 'Нет такой страницы:)'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error message={errorMessage} />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
])
