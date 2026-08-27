import React from 'react';

type Props = {
	cwd?: string;
	command?: string;
	className?: string;
};

const Prompt: React.FC<Props> = ({ cwd = '~', command, className }) => {
	return (
		<div className={`flex flex-wrap items-baseline gap-x-2 ${className ?? ''}`}>
			<span className="text-accent">raj@rajdip.dev</span>
			<span className="text-dim">:</span>
			<span className="text-cyan">{cwd}</span>
			<span className="text-fg">$</span>
			{command !== undefined && <span className="text-fg">{command}</span>}
		</div>
	);
};

export default Prompt;
