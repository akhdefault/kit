import { exec } from 'child_process';
import util from 'util';
import path from 'path';
import defaultConfig, { Config } from './config';
import cpy from 'cpy';
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
    handleStyles();
    await initStorybook();
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
    // const { stderr } = await execAsync(
    //   `npx npm-add-script -q -f -k ${script.key} -v ${script.value}`
    // );
    // if (stderr) {
    //   console.error(stderr);
    //   console.log(
    //     'Make sure you are running the script from the root of your project'
    //   );
    // }
    npmAddScript({ key: script.key, value: script.value, force: true });
  });
}

async function runScripts(scripts: Config['scriptsToRun']) {
  scripts.forEach(async script => {
    await execAsync(`yarn run ${script}`);
  });
}

async function handleStyles() {
  await execAsync(`rm -rf styles && mkdir src/style`);
  await cpy(path.join(__dirname, 'templates/vars.scss'), 'style');
}

async function initStorybook() {
  await execAsync(`npx storybook init`);
  console.log('done with storybook');
}
