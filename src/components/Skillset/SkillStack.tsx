import React from 'react';
import { TSkillStack } from '../../../types';
import Image from 'next/image';
import Skill from '@/components/Skillset/Skill';
import { AnimationOnScroll } from 'react-animation-on-scroll';

type Props = {
	stack: TSkillStack;
}

const SkillStack: React.FC<Props> = ({ stack }) => {
	return (
		<div
			className={`rounded-lg bg-light-primary dark:bg-dark-primary h-full py-10 px-16 w-full items-center justify-start flex flex-col gap-y-5 hover:drop-shadow-2xl drop-shadow transition-all ease-out duration-300`}>
			<Image width={70} height={70} src={require(`../../assets/images/${stack.logo}`)}
				   alt={stack.logo.split('.')[0]} />
			<div className={'text-xl font-semibold text-center'}>{stack.title}</div>
			<div className={'text-center'}>{stack.subtitle}</div>
			<div
				className={'flex gap-3 cursor-pointer my-5 w-full flex-wrap items-center justify-center'}>
				{
					stack.skills.map((skill, index) => (
						<AnimationOnScroll key={index} animateIn={'animate__fadeInRight'} animateOnce
										   delay={index * 200}>
							<Skill skill={skill} />
						</AnimationOnScroll>
					))
				}
			</div>
		</div>
	);
};

export default SkillStack;