import React from 'react';
import experiences from '@/data/experiences';
import ExperienceItem from '@/components/Experience/ExperienceItem';

const Experience = () => {
	return (
		<div className={'w-screen px-20 py-16 min-h-screen bg-dark-secondary text-white'} id={'experience'}>
			<h1 className={'text-3xl font-medium border-b-4 border-b-primary w-[30%] pb-3'}>My Experience</h1>
			<div className={'flex flex-col mt-10 w-full mx-auto'}>
				{experiences.map((experience, index) => <ExperienceItem key={index} experience={experience} />)}
			</div>
		</div>
	);
};

export default Experience;