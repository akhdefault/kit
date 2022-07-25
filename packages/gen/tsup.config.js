import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/index.ts'],
  format: ['cjs'],
  // onSuccess: 'cp -a src/**/templates dist',
  // dts: true,
});
