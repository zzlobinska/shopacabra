import { useState } from 'react';
import Header from '../../Components/Layout/Header';
import ItemCard from '../../Components/Layout/ItemCard';
import ItemDetail from '../../Components/Layout/ItemDetail';
import classNames from 'classnames';
import styles from './LandingPage.module.scss';

import Modal from '../../Components/UI/Modal';
import ItemList from '../../Components/Layout/ItemList';

const LandingPage = () => {
	const [isModalActive, setIsModalActive] = useState<boolean>(false);
	const modalHandler = () => {
		setIsModalActive(true);
	};

	const closeModal = () => {
		setIsModalActive(false);
	};

	return (
		<div
			className={classNames({
				[styles.active]: isModalActive,
			})}
		>
			<Header />
			<div className={styles.section}>
				<h1 className={styles.title}>Hey! Buy some panties ;)</h1>
				<ItemList modalHandler={modalHandler}/>
			</div>
			<Modal isModalActive={isModalActive} onClose={closeModal}>
				<ItemDetail closeModal={closeModal} />
			</Modal>
		</div>
	);
};

export default LandingPage;
