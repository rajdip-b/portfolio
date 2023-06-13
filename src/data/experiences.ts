import { TExperience } from '../../types';

const experiences: TExperience[] = [
	{
		title: 'Frontend Developer Intern',
		company: 'NFTVerse',
		location: 'Bengaluru, Karnataka, India',
		startDate: 'June 2022',
		endDate: 'December 2022',
		tasks: [
			'Created 2 web applications using ReactJS',
			'Created 1 mobile application using React Native and TypeScript',
			'Mirror copied Figma designs into responsive UIs',
			'Followed agile workflow in Jira',
		],
	},
	{
		title: 'Backend Developer Intern',
		company: 'HealthBarosa',
		location: 'Hyderabad, Telangana, India',
		startDate: 'April 2023',
		endDate: 'June 2023',
		tasks: [
			'Created scalable backends using SpringBoot, MySQL as database and JPA and Hibernate as ORM. Used unit testing for building fault resistant code.',
			'Used docker for delivering deployment ready containerized products.',
			'Create Terraform scripts for automating infrastructure deployment.',
			'Create pipelines using GitHub actions for automating build and deployment of frontend and backend to AWS ECS.',
			'Conducted interviews of interns.',
		],
	},
	{
		title: 'Backend Developer Intern',
		company: 'TrainingMug',
		location: 'Hyderabad, Telangana, India',
		startDate: 'December 2022',
		endDate: 'Present',
		tasks: [
			'Learned and worked on microservice architecture',
			'Created 6 microservices using SpringBoot',
			'Used RabbitMQ to interconnect microservices',
			'Used Jenkins CI/CD with GitLab to deploy staging server',
			'Dockerized services and used Kubernetes to deploy to AWS EKS',
			'Created Discord messaging integrations with Jenkins and GitLab',
			'Documented API on Postman',
			'Hosted servers on AWS and DigitalOcean',
		],
	},
	// {
	// 	title: 'Mobile App Developer Intern',
	// 	company: 'Elga Roma',
	// 	location: 'Mumbai, Maharashtra, India',
	// 	startDate: 'July 2023',
	// 	endDate: 'Present',
	// 	tasks: [
	// 		'Nothing for now',
	// 	],
	// },
];

export default experiences;