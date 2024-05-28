/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': {
					'50': '#eff7ff',
					'100': '#dfedff',
					'200': '#b7ddff',
					'300': '#78c2ff',
					'400': '#30a2ff',
					'500': '#0586f2',
					'600': '#0069cf',
					'700': '#0053a7',
					'800': '#02498e',//Principal
					'900': '#083c72',
					'950': '#05264c',
				},
				'secondary': {
					'50': '#fffaec',
					'100': '#fff5d3',
					'200': '#ffe6a5',
					'300': '#ffd36d',
					'400': '#ffb432',
					'500': '#ff9b0a',
					'600': '#ff8300',//Principal
					'700': '#cc6002',
					'800': '#a14a0b',
					'900': '#823e0c',
					'950': '#461d04',
				},
				'tertiary': {
					'50': '#f5f6f6',
					'100': '#e5e7e8',
					'200': '#ced2d3',
					'300': '#abb2b5',
					'400': '#818a8f',
					'500': '#666f74',
					'600': '#575d63',
					'700': '#4b4f53',
					'800': '#424648',
					'900': '#3a3d3f',
					'950': '#252729',//Principal
				},
			}
		},
	},
	plugins: [],
}
