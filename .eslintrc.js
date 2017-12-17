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

  /*
    TODO: Create my own custom eslint config (eslint-config-joealden)

    Adhere to the 'Javascript Standard Style', but remove stylistic rules
    eslint-config-standard (https://github.com/standard/eslint-config-standard)
    eslint-config-prettier (https://github.com/prettier/eslint-config-prettier)
  */
  extends: ['prettier', 'standard'],

  // required to lint *.vue files
  plugins: ['html'],

  // Custom rules (Basically remove the rules from standard I don't like)
  rules: {
    semi: 'off',
    'no-unneeded-ternary': 'off',
    'space-before-function-paren': 'off',
    'spaced-comment': 'warn',
    'no-unused-vars': 'warn',
    'no-trailing-spaces': 'warn'
  }
}
