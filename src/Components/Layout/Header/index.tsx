import styles from './Header.module.scss';
import { BsFillBasketFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import CartBar from '../CartBar';
import { useState } from 'react';
import { toggleCart } from '../../../Store/cartSlice';

const Header = () => {
	const dispatch = useDispatch();
	const isCartOpen = useSelector((state: any) => state.cart.cartIsOpen);

	const cartOpeningHandler = () => {
		dispatch(toggleCart())
	};

	const productsQuantity = useSelector(
		(state: any) => state.cart.cartTotalQuantity
	);
	return (
		<div className={styles.section}>
			<h2 className={styles.logo}>Shopacabra</h2>
			<button onClick={cartOpeningHandler} className={styles.basket}>
				<BsFillBasketFill size={40} />
				<p className={styles.quantity}>{productsQuantity}</p>
			</button>
			{isCartOpen && <CartBar />}
		</div>
	);
};

export default Header;
