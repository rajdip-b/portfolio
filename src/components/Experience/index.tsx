import React from 'react';
import experiences from '@/data/experiences';
import ExperienceItem from '@/components/Experience/ExperienceItem';
import Layout from '@/components/common/Layout';

const Experience = () => {
	return (
		<Layout title="Experience" id="experience" command="git log --pretty=fuller --reverse">
			<div className="relative flex flex-col gap-8 border-l border-line pl-6">
				{experiences.map(experience => (
					<ExperienceItem key={`${experience.company}-${experience.startDate}`} experience={experience} />
				))}
			</div>
		</Layout>
	);
};

export default Experience;
