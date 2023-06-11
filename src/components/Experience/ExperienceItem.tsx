import React from 'react';
import { TExperience } from '../../../types';

type Props = {
	experience: TExperience;
}

const ExperienceItem: React.FC<Props> = ({ experience }) => {
	return (
		<div className={'flex items-center'}>
			<div className={'flex flex-col gap-y-3 text-right w-3/6 mr-20'}>
				<div className={'text-xl font-semibold'}>
					<span className={'text-primary font-bold'}>{experience.company}</span> | {experience.location}
				</div>
				<div className={'text-lg font-light'}>{experience.title}</div>
			</div>
			<div className={'flex flex-row border-l-4 border-l-white pl-12 py-10 w-3/5'}>
				<div
					className={'-translate-x-[220%] relative min-w-[30px] h-[30px] bg-primary/20 rounded-full flex items-center justify-center'}>
					<div className={'w-[15px] h-[15px] bg-primary rounded-full'} />
				</div>
				<div className={'flex flex-col gap-y-5'}>

					<div className={'text-lg font-semibold'}>
						{experience.startDate} - {experience.endDate}
					</div>
					<div className={'flex flex-col gap-y-1'}>
						{experience.tasks.map((task, index) => <div className={'flex items-center gap-x-2 text-sm'}
																	key={index}>
							<div
								className={'w-[5px] h-[5px] bg-white rounded-full'} />
							{task}</div>)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceItem;