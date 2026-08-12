import js from '@eslint/js';
import solid from 'eslint-plugin-solid/configs/recommended';

export default [
	js.configs.recommended,
	solid,
	{
		ignores: [
			'tailwind.config.js',
			'vite.config.ts',
			'postcss.config.js',
			'public/googletagmanager.js',
			'dist/**/*',
			'scripts/**/*',
		],
	},
];
