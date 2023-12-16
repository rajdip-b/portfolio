import React from 'react';

type Props = {
	technology: string;
};

const Technology: React.FC<Props> = ({ technology }) => {
	return (
		<div
			className={
				'px-4 py-2 dark:bg-yellow-dark/20 bg-yellow-light/20 text-sm cursor-pointer dark:text-yellow-dark text-dark-primary dark:text-primary rounded-full'
			}
		>
			{technology}
		</div>
	);
};

export default Technology;
