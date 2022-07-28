/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['react-app'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/forbid-elements': [
      1,
      {
        forbid: [
          {
            element: 'svg',
            message: 'treat svgs as assets - load them via SVGR',
          },
        ],
      },
    ],
  },
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
};

module.exports = config;
