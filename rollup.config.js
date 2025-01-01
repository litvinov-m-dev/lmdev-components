import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

import packageJson from './package.json';
import dotenv from 'dotenv';

dotenv.config();

const production = process.env.PROD === 'true';

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.ts',
		output: {
			name: 'lmdev-components',
			file: packageJson.browser,
			format: 'umd',
      sourcemap: production,
		},
		plugins: [
			resolve({
        ignoreGlobal: false,
        include: ['node_modules/**'],
        skip: ['react', 'react-dom'], // to avoid errors like "Cannot read properties of null (reading 'useRef')".
      }), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			typescript({ tsconfig: "./tsconfig.json" }), // so Rollup can convert TypeScript to JavaScript
      postcss({
        extract: true, 
        minimize: true,
      }),
      terser(),
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
      resolve({
        ignoreGlobal: false,
        include: ['node_modules/**'],
        skip: ['react', 'react-dom'],
      }),
      commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: true, 
        minimize: true,
      }),
      terser(),
		],
		output: [
			{ file: packageJson.main, format: 'cjs', sourcemap: production },
			{ file: packageJson.module, format: 'es', sourcemap: production },
		]
	},

  {
    input: "dist/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.css$/],
  }
];
