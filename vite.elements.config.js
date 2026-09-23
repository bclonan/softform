import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import { readdirSync } from 'node:fs';

const elementFiles = readdirSync(fileURLToPath(new URL('./src/elements', import.meta.url)))
  .filter(file => file.endsWith('.js') && file !== 'index.js');

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: {
        'elements/index': fileURLToPath(new URL('./src/elements/index.js', import.meta.url)),
        ...Object.fromEntries(elementFiles.map(file => [
          `elements/${file.replace('.js', '')}`,
          fileURLToPath(new URL(`./src/elements/${file}`, import.meta.url)),
        ])),
      },
      formats: ['es'],
      fileName: (_format, name) => `${name}.js`,
    },
  },
});
