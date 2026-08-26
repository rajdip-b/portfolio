import { TProject } from '../../types';

const projects: TProject[] = [
	{
		title: 'Querio',
		description:
			'Add your resume, drop in a job link, and get application answers grounded in your real experience — with the source stories shown next to every draft.',
		technologies: ['NextJS', 'TypeScript', 'MongoDB', 'Mongoose', 'OpenAI', 'TailwindCSS', 'Cheerio'],
		url: 'https://querio.rajdip.dev',
	},
	{
		title: 'Website Summarizer',
		description:
			'Paste a webpage URL and get a structured brief — headline, overview, and key sections — streamed as the page is read.',
		technologies: ['NextJS', 'TypeScript', 'OpenAI', 'TailwindCSS', 'Cheerio'],
		url: 'https://summarize.rajdip.dev',
	},
	{
		title: 'Keyshade',
		description:
			'Open-source secret management tool backed by public key encryption, built to fit securely into your codebase.',
		technologies: ['NextJS', 'NestJS', 'Supabase', 'TailwindCSS', 'Prisma', 'Rust', 'TypeScript', 'Docker'],
		url: 'https://keyshade.io',
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
		title: 'Password Manager',
		description:
			'A browser-based online password manager that helps you store all your password locally on your browser.',
		technologies: ['ReactJS', 'TailwindCSS', 'TypeScript', 'Redux', 'Vite'],
		url: 'https://github.com/rajdip-b/password-manager',
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
