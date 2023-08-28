import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice';
import { changeVisibility} from "../features/modal/modalSlice"


function Button({ name }) {
    const dispatch = useDispatch();

	return (
		<button
			type='button'
			className={`btn ${name}-btn`}
            onClick={() => {
                dispatch(changeVisibility())
                if (name==="confirm") dispatch(clearCart())
            }}
		>
			{name==="clear"? "cancel": name}
		</button>
	);
}

export default function Modal() { 

    
    return (
		<aside className='modal-container'>
			<div className='modal'>
				<h4>Remove All Items From Your Shopping Cart?</h4>
				<div className='btn-container'>
					<Button name={'confirm'} />
					<Button name={'clear'} />
				</div>
			</div>
		</aside>
	);
}