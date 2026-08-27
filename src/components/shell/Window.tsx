import React from 'react';

type Props = {
	title: string;
	children: React.ReactNode;
	className?: string;
	bodyClassName?: string;
	aside?: React.ReactNode;
};

const Window: React.FC<Props> = ({ title, children, className, bodyClassName, aside }) => {
	return (
		<section className={`flex h-full flex-col border border-line bg-panel/90 shadow-glow ${className ?? ''}`}>
			<header className="flex items-center justify-between gap-3 border-b border-line px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-dim">
				<div className="flex min-w-0 items-center gap-2">
					<span className="flex items-center gap-1" aria-hidden>
						<span className="h-2.5 w-2.5 rounded-full bg-rose/80" />
						<span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
						<span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
					</span>
					<span className="truncate normal-case tracking-normal text-muted">{title}</span>
				</div>
				{aside}
			</header>
			<div className={bodyClassName ?? 'flex-1 p-4 md:p-5'}>{children}</div>
		</section>
	);
};

export default Window;
