import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import cartReducer from './features/cart/cartSlice';
import currencyReducer from './features/currencies/currencySlice';
import modalReducer from './features/modal/modalSlice';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		modal: modalReducer,
		currency: currencyReducer,
	},
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
