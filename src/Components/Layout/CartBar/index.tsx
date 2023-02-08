import { BsDashSquare, BsPlusSquare } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import styles from './Cart.module.scss';

const CartBar = () => {
 const items = useSelector(state: any => state.cart)
	return (
		<div className={styles.cart}>
			<h2 className={styles.header}>Your items:</h2>

			<div className={styles.item}>
				<div className={styles.description}>
					<img
						alt='a product to buy'
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8qFpKYKIfC-Y166zoONiYOvYgC6vAE5XSY8IBqIovw&s'
						className={styles.photo}
					/>
					<p className={styles.title}>item title</p>
					<p className={styles.price}>2 pln</p>
				</div>
				<div className={styles.total}>
					<div className={styles.quantity}>
						<p className={styles.number}>2</p>
						<div className={styles.change}>
							<button className={styles.btn}>
								<BsPlusSquare size={20} />
							</button>
							<button className={styles.btn}>
								<BsDashSquare size={20} />
							</button>
						</div>
					</div>
					<p className={styles.amount}>4 pln</p>
				</div>
			</div>
		</div>
	);
};

export default CartBar;
