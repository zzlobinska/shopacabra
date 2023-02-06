import styles from './ItemDetail.module.scss';
import { BsXSquare } from 'react-icons/bs';

const ItemDetail = () => {
	return (
		<div className={styles.box}>
			<button className={styles.btn}><BsXSquare size={30}/></button>
			<div className={styles.content}>
				<img
					className={styles.photo}
					alt='a panties to buy'
					src='https://ae01.alicdn.com/kf/HTB1yZU9pIyYBuNkSnfoq6AWgVXaR.jpg'
				/>
				<div className={styles.header}>
					<h2 className={styles.title}>panties</h2>
					<p className={styles.price}>2 pln</p>
				</div>
				<p className={styles.description}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
					perspiciatis corporis ex earum laborum saepe, quis quia impedit
					consectetur fuga neque illo explicabo dolorem possimus odio sit
					quibusdam ut. Consequuntur.
				</p>
			</div>
		</div>
	);
};

export default ItemDetail;
