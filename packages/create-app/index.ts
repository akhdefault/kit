#!/usr/bin/env node
import { spawn } from 'child_process';

(async () => {
  const child = spawn('npx', [
    'create-next-app',
    '--example',
    'https://github.com/akhdefault/kit/tree/main/apps/examples/default-starter',
  ]);

  child.stdout.pipe(process.stdout);
  process.stdin.pipe(child.stdin);
  child.stderr.on('data', data => {
    console.error(`stderr: ${data}`);
  });
})();
