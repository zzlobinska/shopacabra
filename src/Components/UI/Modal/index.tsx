import OutsideClickHandler from 'react-outside-click-handler';
import Overlay from './Overlay';

type ModalProps = {
	children: React.ReactElement;
	isModalActive: boolean;
	onClose: () => void;
};

const Modal = ({ children, isModalActive, onClose }: ModalProps) => {
	if (!isModalActive) return null;

	return (
		<>
			<Overlay />
			<OutsideClickHandler onOutsideClick={onClose}>
				{children}
			</OutsideClickHandler>
		</>
	);
};

export default Modal;
