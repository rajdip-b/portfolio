import React from 'react';
import { TSkill } from '../../../types';
import Image from 'next/image';

type Props = {
	skill: TSkill;
}

const Skill: React.FC<Props> = ({ skill }) => {
	return (
		<div
			className={'bg-light-secondary dark:bg-dark-secondary hover:text-light-secondary dark:hover:text-dark-primary dark:hover:bg-light-primary hover:bg-dark-primary hover:shadow-dark-primary/40 dark:hover:shadow-white/40 shadow-2xl shadow-transparent rounded-full py-2 px-4 flex gap-x-4 items-center transition-all ease-out duration-300'}>
			<Image className={'w-[35px] h-[35px]'}
				   src={require(`../../assets/images/${skill.logo}`)} alt={skill.logo.split('.')[0]} />
			<div className={''}>{skill.name}</div>
		</div>
	);
};

export default Skill;