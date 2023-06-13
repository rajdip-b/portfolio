/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'yellow-dark': '#FFC25B',
				'yellow-light': '#FFA321',
				'dark-primary': '#323647',
				'dark-secondary': '#252733',
				'light-primary': '#E2E5F0',
				'light-secondary': '#D5D8E2',
			},
		},
	},
	plugins: [],
};
