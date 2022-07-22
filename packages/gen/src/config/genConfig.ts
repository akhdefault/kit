#!/usr/bin/env node
import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

type Package = {
  name: string;
  prod?: boolean;
};

const packagesToAdd: Package[] = [
  { name: '@akh-test/eslint-config' },
  { name: '@akh-test/stylelint-config' },
  { name: '@akh-test/prettier' },
  { name: 'husky' },
  { name: 'next-plugin-graphql' },
  { name: '@next/bundle-analyzer' },
];

type File = {
  src: string;
  dest: string;
};

const filesToAdd: File[] = [
  { src: '/templates/next-config.js', dest: './next.config.js' },
  { src: '/templates/eslint-config.js', dest: './eslintrc.js' },
  { src: '/templates/stylelint-config.js', dest: './stylelintrc.js' },
  { src: '/templates/prettier-config.js', dest: './husky/pre-push' },
  { src: '/templates/husky-prepush', dest: './husky/pre-push' },
];

const filesToRemove: string[] = ['./eslintrc.json'];

type Script = {
  key: string;
  value: string;
};

const scriptsToAdd: Script[] = [
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
];

const scriptsToRun: string[] = ['yarn prepare'];

function addPackages() {
  packagesToAdd.forEach(p => {
    exec(`yarn add${p.prod ? '' : ' --dev'} ${p.name}`);
  });
}

function addFiles() {}

export default async function genConfig() {
  await Promise.all([
    // tsConfig(),
    // eslintConfig(),
    // stylelintConfig(),
    // lintingScripts(),
    // prettierConfig(),
  ]);
}

// async function eslintConfig() {
//   exec('yarn add --dev @akh-test/eslint-config', (error, stdout, stderr) => {
//     console.log({ error, stdout, stderr });
//     if (error) {
//       console.log('error', error);
//     }
//   });
//   const pathName = path.join(__dirname, '/templates/eslint-config.js');
//   const data = await fs.readFile(pathName, { encoding: 'utf8' });
//   await fs.writeFile('./.eslintrc.js', data);
// }

// async function prettierConfig() {
//   exec('yarn add --dev prettier');
//   exec(
//     'npx npm-add-script -k format -v "prettier --write  src/**/*.{js,ts,tsx}"'
//   );
//   const pathName = path.join(__dirname, '/templates/prettier-config.js');
//   const data = await fs.readFile(pathName, { encoding: 'utf8' });
//   await fs.writeFile('./prettier.config.js', data);
// }

// async function stylelintConfig() {
//   exec('yarn add --dev @akh-test/stylelint-config');
//   const pathName = path.join(__dirname, '/templates/stylelint-config.js');
//   const data = await fs.readFile(pathName, { encoding: 'utf8' });
//   await fs.writeFile('./.stylelintrc.js', data);
// }

// async function tsConfig() {
//   exec('yarn add --dev typescript');
//   const pathName = path.join(__dirname, '/templates/ts-config.json');
//   const data = await fs.readFile(pathName, { encoding: 'utf8' });
//   await fs.writeFile('./tsconfig.json', data);
// }

// function lintingScripts() {
//   exec(
//     'npx npm-add-script -k lint -v "eslint src/**/*.{tsx,ts,js,graphql} && stylelint src/**/*.scss"'
//   );
//   exec(
//     'npx npm-add-script -k lint:fix -v "eslint src/**/*.{tsx,ts,js,graphql} --fix && stylelint src/**/*.scss" --fix'
//   );
// }
