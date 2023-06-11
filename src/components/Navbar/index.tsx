import React from 'react';
import localFont from 'next/font/local';
import Link from 'next/link';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import GitHub from '@mui/icons-material/GitHub';
import { useRouter } from 'next/router';

const links = [
	{
		name: 'Home',
		href: '#home',
	},
	{
		name: 'Skills',
		href: '#skills',
	},
	{
		name: 'Projects',
		href: '#projects',
	},
	{
		name: 'Experience',
		href: '#experience',
	},
	{
		name: 'Contact',
		href: '#contact',
	},
];

const orionPrime = localFont({
	src: '../../assets/fonts/Orionprimedemo.ttf',
});

const Navbar = () => {
	const router = useRouter();

	return (
		<div className={'w-screen px-20 bg-dark-primary py-10 flex justify-between text-white'}>
			<span className={`${orionPrime.className}`}>R.B</span>
			<div className={'flex gap-x-8'}>
				{
					links.map((link, index) => (
						<Link
							scroll={false}
							className={`${router.asPath.split('/')[1] === link.href ? 'text-primary' : 'text-white'} transition-all ease-out duration-300`}
							href={link.href} key={index}>{link.name}</Link>
					))
				}
			</div>
			<div className={'flex gap-x-4'}>
				<a href={''}><LinkedIn /></a>
				<a href={''}><GitHub /></a>
				<a href={''}><Facebook /></a>
			</div>
		</div>
	);
};

export default Navbar;