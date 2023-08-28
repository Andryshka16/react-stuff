export default function Item({ cartItem }) {
	const { title, price, img } = cartItem;
	return (
		<div className='item-preview'>
			<img src={img} alt='not loaded' />
			<div className='item-info'>
				<h1>{title}</h1>
				<h2>{price}$</h2>
			</div>
		</div>
	);
}
