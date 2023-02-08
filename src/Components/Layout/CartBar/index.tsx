import { useSelector } from 'react-redux';
import { ProductType } from '../ItemList';

import styles from './Cart.module.scss';
import CartItem from './CartItem';

const CartBar = () => {
	const items = useSelector((state: any) => state.cart.cartItems);

	return (
		<div className={styles.cart}>
			<h2 className={styles.header}>Your items:</h2>
			{items.map((item: ProductType) => (
				<CartItem key={item.id} product={item} />
			))}
			<div className={styles.total}>
				<p className={styles.text}>total</p>
				<p className={styles.amount}>10 pln</p>
			</div>
		</div>
	);
};

export default CartBar;
