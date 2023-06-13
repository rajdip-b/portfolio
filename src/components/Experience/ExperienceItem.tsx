import React from 'react';
import { TExperience } from '../../../types';

type Props = {
	experience: TExperience;
}

const ExperienceItem: React.FC<Props> = ({ experience }) => {
	return (
		<>
			{/*For medium and large screens*/}
			<div className={'items-center md:flex hidden'}>
				<div className={'flex flex-col gap-y-3 text-right w-3/6 mr-20'}>
					<div className={'text-lg font-semibold'}>
						<span
							className={'dark:text-yellow-dark text-2xl font-bold'}>{experience.company}</span> | {experience.location}
					</div>
					<div className={'text-lg font-light'}>{experience.title}</div>
				</div>
				<div className={'flex flex-row border-l-4 border-l-dark-primary dark:border-l-white pl-12 py-10 w-3/5'}>
					<div
						className={`-translate-x-[220%] relative min-w-[30px] h-[30px] ${experience.endDate === 'Present' ? 'bg-yellow-light/40 dark:bg-yellow-dark/20' : 'dark:bg-light-primary/40 bg-dark-primary/40'} rounded-full flex items-center justify-center`}>
						<div
							className={`w-[15px] h-[15px] ${experience.endDate === 'Present' ? 'bg-yellow-light dark:bg-yellow-dark' : 'dark:bg-light-primary bg-dark-primary'} rounded-full`} />
					</div>
					<div className={'flex flex-col gap-y-5'}>
						<div className={'text-lg font-semibold'}>
							{experience.startDate} - {experience.endDate}
						</div>
						<div className={'flex flex-col gap-y-1'}>
							{experience.tasks.map((task, index) => (
								<div className={'flex items-center gap-x-2 text-sm'} key={index}>
									<div
										className={'min-w-[5px] min-h-[5px] bg-dark-primary dark:bg-light-primary rounded-full'} />
									{task}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/*For small screens*/}
			<div className={'items-start md:hidden flex flex-col gap-y-5'}>
				<div className={'flex flex-col gap-y-2 w-full'}>
					<div className={'text-xl font-semibold'}>
						<span className={'text-primary font-bold'}>{experience.company}</span> | {experience.location}
					</div>
					<div className={'text-lg font-light'}>{experience.title}</div>
				</div>
				<div className={'flex flex-col gap-y-5'}>
					<div className={'text-lg font-semibold'}>
						{experience.startDate} - {experience.endDate}
					</div>
					<div className={'flex flex-col gap-y-1'}>
						{experience.tasks.map((task, index) => (
							<div className={'flex items-center gap-x-2 text-sm'} key={index}>
								<div className={'min-w-[5px] min-h-[5px] bg-light-primary rounded-full'} />
								{task}
							</div>
						))}
					</div>
				</div>
			</div>

		</>
	);
};

export default ExperienceItem;