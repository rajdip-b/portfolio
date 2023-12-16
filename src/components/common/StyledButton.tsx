import React from 'react';

type Props = {
	children?: React.ReactNode;
	onClick?: () => void;
	filled?: boolean;
	className?: string;
};

const StyledButton: React.FC<Props> = props => {
	return (
		<button
			onClick={props.onClick && props.onClick}
			className={`${props.className} ${
				!props.filled
					? ' text-yellow-light dark:text-yellow-dark hover:text-light-primary'
					: 'bg-yellow-light dark:bg-yellow-dark text-dark-secondary hover:bg-light-primary'
			} px-4 py-3 hover:border-light-primary border-2 border-yellow-light dark:border-yellow-dark rounded-xl hover:-translate-y-1 shadow-lg hover:shadow-dark-primary/20 dark:hover:shadow-light-primary/20 transition-all ease-out duration-300`}
		>
			{props.children}
		</button>
	);
};

export default StyledButton;
