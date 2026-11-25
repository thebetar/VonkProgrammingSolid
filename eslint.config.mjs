import js from '@eslint/js';
import globals from 'globals';
import solid from 'eslint-plugin-solid/configs/recommended';

export default [
	js.configs.recommended,
	solid,
	{
		files: ['src/**/*.{js,jsx}'],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
			globals: globals.browser,
		},
		rules: {
			// agents.md requires destructuring props in the component signature
			'solid/no-destructure': 'off',
		},
	},
	{
		files: ['scripts/**/*.mjs'],
		languageOptions: {
			globals: globals.node,
		},
	},
	{
		ignores: [
			'vite.config.js',
			'postcss.config.js',
			'dist/**/*',
			'scripts/*.js'
		],
	},
];
