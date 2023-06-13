import React from 'react';
import localFont from 'next/font/local';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Facebook from '@mui/icons-material/Facebook';
import socials from '@/data/socials';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const orionPrime = localFont({
	src: '../../assets/fonts/Orionprimedemo.ttf',
});

const Footer = () => {
	return (
		<AnimationOnScroll animateIn={'animate__fadeIn'} animateOnce={true}
						   className={'w-screen py-16 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light-primary'}>
			<div className={'flex items-center gap-x-3 px-5 md:px-10 lg:px-20'}>
				<span className={`${orionPrime.className} text-3xl`}>R.B</span>
				<div className={'flex flex-col dark:text-gray-400 text-gray-600'}>
					<div className={'text-sm'}>Full Stack Engineer</div>
					<div className={'text-sm'}>DevOps, Cloud and</div>
				</div>
			</div>
			<div
				className={'border-y-2 dark:border-y-gray-300 border-y-gray-400 w-screen px-5 md:px-10 lg:px-20 py-10 flex md:flex-row flex-col gap-y-10 justify-between mt-5'}>
				<div className={'flex flex-col gap-y-5 md:w-1/5'}>
					<div className={'dark:text-gray-400 text-gray-600 text-sm'}>Rajdip Bhattacharya is Full Stack
						developer, Cloud
						and
						DevOps
						engineer based in Kolkata,
						India.
					</div>
					<div className={'flex gap-x-4'}>
						<a className={'p-2 rounded-full border dark:border-gray-300 border-gray-600'}
						   href={socials.linkedin}><LinkedIn /></a>
						<a className={'p-2 rounded-full border dark:border-gray-300 border-gray-600'}
						   href={socials.github}><GitHub /></a>
						<a className={'p-2 rounded-full border dark:border-gray-300 border-gray-600'}
						   href={socials.facebook}><Facebook /></a>
					</div>
				</div>
				<div
					className={'flex flex-col justify-between gap-y-5 dark:text-gray-400 text-gray-600 text-sm md:w-1/5'}>
					<div>30/17, Shib Chandra Chatterjee Street, Belurmath, Howrah - 711202, India</div>
					<div>
						<div>agentR47@gmail.com</div>
						<div>+91 70448 09651</div>
					</div>
				</div>
			</div>
			<div className={'dark:text-gray-400 text-gray-600 text-center mt-5'}>Made with <span
				className={'text-red-500 text-lg'}>&#9829;</span> by Rajdip
			</div>
		</AnimationOnScroll>
	);
};

export default Footer;