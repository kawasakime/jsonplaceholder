import { configureStore } from '@reduxjs/toolkit'
import users from './slices/users'
import { useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {users},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()