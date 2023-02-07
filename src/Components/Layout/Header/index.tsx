import styles from './Header.module.scss';
import { BsFillBasketFill } from 'react-icons/bs';

const Header = () => {
	return (
		<div className={styles.section}>
			<h2 className={styles.logo}>Shopacabra</h2>
			<button className={styles.basket}>
				<BsFillBasketFill size={40}/>
			</button>
		</div>
	);
};

export default Header;
