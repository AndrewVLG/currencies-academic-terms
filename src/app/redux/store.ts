import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { currenciesReducer } from './slice/currencies'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const reducer = combineReducers({
  currencies: currenciesReducer,
})
export const store = configureStore({
  reducer,
})
type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
