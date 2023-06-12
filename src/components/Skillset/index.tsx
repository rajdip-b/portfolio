import React from 'react';
import SkillStack from '@/components/Skillset/SkillStack';
import skills from '@/data/skills';
import Layout from '@/components/common/Layout';

const Skillset = () => {
	return (
		<Layout title={'My Skills'} id={'skills'}>
			<div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 w-full'}>
				{skills.map((stack, index) => <SkillStack key={index} stack={stack} />)}
			</div>
		</Layout>
	);
};

export default Skillset;