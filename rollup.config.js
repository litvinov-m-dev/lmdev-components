import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';
import dotenv from 'dotenv';

dotenv.config();

const production = process.env.PROD; // Do not emit sourcemaps on development build/watch

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.ts',
		output: {
			name: 'lmdev-components',
			file: pkg.browser,
			format: 'umd',
      sourcemap: !production,
		},
		plugins: [
			resolve(),   // so Rollup can find `ms`
			commonjs(),  // so Rollup can convert `ms` to an ES module
			typescript({ sourceMap: !production }) // so Rollup can convert TypeScript to JavaScript
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: 'src/index.ts',
		external: ['ms'],
		plugins: [
			typescript({ sourceMap: !production }) // so Rollup can convert TypeScript to JavaScript
		],
		output: [
			{ file: pkg.main, format: 'cjs', sourcemap: !production },
			{ file: pkg.module, format: 'es', sourcemap: !production }
		]
	}
];
