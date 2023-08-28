import { CartIcon } from '../icons';
import { Valuechanger } from './Valuechanger';

export function Navigation() {
	return (
		<nav>
			<div className='nav-center'>
				<h3>React toolkit</h3>
				<div className='nav-left'>
					<CartIcon />
					<Valuechanger />
				</div>
			</div>
		</nav>
	);
}
