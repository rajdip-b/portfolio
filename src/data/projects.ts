import { TProject } from '../../types';

const projects: TProject[] = [
	{
		title: 'keyshade.xyz',
		description:
			'Manage all your secrets securely with public key encryption and realtime based tools, that seamlessly fits into your codebase ',
		technologies: ['NextJS', 'NestJS', 'Supabase', 'TailwindCSS', 'Java', 'Rust', 'TypeScript', 'Docker'],
		url: 'https://github.com/keyshade-xyz/keyshade',
	},
	{
		title: 'URL Shortener',
		description:
			'This is a simple project made using ReactJS and SpringBoot to demonstrate the working of an URL shortener. The application takes an URL from the user and then generates a smaller URL by hashing it in the backend. The generated URL can be used to get to the original page. ',
		technologies: [
			'TypeScript',
			'ReactJS',
			'SpringBoot',
			'NextJS',
			'Apache Cassandra',
			'TailwindCSS',
			'Docker',
			'Java',
			'Hibernate',
		],
		url: 'https://github.com/rajdip-b/url-shortener',
	},
	{
		title: 'Bookstore Microservice',
		description: 'This is a microservice application created using Spring Boot and Spring Cloud',
		technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Hibernate'],
		url: 'https://github.com/rajdip-b/bookstore-microservice',
	},
	{
		title: 'S3 Drive',
		description:
			'This project makes the use of an Amazon S3 bucket to mimic the functions of a storage device like GDrive or Dropbox. It exposes a simplistic menu-driven CLI which guides the users through the various functions of the application.',
		technologies: ['Java', 'Amazon S3', 'AWS SDK', 'SpringBoot'],
		url: 'https://github.com/rajdip-b/s3-drive',
	},
	{
		title: 'Expense Tracker',
		description:
			'An app built using React Native, Typescript and Expo that helps you visualize your expenses in a nice and tidy manner',
		technologies: ['React Native', 'TypeScript', 'Expo', 'TailwindCSS', 'Redux'],
		url: 'https://github.com/rajdip-b/expense-tracker',
	},
	{
		title: 'Bookstore',
		description:
			'An application built with ReactJS and SpringBoot that mimics the functionality of any E-Commerce website, just that you can only buy books. It exposes both admin and user sides of the application.',
		technologies: ['ReactJS', 'ExpressJS', 'TailwindCSS', 'MongoDB', 'Mongoose', 'Redux', 'TypeScript', 'Docker'],
		url: 'https://github.com/rajdip-b/bookstore',
	},
	{
		title: 'Password Manager',
		description:
			'A browser-based online password manager that helps you store all your password locally on your browser.',
		technologies: ['ReactJS', 'TailwindCSS', 'TypeScript', 'Redux', 'Vite'],
		url: 'https://github.com/rajdip-b/password-manager',
	},
	{
		title: 'Todo App',
		description: 'A todo application built on the Ethereum blockchain',
		technologies: ['Solidity', 'ReactJS', 'TypeScript', 'TailwindCSS', 'Ethers.js', 'Truffle'],
		url: 'https://github.com/rajdip-b/todo-app-blockchain',
	},
	{
		title: 'KodeIt',
		description:
			'KodeIt is an online coding platform where you can write and compile basically any kind of code that you like.',
		technologies: ['ReactJS', 'TypeScript', 'TailwindCSS', 'SpringBoot', 'MySQL', 'Hibernate', 'Redux'],
		url: 'https://github.com/KodeIt',
	},
];

export default projects;
