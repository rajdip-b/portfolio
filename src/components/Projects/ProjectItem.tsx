import React from 'react';
import { TProject } from '../../../types';

type Props = {
	project: TProject;
	index: number;
};

const slug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const ProjectItem: React.FC<Props> = ({ project, index }) => {
	return (
		<article className="grid grid-cols-1 gap-2 border-b border-line px-4 py-4 last:border-b-0 hover:bg-raised md:grid-cols-[88px_1fr_auto] md:items-start">
			<p className="text-[12px] text-accent">-rwxr-x</p>
			<div className="min-w-0">
				<a
					href={project.url}
					target="_blank"
					rel="noreferrer"
					className="break-words text-fg hover:text-accent"
				>
					<span className="text-dim">{String(index + 1).padStart(2, '0')} </span>
					{slug(project.title)}
					<span className="text-comment"> # {project.title}</span>
					<span className="ml-2 text-[12px] text-cyan">↗ {project.url.replace(/^https?:\/\//, '')}</span>
				</a>
				<p className="mt-2 max-w-3xl text-sm text-muted">{project.description}</p>
			</div>
			<ul className="flex flex-wrap gap-1 md:max-w-xs md:justify-end">
				{project.technologies.map(tech => (
					<li key={tech} className="border border-line px-1.5 py-0.5 text-[11px] text-comment">
						{tech}
					</li>
				))}
			</ul>
		</article>
	);
};

export default ProjectItem;
