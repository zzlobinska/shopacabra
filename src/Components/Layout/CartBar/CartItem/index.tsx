import { BsDashSquare, BsPlusSquare, BsXSquare } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseCart, removeFromCart } from '../../../../Store/cartSlice';
import { ProductType } from '../../ItemList';
import styles from './CartItem.module.scss';

const CartItem = ({ product }: { product: ProductType }) => {
	const dispatch = useDispatch();

	const removeFromCartHandler = (cartItem: ProductType) => {
		dispatch(removeFromCart(cartItem));
	};
	const decreaseHandler = (cartItem: ProductType) => {
		dispatch(decreaseCart(cartItem));
	};
	const increaseHandler = (cartItem: ProductType) => {
		dispatch(addToCart(cartItem));
	};

	return (
		<div  className={styles.item} >
			<div className={styles.description}>
				<img
					alt='a product to buy'
					src={product.image}
					className={styles.photo}
				/>
				<p className={styles.title}>{product.title}</p>
			</div>
			<p className={styles.price}>{product.price} pln</p>

			<div className={styles.quantity}>
				<p className={styles.number}>{product.cartQuantity}</p>
				<div className={styles.change}>
					<button  onClick={() => increaseHandler(product)} className={styles.btn}>
						<BsPlusSquare size={20} />
					</button>
					<button onClick={() => decreaseHandler(product)} className={styles.btn}>
						<BsDashSquare size={20} />
					</button>
				</div>
			</div>

			<p className={styles.amount}>
				{(+product.price * product.cartQuantity).toFixed(2)} pln
			</p>
			<button onClick={() => removeFromCartHandler(product)} className={styles.btn}>
				<BsXSquare size={20} />
			</button>
		</div>
	);
};

export default CartItem;
