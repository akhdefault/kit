module.exports = {
  extends: ["next", "prettier", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["**/generated/*.ts", "**/generated/*.tsx"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/react-in-jsx-scope": "off",
    "no-console": "warn",
    "import/newline-after-import": "error",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        "@graphql-eslint/alphabetize": [
          "error",
          { selections: ["OperationDefinition", "FragmentDefinition"] },
        ],
      },
    },
  ],
};
