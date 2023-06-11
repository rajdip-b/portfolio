import React from 'react';
import projects from '@/data/projects';
import ProjectItem from '@/components/Projects/ProjectItem';

const Projects = () => {
	return (
		<div className={'w-screen px-20 py-16 min-h-screen bg-dark-secondary text-white'} id={'projects'}>
			<h1 className={'text-3xl font-medium border-b-4 border-b-primary w-[30%] pb-3'}>My Projects</h1>
			<div className={'grid grid-cols-2 gap-x-16 gap-y-5 mt-10 w-full'}>
				{projects.map((project, index) => <ProjectItem key={index} project={project} />)}
			</div>
		</div>
	);
};

export default Projects;