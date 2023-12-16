import React from 'react';
import { TExperience } from '../../../types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

type Props = {
	experience: TExperience;
};

const ExperienceItem: React.FC<Props> = ({ experience }) => {
	return (
		<>
			{/*For medium and large screens*/}
			<div className={'items-center md:flex hidden'}>
				<div className={'flex flex-col gap-y-3 text-right w-3/6 mr-20'}>
					<div className={'text-lg font-semibold'}>
						<AnimationOnScroll animateIn={'animate__fadeInUp'} delay={300} animateOnce={true}>
							<span className={'dark:text-yellow-dark text-2xl font-bold'}>{experience.company}</span> |{' '}
							{experience.location}
						</AnimationOnScroll>
					</div>
					<AnimationOnScroll animateIn={'animate__fadeInUp'} delay={500} animateOnce={true}>
						<div className={'text-lg font-light'}>{experience.title}</div>
					</AnimationOnScroll>
				</div>
				<div className={'flex flex-row border-l-4 border-l-dark-primary dark:border-l-white pl-12 py-10 w-3/5'}>
					<div
						className={`-translate-x-[220%] relative min-w-[30px] h-[30px] ${
							experience.endDate === 'Present'
								? 'bg-yellow-light/40 dark:bg-yellow-dark/20'
								: 'dark:bg-light-primary/40 bg-dark-primary/40'
						} rounded-full flex items-center justify-center`}
					>
						<div
							className={`w-[15px] h-[15px] ${
								experience.endDate === 'Present'
									? 'bg-yellow-light dark:bg-yellow-dark'
									: 'dark:bg-light-primary bg-dark-primary'
							} rounded-full`}
						/>
					</div>
					<div className={'flex flex-col gap-y-5'}>
						<AnimationOnScroll
							animateOnce
							animateIn={'animate__fadeInUp'}
							delay={300}
							className={'text-lg font-semibold'}
						>
							{experience.startDate} - {experience.endDate}
						</AnimationOnScroll>
						<div className={'flex flex-col gap-y-1'}>
							{experience.tasks.map((task, index) => (
								<AnimationOnScroll
									animateOnce
									animateIn={'animate__fadeInRight'}
									delay={index * 200 + 500}
									className={'flex items-center gap-x-2 text-sm'}
									key={index}
								>
									<div
										className={
											'min-w-[5px] min-h-[5px] bg-dark-primary dark:bg-light-primary rounded-full'
										}
									/>
									{task}
								</AnimationOnScroll>
							))}
						</div>
					</div>
				</div>
			</div>

			{/*For small screens*/}
			<div className={'items-start md:hidden flex flex-col gap-y-5'}>
				<div className={'flex flex-col gap-y-2 w-full'}>
					<AnimationOnScroll
						animateOnce
						animateIn={'animate__fadeInUp'}
						delay={400}
						className={'text-xl font-semibold'}
					>
						<span className={'text-primary font-bold'}>{experience.company}</span> | {experience.location}
					</AnimationOnScroll>
					<AnimationOnScroll
						animateOnce
						animateIn={'animate_fadeInUp'}
						delay={600}
						className={'text-lg font-light'}
					>
						{experience.title}
					</AnimationOnScroll>
				</div>
				<div className={'flex flex-col gap-y-5'}>
					<AnimationOnScroll
						animateOnce
						animateIn={'animate_fadeInUp'}
						delay={800}
						className={'text-lg font-semibold'}
					>
						{experience.startDate} - {experience.endDate}
					</AnimationOnScroll>
					<div className={'flex flex-col gap-y-1'}>
						{experience.tasks.map((task, index) => (
							<AnimationOnScroll
								animateOnce
								animateIn={'animate__fadeInRight'}
								delay={index * 200 + 800}
								className={'flex items-center gap-x-2 text-sm'}
								key={index}
							>
								<div
									className={
										'min-w-[5px] min-h-[5px] bg-dark-primary dark:bg-light-primary rounded-full'
									}
								/>
								{task}
							</AnimationOnScroll>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ExperienceItem;
