import { useSelector } from 'react-redux';
import { Cart } from '../Components/Cart';
import { Navigation } from '../Components/Navigation';
import Modal from '../Components/Modal';


export default function MainPage() { 

	const { show } = useSelector((store) => store.modal); 

	return <>
		<Navigation />
		<Cart />
		{show && <Modal />}
	</>;
}