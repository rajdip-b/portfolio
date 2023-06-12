import React from 'react';

type Props = {
	title: string;
	id: string;
	children?: React.ReactNode;
	className?: string;
}

const Layout: React.FC<Props> = ({ title, id, children, className }) => {
	return (
		<div
			className={`w-screen px-5 md:px-10 lg:px-20 py-8 md:py-16 bg-dark-secondary text-white ${className ? className : 'min-h-screen'} `}
			id={id}>
			<h2 className={'text-3xl font-medium border-b-4 border-b-primary w-[70%] md:w-[40%] lg:w-[30%] pb-3'}>{title}</h2>
			{children}
		</div>
	);
};

export default Layout;