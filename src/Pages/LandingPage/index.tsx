import Header from '../../Components/Layout/Header';
import ItemCard from '../../Components/Layout/ItemCard';
import ItemDetail from '../../Components/Layout/ItemDetail';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
	return (
		<>
			<Header />
			<div className={styles.section}>
				<h1 className={styles.title}>Hey! Buy some panties ;)</h1>
				<ul className={styles.list}>
					<li className={styles.item}>
						<ItemCard />
					</li>
				</ul>
			</div>
			<ItemDetail/>
		</>
	);
};

export default LandingPage;
