import React from 'react';

type Props = {
	children?: React.ReactNode;
	onClick?: () => void;
	filled?: boolean;
	className?: string;
}

const StyledButton: React.FC<Props> = (props) => {
	return (
		<button
			onClick={props.onClick && props.onClick}
			className={`${props.className} ${!props.filled ? 'border-primary text-primary hover:text-white' : 'bg-primary text-dark-secondary hover:bg-white'} px-4 py-3 hover:border-white border-2 border-primary rounded-xl hover:-translate-y-1 shadow-lg hover:shadow-white/20 transition-all ease-out duration-300`}>
			{props.children}
		</button>
	);
};

export default StyledButton;