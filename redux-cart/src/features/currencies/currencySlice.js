import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrencies } from './fetchCurrencies';

const initialState = {
	currency: 'Usd',
	choices: ['Eur', 'Rub', 'Uah'],
	converter: {},
};

const currencySlice = createSlice({
	name: 'Currency',
	initialState,
	reducers: {
		changeCurrency: (state, { payload }) => {
			state.choices = [...state.choices.filter((e) => e !== payload), state.currency]
			state.currency = payload;
		},
	},
	extraReducers: {
		[fetchCurrencies.fulfilled]: (state, { payload }) => {
			console.log(payload);
			state.converter = payload.data;
		},
		[fetchCurrencies.rejected]: (state, action) => {
			console.log(action);
		},
	},
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;
