import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				black: '#1d1d1b',
				white: '#fafafa',
				supernova: '#febd3c',
				'desert-storm': '#f8f8f6',
				raffia: {
					50: '#fbf8f1',
					100: '#f6efde',
					200: '#ead6b0',
					300: '#e1c390',
					400: '#d4a363',
					500: '#cb8b44',
					600: '#bd7639',
					700: '#9d5d31',
					800: '#7e4c2e',
					900: '#663f28',
					950: '#371f13',
				},
				dune: {
					50: '#f7f7f6',
					100: '#e6e4e1',
					200: '#ccc8c3',
					300: '#aba59d',
					400: '#898278',
					500: '#6e685e',
					600: '#57534a',
					700: '#47453e',
					800: '#3b3934',
					900: '#363430',
					950: '#1c1a17',
				},
			},
			fontFamily: {
				mono: ['Iosevka', defaultTheme.fontFamily.mono],
				sans: ['Inter Variable', defaultTheme.fontFamily.sans],
				display: ['Inter Tight', defaultTheme.fontFamily.sans],
			},
			padding: {
				6.5: '1.625rem', // 26px
			},
		},
	},
	plugins: [],
};
