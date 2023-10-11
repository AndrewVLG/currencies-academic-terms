import {
  Box,
  LinearProgress,
  Snackbar,
  SnackbarOrigin,
  Typography,
} from '@mui/material'
import { alert, main } from './styles'
import { useAppDispatch, useAppSelector } from '../app/redux/store'
import { useCallback } from 'react'
import { clearError } from '../app/redux/slice/currencies'

const anchorOrigin: SnackbarOrigin = { horizontal: 'center', vertical: 'top' }

export const Main = () => {
  const { name, isLoading, errorMessage } = useAppSelector(
    (store) => store.currencies,
  )
  const dispatch = useAppDispatch()

  const currencyOrPreLoader = !isLoading ? (
    <Typography fontFamily='Kreon' textAlign='center' fontSize='2rem' m={0}>
      {name}
    </Typography>
  ) : (
    <LinearProgress color='inherit' />
  )

  const handleClose = useCallback(() => {
    dispatch(clearError())
  }, [])
  return (
    <Box sx={main} component='main'>
      {errorMessage && (
        <Snackbar
          anchorOrigin={anchorOrigin}
          sx={alert}
          open={!!errorMessage}
          onClose={handleClose}
          message={errorMessage}
        />
      )}
      {currencyOrPreLoader}
    </Box>
  )
}
