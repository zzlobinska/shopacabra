import { useEffect, useState } from 'react';
import Header from '../../Components/Layout/Header';
import ItemCard from '../../Components/Layout/ItemCard';
import ItemDetail from '../../Components/Layout/ItemDetail';
import classNames from 'classnames';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
	const [isModalActive, setIsModalActive] = useState<boolean>(false);
	const modalHandler = () => {
		setIsModalActive(true);
	};

	const closeModal = () => {
		setIsModalActive(false);
		
	};

	useEffect(() => {
		if (isModalActive) {
			document.body.style.overflow = 'hidden';
		}
	}, [isModalActive]);
	return (
		<div
			className={classNames({
				[styles.active]: isModalActive,
			})}
		>
			<Header />
			<div className={styles.section}>
				<h1 className={styles.title}>Hey! Buy some panties ;)</h1>
				<ul className={styles.list}>
					<li className={styles.item}>
						<ItemCard onClick={modalHandler} />
					</li>
				</ul>
			</div>
			{isModalActive && <ItemDetail closeModal={closeModal} />}
		</div>
	);
};

export default LandingPage;
