import React from 'react';
import Layout from '../common/Layout';
import { OwnerDetails, PullRequest } from '../../pages/api/pull-requests';
import axios from 'axios';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import PullRequestItem from './PullRequestItem';
import GitHub from '@mui/icons-material/GitHub';

type PR = PullRequest & { ownerDetails: OwnerDetails };

const OpenSource: React.FC = () => {
	const [prs, setPRs] = React.useState<PR[]>([]);

	React.useEffect(() => {
		axios
			.get('/api/pull-requests')
			.then(res => {
				const {
					pullRequests,
					owners,
				}: {
					pullRequests: PullRequest[];
					owners: { [key: string]: OwnerDetails };
				} = res.data;
				const prsWithOwner = pullRequests.map((pr: PullRequest) => {
					const ownerDetails = owners[pr.owner];
					return { ...pr, ownerDetails };
				});
				console.log(prsWithOwner);
				setPRs(prsWithOwner);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<Layout className="h-fit" title={'My Open Source Contributions'} id={'opensource'}>
			<div
				className={
					'grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-10 w-full mx-auto gap-x-5 lg:gap-x-16 gap-y-5'
				}
			>
				{prs.length === 0 && <div>Loading...</div>}
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
