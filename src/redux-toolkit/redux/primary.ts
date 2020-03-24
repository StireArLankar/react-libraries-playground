import { createSlice, PayloadAction, createSelector, createAsyncThunk } from '@reduxjs/toolkit'

import { AppThunk, State } from '.'

export interface PrimaryState {
  primary: PrimaryItem | null
  loading: boolean
  error: string | null
}

export type PrimaryItem = {
  id: number
}

const initialState: PrimaryState = {
  primary: null,
  loading: false,
  error: null,
}

export const fetchFake2 = createAsyncThunk('some-action-type', (_, thunkApi) => {
  const { getState } = thunkApi
  const state = getState()
  console.log('in fetchFake2: ', state)

  return getPrimary()
})

const primarySlice = createSlice({
  name: 'primary',
  initialState,
  reducers: {
    getPrimaryStart(state) {
      state.loading = true
      state.error = null
    },
    getPrimarySuccess(state, action: PayloadAction<PrimaryItem>) {
      state.primary = action.payload
      state.loading = false
      state.error = null
    },
    getPrimaryFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
  },
  extraReducers: {
    [fetchFake2.fulfilled.type]: (state, action) => {
      state.primary = action.payload
      state.loading = false
      state.error = null
    },
    [fetchFake2.pending.type]: (state, action) => {
      console.log('pending')
      state.loading = true
      state.error = null
    },
  },
})

export const primarySelector = createSelector(
  (state: State) => state.primary.primary?.id ?? -1,
  (val) => val * 10
)

export const primaryLoadingSelector = createSelector(
  (state: State) => state.primary.loading,
  (val) => (val ? 'loading...' : 'loaded!')
)

export const { getPrimaryStart, getPrimarySuccess, getPrimaryFailure } = primarySlice.actions

export const primaryReducer = primarySlice.reducer

export const fetchFake = (): AppThunk => (dispatch, getState) => {
  const state = getState()
  const loading = state.primary.loading

  if (loading) {
    return
  }

  dispatch(getPrimaryStart())

  getPrimary()
    .then((primary) => dispatch(getPrimarySuccess(primary)))
    .catch((err) => dispatch(getPrimaryFailure(err)))
}

let id = 0

const getPrimary = () =>
  new Promise<PrimaryItem>((resolve) => {
    setTimeout(() => {
      resolve({ id: id++ })
    }, 2000)
  })
