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
			className={'flex flex-col gap-y-2 w-[80%] text-white hover:bg-dark-primary hover:drop-shadow-xl py-4 px-8 rounded-xl transition-all ease-out duration-300'}>
			<div className={'flex items-center gap-x-5'}>
				<div className={'text-lg font-medium'}>{project.title}</div>
				<a href={project.url} target={'_blank'} rel={'noreferrer'}>
					<NorthEastRounded />
				</a>
			</div>
			<div className={'text-sm font-light text-gray-300'}>{project.description}</div>
			<div className={'flex flex-wrap gap-3 mt-3'}>
				{project.technologies.map((technology, index) => <Technology technology={technology} key={index} />)}
			</div>
		</div>
	);
};

export default ProjectItem;