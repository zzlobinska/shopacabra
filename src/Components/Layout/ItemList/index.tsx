import ItemCard from './ItemCard';
import styles from './ItemList.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

export type ProductType = {
	title: string;
	price: string;
	description: string;
	image: string;
	id: number;
};

const ItemList = () => {
	const [productsList, setProductsList] = useState<ProductType[]>([]);
	const [areProductsLoading, setAreProductsLoading] = useState<boolean>(false);
	const getProducts = async () => {
		setAreProductsLoading(true)
		try {
			const response = await axios.get(
				'https://fakestoreapi.com/products?limit=5'
			);

			setProductsList(response.data);
			setAreProductsLoading(false)
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<>
		{areProductsLoading && <p className={styles.loading}>Just a moment...</p>}
		<ul className={styles.list}>
			{productsList.map((product) => (
				<li className={styles.item} key={product.id}>
					<ItemCard product={product} />
				</li>
			))}
		</ul></>
	);
};
export default ItemList;
