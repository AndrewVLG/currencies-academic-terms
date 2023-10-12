import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from '@mui/material'
import { theme } from './appTheme/theme'
import { store } from './redux/store'
import { router } from './routing/router'
import { Error } from '../pages'

export const App = () => {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

function fallbackRender() {
  return <Error message='Что-то пошло не так' />
}
