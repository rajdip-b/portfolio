import React from 'react';
import LightModeRounded from '@mui/icons-material/LightModeRounded';
import DarkModeRounded from '@mui/icons-material/DarkModeRounded';

type Props = {
	onToggleMode: () => void;
}

const DarkModeToggler: React.FC<Props> = ({ onToggleMode }) => {
	return (
		<button onClick={onToggleMode}
				className={'rounded-full dark:bg-yellow-dark bg-yellow-light py-1 px-2 w-[60px] flex items-start dark:pl-[30px] transition-all ease-in-out duration-300'}>
			<div className={'dark:hidden block text-dark-primary'}>
				<LightModeRounded />
			</div>
			<div className={'dark:block hidden text-light-primary'}>
				<DarkModeRounded />
			</div>
		</button>
	);
};

export default DarkModeToggler;