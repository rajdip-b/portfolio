import { AnimationOnScroll } from 'react-animation-on-scroll';
import { OwnerDetails, PullRequest } from '../../pages/api/pull-requests';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

type PR = PullRequest & { ownerDetails: OwnerDetails };

type Props = {
	pullRequest: PR;
};

const PullRequestItem: React.FC<Props> = ({ pullRequest }) => {
	return (
		<div
			className={
				'flex gap-x-5 w-full justify-between text-dark-primary dark:text-white hover:bg-light-primary dark:hover:bg-dark-primary hover:drop-shadow-xl py-4 px-4 rounded-xl transition-all ease-out duration-300'
			}
		>
			<div className="flex gap-x-5">
				{pullRequest.ownerDetails && (
					<Image
						src={pullRequest.ownerDetails.avatarUrl}
						alt={pullRequest.ownerDetails.name}
						width={80}
						height={80}
						className="rounded-lg max-h-[50px] max-w-[50px] md:max-h-[80px] md:max-w-[80px]"
					/>
				)}
				<div className="flex flex-col flex-grow gap-y-1">
					{pullRequest.ownerDetails && (
						<Link href={pullRequest.ownerDetails.url}>
							<AnimationOnScroll animateIn={'animate__fadeInUp'} animateOnce={true}>
								<h2 className={'text-xl font-medium'}>{pullRequest.owner}</h2>
							</AnimationOnScroll>
						</Link>
					)}
					<AnimationOnScroll
						className="flex gap-x-2 items-start"
						animateIn={'animate__fadeInUp'}
						delay={300}
						animateOnce={true}
					>
						{pullRequest.isOpen ? (
							<Image
								className={'w-[20px] h-[20px]'}
								src={require(`../../assets/images/pr-open.svg`)}
								alt={''}
							/>
						) : (
							<Image
								className={'w-[20px] h-[20px]'}
								src={require(`../../assets/images/pr-merged.svg`)}
								alt={''}
							/>
						)}
						<h3 className={'break-words text-sm font-light text-gray-600 dark:text-gray-300'}>
							{pullRequest.title}
						</h3>
					</AnimationOnScroll>
					<AnimationOnScroll
						className="flex gap-x-2 items-start"
						animateIn={'animate__fadeInUp'}
						delay={300}
						animateOnce={true}
					>
						<Image className={'w-[20px] h-[20px]'} src={require(`../../assets/images/link.svg`)} alt={''} />
						<Link href={pullRequest.pullRequest.url}>
							<h3 className={'break-all text-sm font-medium text-gray-600 dark:text-gray-300'}>
								{pullRequest.pullRequest.url.substring(8)}
							</h3>
						</Link>
					</AnimationOnScroll>
				</div>
			</div>
			<AnimationOnScroll className="w-[25%]" animateIn={'animate__fadeInUp'} delay={300} animateOnce={true}>
				<h3 className={'text-sm font-medium text-gray-600 dark:text-gray-300 text-right'}>
					{moment(pullRequest.createdAt).format('MMM DD, YYYY')}
				</h3>
			</AnimationOnScroll>
		</div>
	);
};

export default PullRequestItem;
