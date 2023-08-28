import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrency } from '../features/currencies/currencySlice';

function Choices({ visible, setVisible, choices }) {
	const dispatch = useDispatch();

	return (
		<>
			{visible && (
				<div className='choices' onMouseLeave={() => setVisible(false)}>
					{choices.map((elm) => (
						<h3
							className='choice'
							key={elm}
							onClick={() => dispatch(changeCurrency(elm))}
						>
							{elm}
						</h3>
					))}
				</div>
			)}
		</>
	);
}
export function Valuechanger() {
	const { currency, choices } = useSelector((store) => store.currency);
	const [visible, setVisible] = useState(false);

	return (
		<div onMouseLeave={() => setVisible(false)}>
			<h3 onMouseOver={() => setVisible(true)}>{currency}</h3>
			<Choices
				visible={visible}
				setVisible={setVisible}
				choices={choices}
			/>
		</div>
	);
}
