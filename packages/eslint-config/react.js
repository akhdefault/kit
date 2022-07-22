module.exports = {
  extends: ['react-app'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
};
