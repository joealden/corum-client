// For more info, visit https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',

	parserOptions: {
		sourceType: 'module'
	},

	env: {
		browser: true,
		node: true
	},

	extends: 'standard',
	// required to lint *.vue files
	plugins: ['html'],

	rules: {
		semi: 0,
		'no-unneeded-ternary': 0,
		'space-before-function-paren': 0,
		// allow optionalDependencies
		'import/no-extraneous-dependencies': [
			0,
			{
				optionalDependencies: ['test/unit/index.js']
			}
		],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
}
