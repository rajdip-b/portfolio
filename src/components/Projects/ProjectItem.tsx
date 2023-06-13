import React from 'react';
import { TProject } from '../../../types';
import NorthEastRounded from '@mui/icons-material/NorthEastRounded';
import Technology from '@/components/Projects/Technology';

type Props = {
	project: TProject;
}

const ProjectItem: React.FC<Props> = ({ project }) => {
	return (
		<div
			className={'flex flex-col gap-y-2 w-full md:w-[90%] lg:w-[80%] text-dark-primary dark:text-white hover:bg-light-primary dark:hover:bg-dark-primary hover:drop-shadow-xl py-4 px-4 md:px-8 rounded-xl transition-all ease-out duration-300'}>
			<div className={'flex items-center gap-x-5'}>
				<h1 className={'text-lg font-medium'}>{project.title}</h1>
				<a href={project.url} target={'_blank'} rel={'noreferrer'}>
					<NorthEastRounded />
				</a>
			</div>
			<h3 className={'text-sm font-light text-gray-600 dark:text-gray-300'}>{project.description}</h3>
			<div className={'flex flex-wrap gap-3 mt-3'}>
				{project.technologies.map((technology, index) => <Technology technology={technology} key={index} />)}
			</div>
		</div>
	);
};

export default ProjectItem;