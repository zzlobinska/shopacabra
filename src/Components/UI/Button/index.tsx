import styles from './Button.module.scss';

type ButtonProps = {
	text: string;

	onClick?: () => void;
};

const Button = (props: ButtonProps) => {
	return (
		<button className={styles.btn} onClick={props.onClick}>
			{props.text}
		</button>
	);
};

export default Button;
