import ItemCard from '../ItemCard';
import styles from './ItemList.module.scss';

type ItemListProps = {
	modalHandler: () => void;
};



const ItemList = ({ modalHandler }: ItemListProps) => {
	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<ItemCard onClick={modalHandler} />
			</li>
		</ul>
	);
};
export default ItemList;

