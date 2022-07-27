#!/usr/bin/env node
import { spawn } from 'child_process';
import path from 'path';
// import util from 'util';

// const execAsync = util.promisify(exec);

(async () => {
  const child = spawn('npx', [
    'create-next-app@latest',
    '--example-path',
    path.join(__dirname, './examples/default'),
  ]);
  console.log(path.join(__dirname, './examples/default'));

  child.stdout.pipe(process.stdout);
  process.stdin.pipe(child.stdin);
  child.stderr.on('data', data => {
    console.error(`stderr: ${data}`);
  });
})();
