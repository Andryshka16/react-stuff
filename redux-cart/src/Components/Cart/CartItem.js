import { useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from '../../icons';
import { removeItem, changeAmount } from '../../features/cart/cartSlice';
import { NavLink } from 'react-router-dom';

export function CartItem({ title, price, amount, img, id }) {
	
	const dispatch = useDispatch();

	return (
		<article key={id} className={'cart-item'}>
			<NavLink to={`/${id}`}>
				<img src={img} />
			</NavLink>
			<div>
				<h4>{title}</h4>
				<h4 className='item-price'>${price}</h4>
				<button
					className='remove-btn'
					onClick={() => dispatch(removeItem(id))}
				>
					remove
				</button>
			</div>
			<div>
				<button
					className='amount-btn'
					onClick={() => dispatch(changeAmount({ ID: id, sign: 1 }))}
				>
					{<ChevronUp />}
				</button>

				<p className='amount'>{amount}</p>

				<button
					className='amount-btn'
					onClick={() =>
						amount !== 1
							? dispatch(changeAmount({ ID: id, sign: -1 }))
							: dispatch(removeItem(id))
					}
				>
					{<ChevronDown />}
				</button>
			</div>
		</article>
	);
}
