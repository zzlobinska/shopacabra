
import Header from '../../Components/Layout/Header';


import styles from './LandingPage.module.scss';

import ItemList from '../../Components/Layout/ItemList';

const LandingPage = () => {
	return (
		<>
			<Header />
			<div className={styles.section}>
				<h1 className={styles.title}>Hey! Buy some stuff ;)</h1>
				<ItemList />
			</div>
		</>
	);
};

export default LandingPage;
