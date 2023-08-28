import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk(
	'cart/getCartItems',
	async () => await (await fetch(url)).json()
);

const reducers = {
    clearCart: (state) => {
        state.cartItems = [];
        state.total = 0;
    },
        
    removeItem: (state, { payload }) => {
        const { cartItems } = state
        state.cartItems = cartItems.filter(({ id }) => id !== payload);
    },
        
    changeAmount: (state, { payload }) => {
        const { ID, sign } = payload;
        let item = state.cartItems.find(({ id }) => id === ID);
        item.amount = item.amount + sign;
    },
        
    updateTotal: (state) => {
        const { cartItems } = state
        let total = 0
        cartItems.forEach(({ price, amount }) =>
            total += amount * Number(price))
        state.total = total
    }
}

const extraReducers = {
    [getCartItems.pending]: (state) => {
        state.isLoading = true
    },
    [getCartItems.fulfilled]: (state, action) => {
        state.isLoading = false
        state.cartItems = action.payload
    },
    [getCartItems.rejected]: (state) => {
        state.isLoading = false
    }
}

export { reducers, extraReducers }