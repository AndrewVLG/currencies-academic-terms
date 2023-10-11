import { CurrenciesDto } from 'shared/dto/currencies'
import { instance } from './instance'

export const getCurrencies = async () => {
  return instance.get<CurrenciesDto>('currencies')
}
