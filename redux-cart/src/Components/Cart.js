import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from './Cart/CartItem';
import { updateTotal } from '../features/cart/cartSlice';
import { useEffect } from 'react';
import { changeVisibility } from '../features/modal/modalSlice';

export function Cart() {

	let { cartItems, total, isLoading } = useSelector((store) => store.cart);
	const { currency, converter } = useSelector((store) => store.currency);
	const dispatch = useDispatch();
	total = total * (converter[currency.toUpperCase()] || 1)

	useEffect(
		() => {
			dispatch(updateTotal())
		},
		[cartItems]
	);

	if (isLoading) { 
		return <h1>Loading...</h1>
	}

	return (
		<section className='cart'>
			{cartItems.length ? (
				<>
					<h2>Your bag</h2>
					{cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
				</>
			) : (
				<h2>No items</h2>
			)}
			<footer>
				<hr />
				<div className='cart-total'>
					<h4>
						Total{' '}
						<span>
							{total.toFixed(2)} {currency}
						</span>
					</h4>
				</div>
				<button
					className='btn clear-btn'
					onClick={() => dispatch(changeVisibility())}
				>
					Clear cart
				</button>
			</footer>
		</section>
	);
}
