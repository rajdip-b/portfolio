import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
	children: React.ReactNode;
};

const ToastCard: React.FC<Props> = props => {
	return (
		<div>
			<ToastContainer
				position="top-right"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				theme="dark"
			/>
			{props.children}
		</div>
	);
};

export default ToastCard;
