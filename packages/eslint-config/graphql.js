module.exports = {
  ignorePatterns: ['**/generated/*.ts', '**/generated/*.tsx'],
  overrides: [
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/alphabetize': [
          'error',
          { selections: ['OperationDefinition', 'FragmentDefinition'] },
        ],
      },
    },
  ],
};
