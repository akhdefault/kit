/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['standard', 'prettier'],
  rules: {
    'no-console': 'warn',
    'import/newline-after-import': 'warn',
  },
};

module.exports = config;
