import Button from '../button/button';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	return (
		<div className='product-card-container group'>
			<img src={imageUrl} alt={name} />
			<div className='product-footer'>
				<span className='product-name'>{name}</span>
				<span className='product-price'>{price}</span>
			</div>
			<Button buttonType='inverted'>Add to cart</Button>
		</div>
	);
};

export default ProductCard;
