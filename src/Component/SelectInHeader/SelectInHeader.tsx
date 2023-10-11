import { FC, memo, useCallback, useEffect } from 'react'
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import {
  fetchCurrencies,
  setActiveCurrency,
} from '../../app/redux/slice/currencies'
import { useAppDispatch, useAppSelector } from '../../app/redux/store'
import { MenuProps, menuItem, selectWrapper } from './style'

interface Props extends Pick<SelectProps, 'sx'> {}

export const SelectInHeader: FC<Props> = memo(({ sx = {} }) => {
  const { list, id } = useAppSelector((store) => store.currencies)
  const dispatch = useAppDispatch()

  const items = list.map((item) => (
    <MenuItem
      value={item.id}
      key={item.id}
      disableTouchRipple
      divider
      sx={menuItem}
    >
      {item.id}
    </MenuItem>
  ))

  const handleChange = useCallback((event: SelectChangeEvent) => {
    dispatch(setActiveCurrency(event.target.value as string))
  }, [])

  useEffect(() => {
    dispatch(fetchCurrencies())
  }, [])
  const sxProps = { ...selectWrapper, ...sx }
  return (
    <Box sx={sxProps}>
      <FormControl fullWidth>
        <Select
          value={id}
          color='info'
          onChange={handleChange}
          MenuProps={MenuProps}
          IconComponent={ExpandMore}
        >
          {items}
        </Select>
      </FormControl>
    </Box>
  )
})
