import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				mob: "320px",
				tab: "768px",
				desk: "1280px",
			},

			// backgroundImage: {
			//   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			//   'gradient-conic':
			//     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			// },
		},
	},
	plugins: [],
};
export default config;
