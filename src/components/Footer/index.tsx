import React from 'react';
import localFont from 'next/font/local';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Facebook from '@mui/icons-material/Facebook';
import socials from '@/data/socials';

const orionPrime = localFont({
	src: '../../assets/fonts/Orionprimedemo.ttf',
});

const Footer = () => {
	return (
		<div className={'w-screen py-16 bg-dark-secondary text-white'}>
			<div className={'flex items-center gap-x-3 px-5 md:px-10 lg:px-20'}>
				<span className={`${orionPrime.className} text-3xl`}>R.B</span>
				<div className={'flex flex-col text-gray-400'}>
					<div className={'text-sm'}>Full Stack Engineer</div>
					<div className={'text-sm'}>DevOps, Cloud and</div>
				</div>
			</div>
			<div
				className={'border-y-2 w-screen px-5 md:px-10 lg:px-20 py-10 flex md:flex-row flex-col gap-y-10 justify-between mt-5'}>
				<div className={'flex flex-col gap-y-5 md:w-1/5'}>
					<div className={'text-gray-400 text-sm'}>Rajdip Bhattacharya is Full Stack developer, Cloud
						and
						DevOps
						engineer based in Kolkata,
						India.
					</div>
					<div className={'flex gap-x-4'}>
						<a className={'p-2 rounded-full border border-gray-300'}
						   href={socials.linkedin}><LinkedIn /></a>
						<a className={'p-2 rounded-full border border-gray-300'} href={socials.github}><GitHub /></a>
						<a className={'p-2 rounded-full border border-gray-300'}
						   href={socials.facebook}><Facebook /></a>
					</div>
				</div>
				<div className={'flex flex-col justify-between gap-y-5 text-gray-400 text-sm md:w-1/5'}>
					<div>30/17, Shib Chandra Chatterjee Street, Belurmath, Howrah - 711202, India</div>
					<div>
						<div>agentR47@gmail.com</div>
						<div>+91 70448 09651</div>
					</div>
				</div>
			</div>
			<div className={'text-gray-300 text-center mt-5'}>Made with <span
				className={'text-red-500 text-lg'}>&#9829;</span> by Rajdip
			</div>
		</div>
	);
};

export default Footer;