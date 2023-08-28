import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const roomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        updateRooms: (_, { payload }) => payload
    }
})

export default roomSlice.reducer

export const { updateRooms } = roomSlice.actions
