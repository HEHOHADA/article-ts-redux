import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducers } from './reducers'

const appReducer = combineReducers(reducers)

export const store = configureStore({
  reducer: appReducer,
  devTools: true,
})

export type AppStore = typeof store
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
