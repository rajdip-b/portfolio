import React from 'react';
import projects from '@/data/projects';
import ProjectItem from '@/components/Projects/ProjectItem';
import Layout from '@/components/common/Layout';

const Projects = () => {
	return (
		<Layout title="Projects" id="projects" command="ls -la ~/projects">
			<div className="flex flex-col border border-line bg-panel">
				<div className="grid grid-cols-[auto_1fr] gap-x-4 border-b border-line px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-dim md:grid-cols-[88px_1fr_auto]">
					<span>mode</span>
					<span>name</span>
					<span className="hidden md:inline">stack</span>
				</div>
				{projects.map((project, index) => (
					<ProjectItem key={project.title} project={project} index={index} />
				))}
			</div>
		</Layout>
	);
};

export default Projects;
