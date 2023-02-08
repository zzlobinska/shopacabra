import styles from './ItemDetail.module.scss';
import { BsXSquare } from 'react-icons/bs';
import Button from '../../../UI/Button';
import { ProductType } from '..';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../Store/cartSlice';

type ItemDetailProps = { closeModal: () => void; product: ProductType };

const ItemDetail = (props: ItemDetailProps) => {
	const dispatch = useDispatch();
	const addToCartHandler = () => {
		dispatch(addToCart(props.product as any));
	};
	const { title, price, description, image } = props.product;
	return (
		<div className={styles.box}>
			<button className={styles.btn} onClick={props.closeModal}>
				<BsXSquare size={30} />
			</button>
			<div className={styles.content}>
				<img className={styles.photo} alt='a panties to buy' src={image} />
				<div className={styles.header}>
					<h2 className={styles.title}>{title}</h2>
					<p className={styles.price}>{price}</p>
				</div>
				<p className={styles.description}>{description}</p>
				<Button onClick={addToCartHandler} text='add to basket' />
			</div>
		</div>
	);
};

export default ItemDetail;
