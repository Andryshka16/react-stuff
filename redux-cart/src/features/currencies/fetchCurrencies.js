import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrencies = createAsyncThunk(
	'currency/fetchCurrencies',
	async () => {
		let url = 'https://api.freecurrencyapi.com/v1/latest?apikey=SecZRKMjyAE9eR0uJdX9m7gCOIdkN1yermzEo3MD';
		return await (await fetch(url)).json();
	}
);
