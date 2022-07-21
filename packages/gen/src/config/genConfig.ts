#!/usr/bin/env node
import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

export default async function genConfig() {
  try {
    await Promise.all([
      tsConfig(),
      eslintConfig(),
      stylelintConfig(),
      lintingScripts(),
      prettierConfig(),
    ]);
  } catch (error) {
    throw error;
  }
}

async function eslintConfig() {
  exec('yarn add --dev @akh-test/eslint-config', (error, stdout, stderr) => {
    console.log({ error, stdout, stderr });
    if (error) {
      console.log('error', error);
      return;
    }
  });
  const pathName = path.join(__dirname, '/templates/eslint-config.js');
  const data = await fs.readFile(pathName, { encoding: 'utf8' });
  await fs.writeFile('./.eslintrc.js', data);
}

async function prettierConfig() {
  exec('yarn add --dev prettier');
  exec(
    'npx npm-add-script -k format -v "prettier --write  src/**/*.{js,ts,tsx}"'
  );
  const pathName = path.join(__dirname, '/templates/prettier-config.js');
  const data = await fs.readFile(pathName, { encoding: 'utf8' });
  await fs.writeFile('./prettier.config.js', data);
}

async function stylelintConfig() {
  exec('yarn add --dev @akh-test/stylelint-config');
  const pathName = path.join(__dirname, '/templates/stylelint-config.js');
  const data = await fs.readFile(pathName, { encoding: 'utf8' });
  await fs.writeFile('./.stylelintrc.js', data);
}

async function tsConfig() {
  exec('yarn add --dev typescript');
  const pathName = path.join(__dirname, '/templates/ts-config.json');
  const data = await fs.readFile(pathName, { encoding: 'utf8' });
  await fs.writeFile('./tsconfig.json', data);
}

function lintingScripts() {
  exec(
    'npx npm-add-script -k lint -v "eslint src/**/*.{tsx,ts,js,graphql} && stylelint src/**/*.scss"'
  );
  exec(
    'npx npm-add-script -k lint:fix -v "eslint src/**/*.{tsx,ts,js,graphql} --fix && stylelint src/**/*.scss" --fix'
  );
}
