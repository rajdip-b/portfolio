import React from 'react';
import SkillStack from '@/components/Skillset/SkillStack';
import skills from '@/data/skills';
import Layout from '@/components/common/Layout';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Skillset = () => {
	return (
		<Layout title={'My Skills'} id={'skills'}>
			<div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 w-full'}>
				{skills.map((stack, index) => (
					<AnimationOnScroll animateIn={'animate__fadeInUp'} delay={index * 200}
									   className={'w-full h-[100%]'} animateOnce
									   animatePreScroll={false} key={index}>
						<SkillStack key={index} stack={stack} />
					</AnimationOnScroll>
				))}
			</div>
		</Layout>
	);
};

export default Skillset;