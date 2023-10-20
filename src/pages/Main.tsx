import { useCallback } from 'react'
import {
  Box,
  LinearProgress,
  Snackbar,
  SnackbarOrigin,
  Typography,
} from '@mui/material'

import { useAppDispatch, useAppSelector } from '../app/redux/store'
import { clearError } from '../app/redux/slice/currencies'
import { alert, main } from './styles'

const anchorOrigin: SnackbarOrigin = { horizontal: 'center', vertical: 'top' }

export const Main = () => {
  const { name, isLoading, errorMessage } = useAppSelector(
    (store) => store.currencies,
  )
  const dispatch = useAppDispatch()

  const currencyOrPreLoader = isLoading ? (
    <LinearProgress color='inherit' />
  ) : (
    <Typography fontFamily='Kreon' textAlign='center' fontSize='2rem' m={0}>
      {name}
    </Typography>
  )

  const handleClose = useCallback(() => {
    dispatch(clearError())
  }, [])

  return (
    <Box sx={main} component='main'>
      <Snackbar
        anchorOrigin={anchorOrigin}
        sx={alert}
        open={!!errorMessage}
        onClose={handleClose}
        message={errorMessage}
      />
      {currencyOrPreLoader}
    </Box>
  )
}
