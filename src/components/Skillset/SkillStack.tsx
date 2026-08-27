import React from 'react';
import { TSkillStack } from '../../../types';

type Props = {
	stack: TSkillStack;
};

const SkillStack: React.FC<Props> = ({ stack }) => {
	const dir = stack.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

	return (
		<article className="border border-line bg-panel p-4 hover:border-accent/50">
			<p className="text-[12px] text-accent">
				drwxr-xr-x <span className="text-cyan">{dir}/</span>
			</p>
			<p className="mt-2 text-sm text-muted">{stack.subtitle}</p>
			<ul className="mt-4 flex flex-wrap gap-2">
				{stack.skills.map(skill => (
					<li
						key={skill.name}
						className="border border-line bg-raised px-2 py-1 text-[12px] text-fg hover:border-accent hover:text-accent"
					>
						{skill.name.toLowerCase().replace(/\s+/g, '-')}
					</li>
				))}
			</ul>
		</article>
	);
};

export default SkillStack;
