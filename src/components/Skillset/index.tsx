import React from 'react';
import skills from '@/data/skills';
import Layout from '@/components/common/Layout';
import SkillStack from '@/components/Skillset/SkillStack';

const Skillset = () => {
	return (
		<Layout title="Skills" id="skills" command="tree ~/skills --dirsfirst">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{skills.map(stack => (
					<SkillStack key={stack.title} stack={stack} />
				))}
			</div>
		</Layout>
	);
};

export default Skillset;
