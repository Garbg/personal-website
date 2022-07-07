import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		assetsInlineLimit: '1',
		target: 'es2020'
	  }
};
export default config;
