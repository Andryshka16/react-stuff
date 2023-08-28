import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
    text: '',
    color: 'red',
    time: new Date().getTime()
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (state, { payload }) => {
            const { text, color } = payload
            state.show = true
            state.text = text
            state.color = color || 'red'
            state.time = new Date().getTime()
        },
        hideAlert: (state) => {
            state.show = false
            state.text = ''
        }
    }
})

export default alertSlice.reducer
export const { showAlert, hideAlert } = alertSlice.actions
