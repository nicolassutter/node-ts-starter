module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: { node: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    'multiline-comment-style': ['error', 'starred-block'],
    'prefer-template': 'error',
    curly: 'error',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'quote-props': ['error', 'as-needed'],
    'no-trailing-spaces': 'warn',
    semi: ['error', 'never'],
    'object-shorthand': 'warn',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  }
}
