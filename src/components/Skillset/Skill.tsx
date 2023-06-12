import React from 'react';
import { TSkill } from '../../../types';
import Image from 'next/image';

type Props = {
	skill: TSkill;
}

const Skill: React.FC<Props> = ({ skill }) => {
	return (
		<div
			className={'bg-dark-secondary hover:text-dark-secondary hover:bg-white hover:shadow-white/40 shadow-xl shadow-transparent rounded-full py-2 px-4 flex gap-x-4 items-center transition-all ease-out duration-300'}>
			<Image className={'w-[35px] h-[35px]'}
				   src={require(`../../assets/images/${skill.logo}`)} alt={skill.logo.split('.')[0]} />
			<div className={''}>{skill.name}</div>
		</div>
	);
};

export default Skill;