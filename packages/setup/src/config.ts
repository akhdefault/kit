type Package = {
  name: string;
  prod?: boolean;
};

type File = {
  src: string;
  dest: string;
};

type Script = {
  key: string;
  value: string;
};

type Config = {
  packagesToAdd: Package[];
  filesToAdd: File[];
  filesToRemove: string[];
  scriptsToAdd: Script[];
  scriptsToRun: string[];
};

const config: Config = {
  packagesToAdd: [
    { name: '@akh-test/eslint-config' },
    { name: 'stylelint' },
    { name: '@akh-test/stylelint-config' },
    { name: 'husky' },
    { name: 'prettier' },
    { name: 'graphql', prod: true },
    { name: 'sass' },
    { name: 'next-plugin-graphql' },
    { name: '@next/bundle-analyzer' },
    { name: 'storybook-addon-next' },
  ],
  filesToAdd: [
    { src: './templates/next.config.js', dest: './' },
    { src: './templates/.eslintrc.js', dest: './' },
    { src: './templates/.stylelintrc.js', dest: './' },
    { src: './templates/prettier.config.js', dest: './' },
    { src: './templates/.husky/pre-push', dest: './.husky' },
    { src: './templates/.storybook/main.js', dest: './.storybook' },
  ],
  filesToRemove: ['./.eslintrc.json'],
  scriptsToAdd: [
    {
      key: 'lint',
      value:
        'eslint src/**/*.{js,ts,tsx,graphql} && stylelint src/**/*.{css,scss}',
    },
    {
      key: 'lint:fix',
      value:
        'eslint src/**/*.{js,ts,tsx,graphql} --fix && stylelint src/**/*.{css,scss} --fix',
    },
    { key: 'format', value: 'prettier --write  src/**/*.{js,ts,tsx}' },
    { key: 'prepare', value: 'husky install' },
    { key: 'analyze', value: 'ANALYZE=1 yarn build' },
  ],
  scriptsToRun: ['prepare'],
};

export default config;
export type { Config };
