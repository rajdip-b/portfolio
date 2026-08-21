import { TExperience } from '../../types';

const experiences: TExperience[] = [
	{
		title: 'Software Engineering Specialist',
		company: 'xAI',
		location: 'Bay Area, San Francisco, USA',
		startDate: 'May 2026',
		endDate: 'Present',
		tasks: [
			'Evaluated AI-generated code for correctness, architectural compliance, and production readiness.',
			'Delivered structured human feedback on model outputs for software engineering tasks.',
			'Identified failure modes and edge cases that improved training data quality.',
			"Tested Grok's reasoning and implementation quality across multiple critical tasks in various projects.",
		],
	},
	{
		title: 'Backend Developer',
		company: 'FalschParker',
		location: 'Zurich, Switzerland',
		startDate: 'September 2024',
		endDate: 'July 2026',
		tasks: [
			'Owned development and maintenance of a PHP-based backend application.',
			'Managed end-to-end deployments on AWS ECS and Heroku using GitHub Actions.',
			'Migrated DNS management from GoDaddy onto AWS Route53, increasing visibility.',
			'Led migration of PHP backend to a scalable, high-performance Go application.',
			'Optimized data layer for query performance, readability and better organization.',
		],
	},
	{
		title: 'Backend Developer Intern',
		company: 'TrainingMug',
		location: 'Hyderabad, Telangana, India',
		startDate: 'December 2022',
		endDate: 'August 2024',
		tasks: [
			'Developed 6 SpringBoot microservices, adhering to microservice principles.',
			'Managed hosting of a self-hosted GitLab EC2 instance for internal operations.',
			'Implemented an end-to-end automation process with Jenkins and GitLab, containerized services using Docker, and deployed on AWS EKS via Kubernetes, achieving a 40% increase in deployment efficiency.',
		],
	},
	{
		title: 'Backend Developer Intern',
		company: 'ElgaRoma',
		location: 'Pune, Maharashtra, India',
		startDate: 'July 2023',
		endDate: 'August 2023',
		tasks: [
			'Put together one SpringBoot app integrating MongoDB and AWS S3 for flexible data storage.',
			'Streamlined deployment with Docker and GitHub, achieving better productivity by 20%.',
			'Developed one Python Lambda function for media-to-thumbnail conversion and Terraform for AWS service management, enhancing scalability and reducing workload by 60%.',
		],
	},
	{
		title: 'Backend Developer Intern',
		company: 'HealthBarosa',
		location: 'Hyderabad, Telangana, India',
		startDate: 'March 2023',
		endDate: 'May 2023',
		tasks: [
			'Created one scalable backend with SpringBoot, MySQL, and JPA/Hibernate for efficient data management and high performance.',
			'Implemented unit testing for fault-resistant code, reducing testing times by 70%.',
			'Utilized Docker for streamlined production deployment, automated infrastructure with Terraform, and optimized release cycles using GitHub Actions, reducing workload by nearly 70%.',
		],
	},
];

export default experiences;
