import { NextApiRequest, NextApiResponse } from 'next';

export interface PullRequest {
	id: number;
	issueUrl: string;
	repositoryUrl: string;
	title: string;
	pullRequest: {
		url: string;
		mergedAt: string;
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

const ignoreList = new Set(
	(process.env.IGNORED_ORGANIZATIONS || process.env.NEXT_PUBLIC_IGNORED_ORGANIZATIONS || '')
		.split(',')
		.map(org => org.trim())
		.filter(Boolean),
);

const githubHeaders = (token: string) => ({
	Authorization: `token ${token}`,
	Accept: 'application/vnd.github+json',
});

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
	const githubToken = process.env.GITHUB_TOKEN;
	if (!githubToken) {
		return res.status(500).json({ error: 'GITHUB_TOKEN is not set in the environment variables' });
	}

	try {
		const pullsResponse = await fetch(
			`https://api.github.com/search/issues?q=is:pr+author:rajdip-b&sort=created&order=desc&per_page=100`,
			{
				headers: githubHeaders(githubToken),
			},
		);

		if (!pullsResponse.ok) {
			throw new Error('Failed to fetch pull requests');
		}

		const pulls = ((await pullsResponse.json()) as { items: any[] }).items;
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
						mergedAt: pull.pull_request.merged_at,
					},
					isOpen: pull.state === 'open' || pull.pull_request.merged_at === null,
					createdAt: pull.created_at,
				};
			});

		const ownerDetails: { [key: string]: OwnerDetails } = {};
		for (const owner of owners) {
			try {
				const ownerDetailsResponse = await fetch(`https://api.github.com/users/${owner}`, {
					headers: githubHeaders(githubToken),
				});

				if (!ownerDetailsResponse.ok) {
					continue;
				}

				const ownerDetailsJson: any = await ownerDetailsResponse.json();
				ownerDetails[owner] = {
					id: ownerDetailsJson.id,
					avatarUrl: ownerDetailsJson.avatar_url,
					name: ownerDetailsJson.login,
					url: ownerDetailsJson.html_url,
				};
			} catch {
				// Skip owners that fail to resolve so the rest of the list still renders.
			}
		}

		res.status(200).json({
			pullRequests: pullResponse,
			owners: ownerDetails,
		});
	} catch (error) {
		res.status(500).json({ error: error instanceof Error ? error.message : 'Failed to fetch pull requests' });
	}
}
