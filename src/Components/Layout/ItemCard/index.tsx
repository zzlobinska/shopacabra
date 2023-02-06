import Button from '../../UI/Button';
import styles from './ItemCard.module.scss';

type ItemCardProps = {
	onClick: () => void;
};

const ItemCard = (props: ItemCardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<div className={styles.about}>
					<div className={styles.text}>
						<h2 className={styles.title}>Panties</h2>
						<p className={styles.price}>2 pln</p>
						<p className={styles.description}>
							Sexy panties made from softest bunnies tails (no harm, they gave
							it free)
						</p>
					</div>
					<img
						className={styles.photo}
						alt='a panties to buy'
						src='https://ae01.alicdn.com/kf/HTB1yZU9pIyYBuNkSnfoq6AWgVXaR.jpg'
					/>
				</div>

				<div className={styles.buttons}>
					<Button text='add to basket' />
					<Button onClick={props.onClick} text='see more' />
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
