import adapter from '@sveltejs/adapter-static';
import {execSync} from 'child_process';

export function getVersion() {
	try {
		return execSync('git rev-parse --short HEAD').toString().trim();
	} catch {
		const timestamp = Date.now().toString();
		console.error(`could not get commit-hash to set a version id, falling back on timestamp ${timestamp}`);
		return timestamp;
	}
}
const VERSION = getVersion();
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		version: {
			// we create a dertemrinistic building using a derterministic version (via git commit, see above)
			name: VERSION,
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// pages: 'build',
			// assets: 'build',
			fallback: 'index.html',
			// precompress: false,
			strict: false,
			// relative: true,
		}),
		paths: {
			// this is to make it work on ipfs (on an unknown path)
			relative: true,
		}
	}
};

export default config;
