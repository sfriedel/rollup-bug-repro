import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import path from 'path'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		dir: path.resolve(__dirname, 'dist'),
		entryFileNames: '[name].[hash].js',
		chunkFileNames: '[name].[hash].js',
		format: 'esm',
		sourcemap: true
	},
	plugins: [
		resolve(),
		commonjs(),
		{
			renderChunk(code, chunk) {
				console.log('Rendering chunk ' + chunk.fileName + ' with facadeModuleId ' + chunk.facadeModuleId);
			}
		},
		production && terser() // minify, but only in production
	]
};
