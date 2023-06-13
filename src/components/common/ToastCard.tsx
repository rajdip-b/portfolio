import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
	darkMode: boolean;
	children: React.ReactNode;
}

const ToastCard: React.FC<Props> = (props) => {

	return (
		<div>
			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				theme={props.darkMode ? 'dark' : 'light'}
			/>
			{props.children}
		</div>
	);
};

export default ToastCard;