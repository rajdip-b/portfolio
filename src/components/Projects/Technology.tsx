import React from 'react';

type Props = {
	technology: string;
}

const Technology: React.FC<Props> = ({ technology }) => {
	return (
		<div className={'px-4 py-2 bg-primary/10 text-sm cursor-pointer text-primary rounded-full'}>
			{technology}
		</div>
	);
};

export default Technology;