import prompts, { PromptObject } from 'prompts';
import cpy from 'cpy';
import path from 'path';
import chalk from 'chalk';
import fs from 'fs/promises';
import toTitleCase from 'utils/toTitleCase';

const questions: PromptObject[] = [
  {
    type: 'text',
    name: 'name',
    message: 'What would you like to name the component?',
  },
  // {
  //   type: 'select',
  //   name: 'withStyles',
  //   message: 'With a css-module?',
  //   choices: [
  //     { title: 'Yes', value: true },
  //     { title: 'No', value: false },
  //   ],
  // },
  {
    type: 'select',
    name: 'withProps',
    message: 'With props?',
    choices: [
      { title: 'Yes', value: true },
      { title: 'No', value: false },
    ],
  },
  {
    type: 'select',
    name: 'standalone',
    message: 'In a separate folder?',
    choices: [
      { title: 'Yes', value: true },
      { title: 'No', value: false },
    ],
  },
  {
    type: 'select',
    name: 'withStorybook',
    message: 'With Storybook?',
    choices: [
      { title: 'Yes', value: true },
      { title: 'No', value: false },
    ],
];

export default async function genComponent() {
  try {
    const res = await prompts(questions);
    createComponent(res);
  } catch (error) {
    console.error(error);
  }
}

async function createComponent({ ...options }) {
  const name = toTitleCase(options?.name);
  const componentTemplatePath = path.join(
    __dirname,
    '/templates/Component.tsx'
  );
  const cssModuleTemplatePath = path.join(
    __dirname,
    '/templates/Component.module.scss'
  );
  const destination = options.standalone
    ? path.join(process.cwd(), name)
    : process.cwd();

  await cpy(componentTemplatePath, destination, {
    rename: basename => basename.replace('Component', name),
  });
  await cpy(cssModuleTemplatePath, destination, {
    rename: basename => basename.replace('Component', name),
  });

  if (options.standalone) {
    await fs.writeFile(
      `${destination}/index.ts`,
      `export { default } from './${name}'`
    );
  }

  const generatedPath = `${destination}/${name}.tsx`;
  const fileContent = (await fs.readFile(generatedPath)).toString();
  await fs.writeFile(generatedPath, fileContent.replace(/Component/g, name));

  // if (options.withStorybook) {
  //   const storyTemplatePath = path.join(
  //     __dirname,
  //     '/templates/Component.stories.scss'
  //   );
  //   await cpy(storyTemplatePath, destination, {
  //     rename: basename => basename.replace('Component', name),
  //   });
  //   const storyFileContent = (await fs.readFile(generatedPath)).toString();
  //   await fs.writeFile(generatedPath, storyFileContent.replace(/Component/g, name));
  // }

  console.log(chalk.green(`Generated a component at ${generatedPath}`));
}
