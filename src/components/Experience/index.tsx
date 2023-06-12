import React from 'react';
import experiences from '@/data/experiences';
import ExperienceItem from '@/components/Experience/ExperienceItem';
import Layout from '@/components/common/Layout';

const Experience = () => {
	return (
		<Layout title={'My Experience'} id={'experience'}>
			<div className={'flex flex-col mt-10 w-full mx-auto gap-y-16 md:gap-y-0'}>
				{experiences.map((experience, index) => <ExperienceItem key={index} experience={experience} />)}
			</div>
		</Layout>
	);
};

export default Experience;