/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    './base',
    './typescript',
    './react',
    './next',
    './graphql',
    './css-modules',
    'prettier',
  ],
};

module.exports = config;
