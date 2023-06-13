import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

type Props = {
	title: string;
	id: string;
	children?: React.ReactNode;
	className?: string;
}

const Layout: React.FC<Props> = ({ title, id, children, className }) => {
	return (
		<div
			className={`w-screen px-5 md:px-10 lg:px-20 py-8 md:py-16 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light-primary ${className ? className : 'min-h-screen'} `}
			id={id}>
			<AnimationOnScroll animateIn={'animate__fadeInUp'} animateOnce animatePreScroll={false}>
				<h2 className={'text-3xl font-medium border-b-4 border-b-yellow-light dark:border-b-yellow-dark w-[70%] md:w-[40%] lg:w-[30%] pb-3'}>{title}</h2>
			</AnimationOnScroll>
			{children}
		</div>
	);
};

export default Layout;