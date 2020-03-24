import { combineReducers, configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import { secondaryReducer } from './secondary'
import { primaryReducer } from './primary'

const rootReducer = combineReducers({
  secondary: secondaryReducer,
  primary: primaryReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type State = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, State, null, Action<string>>
