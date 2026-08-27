/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				bg: '#07090c',
				panel: '#0e1218',
				raised: '#151b24',
				line: '#243041',
				fg: '#d7dde6',
				muted: '#8b95a5',
				dim: '#5c6675',
				accent: '#3ee0a2',
				'accent-dim': '#1f8f68',
				cyan: '#7aa2f7',
				amber: '#e8b84a',
				rose: '#f7768e',
				comment: '#6a7382',
			},
			boxShadow: {
				glow: '0 0 0 1px rgba(62, 224, 162, 0.18), 0 0 32px rgba(62, 224, 162, 0.08)',
			},
			fontFamily: {
				mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			},
		},
	},
	plugins: [],
};
