import { createSlice } from '@reduxjs/toolkit';
import { reducers, extraReducers } from "./reducers"

const initialState = {
    cartItems: [],
    isLoading: true,
    total: 0,
};


const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers,
    extraReducers,
});

export const { clearCart, removeItem, changeAmount, updateTotal } = cartSlice.actions;

export default cartSlice.reducer