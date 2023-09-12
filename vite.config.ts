import { defineConfig } from 'vite';
import path from 'node:path';

import renderer from 'vite-plugin-electron-renderer';
import electron from 'vite-plugin-electron';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src')
		}
	},
	plugins: [
		react(),
		renderer(),
		electron([
			{
				entry: 'electron/main.ts',
			},
			{
				entry: 'electron/preload.ts',
				onstart: (options) => options.reload()
			},
		])
	],
});
