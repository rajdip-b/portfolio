import React from 'react';
import Prompt from '@/components/shell/Prompt';

type Props = {
	title: string;
	id: string;
	command?: string;
	cwd?: string;
	children?: React.ReactNode;
	className?: string;
};

const Layout: React.FC<Props> = ({ title, id, children, className, command, cwd }) => {
	return (
		<section id={id} className={`px-4 py-10 md:px-6 md:py-14 ${className ?? ''}`}>
			<div className="mx-auto max-w-6xl">
				<div className="mb-6 border-b border-line pb-4">
					<Prompt cwd={cwd ?? `~/${id}`} command={command ?? `cat ${title.toLowerCase().replace(/\s+/g, '_')}.md`} />
					<h2 className="mt-2 text-2xl text-fg md:text-3xl">
						<span className="text-comment">{'// '}</span>
						{title}
					</h2>
				</div>
				{children}
			</div>
		</section>
	);
};

export default Layout;
