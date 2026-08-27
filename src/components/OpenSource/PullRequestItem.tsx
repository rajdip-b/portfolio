import React from 'react';
import { OwnerDetails, PullRequest } from '../../pages/api/pull-requests';
import Link from 'next/link';

type PR = PullRequest & { ownerDetails: OwnerDetails };

type Props = {
	pullRequest: PR;
};

const PullRequestItem: React.FC<Props> = ({ pullRequest }) => {
	const date = pullRequest.createdAt
		? new Date(pullRequest.createdAt).toLocaleDateString('en-US', {
				month: 'short',
				day: '2-digit',
				year: 'numeric',
		  })
		: '';

	return (
		<article className="grid grid-cols-1 gap-1 border-b border-line px-4 py-3 last:border-b-0 hover:bg-raised sm:grid-cols-[72px_1fr_auto] sm:items-start sm:gap-3">
			<p className={`text-[11px] uppercase tracking-[0.12em] ${pullRequest.isOpen ? 'text-amber' : 'text-accent'}`}>
				{pullRequest.isOpen ? 'open' : 'merged'}
			</p>
			<div className="min-w-0">
				<p className="text-[12px] text-cyan">{pullRequest.owner}</p>
				<Link
					href={pullRequest.pullRequest.url}
					target="_blank"
					rel="noreferrer"
					className="block break-words text-sm text-fg hover:text-accent"
				>
					{pullRequest.title}
				</Link>
			</div>
			<p className="text-[12px] text-dim sm:text-right">{date}</p>
		</article>
	);
};

export default PullRequestItem;
