import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<div className='product-card-container group'>
			<img src={imageUrl} alt={name} />
			<div className='product-footer'>
				<span className='product-name'>{name}</span>
				<span className='product-price'>{price}</span>
			</div>
			<Button buttonType='inverted' onClick={addProductToCart}>
				Add to cart
			</Button>
		</div>
	);
};

export default ProductCard;
