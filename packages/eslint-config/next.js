/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['next', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};

module.exports = config;
