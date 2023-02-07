import { useState } from 'react';
import { ProductType } from '..';
import Button from '../../../UI/Button';
import Modal from '../../../UI/Modal';
import ItemDetail from '../ItemDetail';
import styles from './ItemCard.module.scss';

type ItemCardProps = {
	product: ProductType;
};

const ItemCard = (props: ItemCardProps) => {
	const { title, price, description, image } = props.product;

	const [isModalActive, setIsModalActive] = useState<boolean>(false);

	const closeModal = () => {
		setIsModalActive(false);
	};
	const openModal = () => {
		setIsModalActive(true);
	};
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<div className={styles.about}>
					<div className={styles.text}>
						<h2 className={styles.title}>{title}</h2>
						<p className={styles.price}>{price} pln</p>
						<p className={styles.description}>{description}</p>
					</div>
					<img className={styles.photo} alt='a panties to buy' src={image} />
				</div>

				<div className={styles.buttons}>
					<Button text='add to basket' />
					<Button onClick={openModal} text='see more' />
				</div>
			</div>
			<Modal isModalActive={isModalActive} onClose={closeModal}>
				<ItemDetail product={props.product} closeModal={closeModal} />
			</Modal>
		</div>
	);
};

export default ItemCard;
