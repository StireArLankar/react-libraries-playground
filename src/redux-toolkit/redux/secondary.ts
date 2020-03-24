import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'

import { getPrimarySuccess } from './primary'
import { State } from '.'

export interface SecondaryState {
  secondary: string
}

const initialState: SecondaryState = {
  secondary: '',
}

const secondarySlice = createSlice({
  name: 'secondary',
  initialState,
  reducers: {
    setProviderFilter(state, action: PayloadAction<string>) {
      state.secondary = action.payload
    },
  },
  extraReducers: {
    [getPrimarySuccess.type]: (state) => {
      state.secondary = state.secondary + '+'
    },
  },
})

const shopItemsSelector = (state: State) => state.secondary.secondary

export const secondarySelector = createSelector(shopItemsSelector, (val) =>
  val.replace(/\+/gi, '_+_')
)

export const { setProviderFilter } = secondarySlice.actions

export const secondaryReducer = secondarySlice.reducer
