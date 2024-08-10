import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export interface Label {
	id: number;
	url: string;
	name: string;
	color: string;
}

export interface PullRequest {
	id: number;
	issueUrl: string;
	repositoryUrl: string;
	title: string;
	pullRequest: {
		url: string;
		medgedAt: string;
	};
	owner: string;
	isOpen: boolean;
	createdAt?: string;
}

export interface OwnerDetails {
	id: number;
	avatarUrl: string;
	name: string;
	url: string;
}

const getOwnerFromIssueUrl = (issueUrl: string): string => {
	const url = new URL(issueUrl);
	return url.pathname.split('/')[2];
};

const ignoreList = new Set(process.env.NEXT_PUBLIC_IGNORED_ORGANIZATIONS!.split(','));

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
	const githubToken = process.env.GITHUB_TOKEN;
	if (!githubToken) {
		return res.status(400).json({ error: 'GITHUB_TOKEN is not set in the environment variables' });
	}

	try {
		const pullsResponse = await fetch(
			`https://api.github.com/search/issues?q=is:pr+author:rajdip-b&sort=created&order=desc&per_page=100`,
			{
				headers: {
					Authorization: `token ${githubToken}`,
				},
			},
		);

		if (!pullsResponse.ok) {
			throw new Error('Failed to fetch pull requests');
		}

		const pulls = ((await pullsResponse.json()) as any).items as any[];
		const owners = new Set<string>();

		const pullResponse: PullRequest[] = pulls
			.filter(pull => {
				const owner = getOwnerFromIssueUrl(pull.url);
				return ignoreList.has(owner) === false;
			})
			.slice(0, 12)
			.map(pull => {
				owners.add(getOwnerFromIssueUrl(pull.url));
				return {
					id: pull.id,
					owner: getOwnerFromIssueUrl(pull.url),
					issueUrl: pull.url,
					repositoryUrl: pull.repository_url,
					title: pull.title,
					pullRequest: {
						url: pull.pull_request.html_url,
						medgedAt: pull.pull_request.merged_at,
					},
					isOpen: pull.state === 'open' || pull.pull_request.merged_at === null,
					createdAt: pull.created_at,
				};
			});

		const ownerDetails: { [key: string]: OwnerDetails } = {};
		for (const owner of owners) {
			try {
				const ownerDetailsResponse = await fetch(`https://api.github.com/users/${owner}`, {
					headers: {
						Authorization: `token ${githubToken}`,
					},
				});

				if (!ownerDetailsResponse.ok) {
					throw new Error('Failed to fetch owner details');
				}

				const ownerDetailsJson: any = await ownerDetailsResponse.json();
				ownerDetails[owner] = {
					id: ownerDetailsJson.id,
					avatarUrl: ownerDetailsJson.avatar_url,
					name: ownerDetailsJson.login,
					url: ownerDetailsJson.html_url,
				};
			} catch (error) {
				console.log(error);
			}
		}

		res.status(200).json({
			pullRequests: pullResponse,
			owners: ownerDetails,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}
