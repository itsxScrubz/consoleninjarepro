import react from '@vitejs/plugin-react';
import { join } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	base: './',
	plugins: [react()],
	build: {
		outDir: join(__dirname, 'build'),
		minify: true,
		rollupOptions: {
			output: {
				entryFileNames: 'static/[name].[hash].js',
				chunkFileNames: 'static/[name].[hash].js',
				assetFileNames: assetInfo => {
					return assetInfo.name?.split('.')[1] === 'css'
						? 'static/[name].[hash].[ext]'
						: 'assets/[name].[ext]';
				},
			},
		},
	},
});
