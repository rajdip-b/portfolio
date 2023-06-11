import React from 'react';
import SkillStack from '@/components/Skillset/SkillStack';
import skills from '@/data/skills';

const Skillset = () => {
	return (
		<div className={'w-screen px-20 py-16 min-h-screen bg-dark-secondary text-white'} id={'skills'}>
			<h1 className={'text-3xl font-medium border-b-4 border-b-primary w-[30%] pb-3'}>My Skills</h1>
			<div className={'grid grid-cols-3 gap-16 mt-10 w-full'}>
				{skills.map((stack, index) => <SkillStack key={index} stack={stack} />)}
			</div>
		</div>
	);
};

export default Skillset;