import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Routes/MainPage';
import { getCartItems } from './features/cart/reducers';
import Item from './Components/ItemPreview.js';
import { fetchCurrencies } from './features/currencies/fetchCurrencies';

function App() {
	const { cartItems } = useSelector((store) => store.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCartItems());
		dispatch(fetchCurrencies());
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />} />
				{cartItems.map((cartItem) => (
					<Route
						path={`/${cartItem.id}`}
						key={'r' + cartItem.id}
						element={<Item cartItem={cartItem} />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}
export default App;
