/** @type {import('stylelint').Config} */
const config = {
  extends: ['./scss', './css-modules'],
  rules: {
    // camelCase
    'scss/at-mixin-pattern': '^[a-z][a-zA-Z0-9]+$',
    'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',
  },
};

module.exports = config;
