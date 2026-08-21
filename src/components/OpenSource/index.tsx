import React from 'react';
import Layout from '../common/Layout';
import { OwnerDetails, PullRequest } from '../../pages/api/pull-requests';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import PullRequestItem from './PullRequestItem';
import GitHub from '@mui/icons-material/GitHub';

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
		<Layout className="h-fit" title={'My Open Source Contributions'} id={'opensource'}>
			<div
				className={
					'grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-10 w-full mx-auto gap-x-5 lg:gap-x-16 gap-y-5'
				}
			>
				{status === 'loading' && <div>Loading...</div>}
				{status === 'error' && <div>Unable to load contributions right now.</div>}
				{prs.map((pr, index) => (
					<AnimationOnScroll
						animateIn={'animate__fadeInUp'}
						delay={index * 200}
						animateOnce={true}
						key={index}
					>
						<PullRequestItem key={index} pullRequest={pr} />
					</AnimationOnScroll>
				))}
			</div>
			<div className="mx-auto mt-5 w-full items-center flex">
				<a
					className={
						'p-2 w-[300px] mx-auto text-center rounded-full border dark:border-gray-300 border-gray-600'
					}
					href={'https://github.com/rajdip-b'}
					rel="noopener"
				>
					<GitHub />
					<span>See all on GitHub</span>
				</a>
			</div>
		</Layout>
	);
};

export default OpenSource;
