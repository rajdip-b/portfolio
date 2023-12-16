import React from 'react';
import projects from '@/data/projects';
import ProjectItem from '@/components/Projects/ProjectItem';
import Layout from '@/components/common/Layout';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Projects = () => {
	return (
		<Layout title={'My Projects'} id={'projects'}>
			<div className={'grid grid-cols-1 md:grid-cols-2 gap-x-5 lg:gap-x-16 gap-y-5 mt-10 w-full'}>
				{projects.map((project, index) => (
					<AnimationOnScroll
						animateIn={index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'}
						animateOnce={true}
						key={index}
					>
						<ProjectItem key={index} project={project} />
					</AnimationOnScroll>
				))}
			</div>
		</Layout>
	);
};

export default Projects;
