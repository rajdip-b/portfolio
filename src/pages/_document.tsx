import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content="Rajdip Bhattacharya — software engineering specialist at xAI. Backend, cloud, and AI systems."
				/>
				<meta
					name="keywords"
					content="Portfolio, Rajdip Bhattacharya, NextJS, JavaScript, TypeScript, ReactJS"
				/>
				<meta name="author" content="Rajdip Bhattacharya" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
