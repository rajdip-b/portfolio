import React from 'react';
import { TExperience } from '../../../types';

type Props = {
	experience: TExperience;
};

const toSha = (company: string, start: string) => {
	const seed = `${company}-${start}`;
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash << 5) - hash + seed.charCodeAt(i);
		hash |= 0;
	}
	return Math.abs(hash).toString(16).padStart(7, '0').slice(0, 7);
};

const ExperienceItem: React.FC<Props> = ({ experience }) => {
	const live = experience.endDate === 'Present';
	const slug = experience.company.toLowerCase().replace(/[^a-z0-9]+/g, '');

	return (
		<article className="relative">
			<span
				className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 ${
					live ? 'border-accent bg-accent shadow-[0_0_10px_rgba(62,224,162,0.7)]' : 'border-line bg-bg'
				}`}
			/>
			<p className="text-[12px] text-dim">
				commit <span className="text-amber">{toSha(experience.company, experience.startDate)}</span>
				<span className="mx-2 text-line">·</span>
				{experience.startDate} → {experience.endDate}
			</p>
			<h3 className="mt-1 text-lg text-fg">
				feat({slug}): {experience.title.toLowerCase()}
			</h3>
			<p className="text-sm text-cyan">
				{experience.company} <span className="text-dim">—</span> {experience.location}
			</p>
			<ul className="mt-3 space-y-1.5">
				{experience.tasks.map(task => (
					<li key={task} className="flex gap-2 text-sm text-muted">
						<span className="text-accent">+</span>
						<span>{task}</span>
					</li>
				))}
			</ul>
		</article>
	);
};

export default ExperienceItem;
