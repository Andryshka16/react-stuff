import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

const onlineUsersSlice = createSlice({
    name: 'onlineUsers',
    initialState,
    reducers: {
        setOnlineUsers: (_, { payload }) => payload
    }
})

export default onlineUsersSlice.reducer
export const { setOnlineUsers } = onlineUsersSlice.actions
