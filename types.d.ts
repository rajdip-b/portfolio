export type TSkillStack = {
	logo: string;
	title: string;
	subtitle: string;
	skills: TSkill[];
}

export type TSkill = {
	name: string;
	logo: string;
}

export type TProject = {
	title: string;
	description: string;
	technologies: string[];
	url: string;
}

export type TExperience = {
	title: string;
	company: string;
	location: string;
	tasks: string[];
	startDate: string;
	endDate: string;
}