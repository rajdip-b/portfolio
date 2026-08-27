import React from 'react';
import Layout from '../common/Layout';
import { OwnerDetails, PullRequest } from '../../pages/api/pull-requests';
import PullRequestItem from './PullRequestItem';
import socials from '@/data/socials';

type PR = PullRequest & { ownerDetails: OwnerDetails };

const OpenSource: React.FC = () => {
	const [prs, setPRs] = React.useState<PR[]>([]);
	const [status, setStatus] = React.useState<'loading' | 'ready' | 'error'>('loading');

	React.useEffect(() => {
		fetch('/api/pull-requests')
			.then(async res => {
				if (!res.ok) {
					throw new Error('Failed to fetch pull requests');
				}

				const {
					pullRequests,
					owners,
				}: {
					pullRequests: PullRequest[];
					owners: { [key: string]: OwnerDetails };
				} = await res.json();

				setPRs(
					pullRequests.map((pr: PullRequest) => ({
						...pr,
						ownerDetails: owners[pr.owner],
					})),
				);
				setStatus('ready');
			})
			.catch(() => {
				setStatus('error');
			});
	}, []);

	return (
		<Layout title="Open Source" id="opensource" command="gh pr list --author rajdip-b --limit 12">
			<div className="border border-line bg-panel">
				<div className="grid grid-cols-[72px_1fr_auto] gap-3 border-b border-line px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-dim">
					<span>state</span>
					<span>title</span>
					<span className="hidden sm:inline">date</span>
				</div>
				{status === 'loading' && (
					<p className="px-4 py-6 text-sm text-muted">
						<span className="text-amber">…</span> fetching pull requests
					</p>
				)}
				{status === 'error' && (
					<p className="px-4 py-6 text-sm text-rose">error: unable to load contributions right now</p>
				)}
				{prs.map(pr => (
					<PullRequestItem key={pr.id} pullRequest={pr} />
				))}
			</div>
			<a
				href={socials.github}
				target="_blank"
				rel="noopener noreferrer"
				className="mt-4 inline-block border border-line px-3 py-2 text-[12px] text-muted hover:border-accent hover:text-accent"
			>
				$ open {socials.github.replace('https://', '')}
			</a>
		</Layout>
	);
};

export default OpenSource;
