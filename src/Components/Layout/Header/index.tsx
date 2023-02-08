import styles from './Header.module.scss';
import { BsFillBasketFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import CartBar from '../CartBar';

const Header = () => {
	const productsQuantity = useSelector(
		(state: any) => state.cart.cartTotalQuantity
	);
	return (
		<div className={styles.section}>
			<h2 className={styles.logo}>Shopacabra</h2>
			<button className={styles.basket}>
				<BsFillBasketFill size={40} />
				<p className={styles.quantity}>{productsQuantity}</p>
			</button>
			<CartBar />
		</div>
	);
};

export default Header;
