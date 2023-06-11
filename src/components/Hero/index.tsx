import React from 'react';
import Image from 'next/image';
import StyledButton from '@/components/common/StyledButton';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';

const Hero = () => {
	return (
		<div
			id={'home'}
			className={'h-screen w-screen px-20 flex bg-dark-primary text-white items-center gap-x-20 justify-between'}>
			<div className={'w-2/4 flex flex-col gap-y-8'}>
				<div className={'text-6xl font-bold'}>Hey, I am <span className={'text-primary'}>Rajdip</span></div>
				<div className={'text-2xl font-semibold'}>I am A Full-stack Developer based in Kolkata, India.</div>
				<div>Developer with over <span>2 years of experience</span> in industry-level application development
					and an undying love towards football and black coffee.
				</div>
				<StyledButton className={'w-[200px]'} filled>
					<div>
						<span>Hire Me</span>
						<ArrowForwardRounded />
					</div>
				</StyledButton>
				<Image alt={''} src={require('../../assets/images/scrolldown.svg')} className={'translate-y-20'} />
			</div>
			<div className={'w-1/4'}>
				<Image alt={''} src={require('../../assets/images/hero.svg')} />
			</div>
		</div>
	);
};

export default Hero;