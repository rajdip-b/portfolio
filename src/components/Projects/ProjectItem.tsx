import React from 'react';
import { TProject } from '../../../types';
import NorthEastRounded from '@mui/icons-material/NorthEastRounded';
import Technology from '@/components/Projects/Technology';
import { AnimationOnScroll } from 'react-animation-on-scroll';

type Props = {
	project: TProject;
};

const ProjectItem: React.FC<Props> = ({ project }) => {
	return (
		<div
			className={
				'flex flex-col gap-y-2 w-full md:w-[90%] lg:w-[80%] text-dark-primary dark:text-white hover:bg-light-primary dark:hover:bg-dark-primary hover:drop-shadow-xl py-4 px-4 md:px-8 rounded-xl transition-all ease-out duration-300'
			}
		>
			<div className={'flex items-center gap-x-5'}>
				<AnimationOnScroll animateIn={'animate__fadeInUp'} animateOnce={true}>
					<h2 className={'text-lg font-medium'}>{project.title}</h2>
				</AnimationOnScroll>
				<a href={project.url} target={'_blank'} rel={'noreferrer'}>
					<NorthEastRounded />
				</a>
			</div>
			<AnimationOnScroll animateIn={'animate__fadeInUp'} delay={300} animateOnce={true}>
				<h3 className={'text-sm font-light text-gray-600 dark:text-gray-300'}>{project.description}</h3>
			</AnimationOnScroll>
			<div className={'flex flex-wrap gap-3 mt-3'}>
				{project.technologies.map((technology, index) => (
					<AnimationOnScroll
						key={index}
						animateIn={'animate__fadeInUp'}
						delay={index * 200}
						animateOnce={true}
					>
						<Technology technology={technology} />
					</AnimationOnScroll>
				))}
			</div>
		</div>
	);
};

export default ProjectItem;
