import { createSlice } from '@reduxjs/toolkit'
import { UserResponse } from '../../interfaces/main'

export interface UsersState {
  items: UserResponse[],
}

const initialState: UsersState = {
  items: [],
}

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, {payload}: {payload: UserResponse[]}) => {
      state.items = payload
    },
  },
})

export const { setUsers } = counterSlice.actions

export default counterSlice.reducer