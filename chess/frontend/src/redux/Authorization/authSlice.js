import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authorized: false,
    user: {}
}

const authSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        authorize: (state, { payload }) => {
            state.authorized = true
            state.user = payload
        },
        logout: (state) => {
            state.authorized = false
            state.user = {}
        }
    }
})

export default authSlice.reducer

export const { authorize, logout } = authSlice.actions
