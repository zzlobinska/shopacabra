import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../../../Store/cartSlice';
import { ProductType } from '../ItemList';

import styles from './Cart.module.scss';
import CartItem from './CartItem';

const CartBar = () => {
	const dispatch = useDispatch();

	const cart = useSelector((state: any) => state.cart);

	useEffect(() => {
		// @ts-ignore
		dispatch(getTotals());
	}, [cart]);

	return (
		<div className={styles.cart}>
			<h2 className={styles.header}>Your items:</h2>
			{cart.cartItems.map((item: ProductType) => (
				<CartItem key={item.id} product={item} />
			))}
			<div className={styles.total}>
				<p className={styles.text}>total</p>
				<p className={styles.amount}>{cart.cartTotalAmount} pln</p>
			</div>
		</div>
	);
};

export default CartBar;
