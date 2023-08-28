import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	show: false,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		changeVisibility: (state) => {
			state.show = !state.show;
		},
	},
});

export const { changeVisibility } = modalSlice.actions
export default modalSlice.reducer