#!/usr/bin/env node
import { exec } from 'child_process';
import util from 'util';
import path from 'path';
import defaultConfig, { Config } from './config';
import cpy from 'cpy';
// TODO: add types
// @ts-ignore
import npmAddScript from 'npm-add-script';

const execAsync = util.promisify(exec);

export default async function genConfig(config = defaultConfig) {
  try {
    await addPackages(defaultConfig.packagesToAdd);
    await addScripts(config.scriptsToAdd);
    await addFiles(config.filesToAdd);
    await removeFiles(config.filesToRemove);
    await runScripts(config.scriptsToRun);
  } catch (error) {
    console.error(error);
  }
}

async function addPackages(packages: Config['packagesToAdd']) {
  const cmd =
    `yarn add ` +
    packages
      .map(p => `${p.prod ? '' : ' --dev'} ${p.name}`)
      .join(' && yarn add');
  await execAsync(cmd);
}

async function addFiles(files: Config['filesToAdd']) {
  files.forEach(async file => {
    await cpy(path.join(__dirname, file.src), file.dest);
  });
}

async function removeFiles(files: Config['filesToRemove']) {
  files.forEach(async file => {
    try {
      await execAsync(`rm ${file}`);
    } catch {}
  });
}

async function addScripts(scripts: Config['scriptsToAdd']) {
  scripts.forEach(async script => {
    npmAddScript({ key: script.key, value: script.value, force: true });
  });
}

async function runScripts(scripts: Config['scriptsToRun']) {
  scripts.forEach(async script => {
    await execAsync(`yarn run ${script}`);
  });
}
