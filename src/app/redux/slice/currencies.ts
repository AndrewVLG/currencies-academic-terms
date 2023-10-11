import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCurrencies } from '../../axios/getCurrencies'
import { Currency } from 'shared/dto/currencies'

interface Initial {
  list: Currency[]
  id: string
  name: string
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage: string | null
}

const initialState: Initial = {
  list: [],
  id: '',
  name: '',
  isLoading: true,
  isSuccess: false,
  isError: false,
  errorMessage: null,
}

export const fetchCurrencies = createAsyncThunk<Currency[]>(
  'fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await getCurrencies()

      return data
    } catch (e) {
      return rejectWithValue('Что-то пошло не так')
    }
  },
)

const currencies = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setActiveCurrency(state, { payload }: PayloadAction<string>) {
      const { name } = state.list.find(({ id }) => id === payload) as Currency
      state.id = payload
      state.name = name
    },
    clearError(state) {
      state.errorMessage = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      const firstItem = 0

      state.isSuccess = true
      state.isLoading = false
      state.isError = false
      state.list = action.payload
      state.id = action.payload[firstItem].id
      state.name = action.payload[firstItem].name
      state.errorMessage = null
    })
    builder.addCase(fetchCurrencies.pending, (state) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
      state.errorMessage = null
    })
    builder.addCase(fetchCurrencies.rejected, (state) => {
      state.list = []
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
      state.errorMessage = 'Что-то пошло не так'
    })
  },
})

export const currenciesReducer = currencies.reducer
export const { setActiveCurrency, clearError } = currencies.actions
