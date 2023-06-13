import React from 'react';
import Image from 'next/image';
import StyledButton from '@/components/common/StyledButton';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import Link from 'next/link';

const Hero = () => {
	return (
		<div
			id={'home'}
			className={'md:pt-[120px] h-screen w-screen px-5 md:px-10 lg:px-20 flex bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary items-center md:gap-x-10 lg:gap-x-20 justify-between'}>
			<div className={'md:w-3/4 lg:w-2/4 flex flex-col gap-y-8'}>
				<h1 className={'text-4xl md:text-5xl lg:text-6xl font-bold'}>Hey, I am <span
					className={'text-yellow-light dark:yellow-light'}>Rajdip</span></h1>
				<h2 className={'text-xl md:text-2xl lg:text-3xl font-semibold'}>I am A Full-stack Developer based in
					Kolkata,
					India.</h2>
				<h3 className={''}>Developer with over <span>2 years of experience</span> in
					industry-level application development
					and an undying love towards football and black coffee.
				</h3>
				<Link scroll={false} href={'#contact'}>
					<StyledButton className={'w-[200px]'} filled>
						<div>
							<span>Hire Me</span>
							<ArrowForwardRounded />
						</div>
					</StyledButton>
				</Link>
				<Image
					alt={'scroll'}
					src={require('../../assets/images/scroll-down-white.svg')}
					className={'translate-y-20 hidden dark:md:block dark:visible'}
				/>
				<Image
					alt={'scroll'}
					src={require('../../assets/images/scroll-down-black.svg')}
					className={'translate-y-20 hidden md:block dark:hidden'}
				/>
			</div>
			<div className={'w-1/4 md:block hidden'}>
				<Image className={'min-w-300px]'} alt={'hero'} src={require('../../assets/images/hero.svg')} />
			</div>
		</div>
	);
};

export default Hero;