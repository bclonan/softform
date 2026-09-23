import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import { readdirSync } from 'node:fs';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: {
        index: fileURLToPath(new URL('./src/index.js', import.meta.url)),
        adapters: fileURLToPath(new URL('./src/adapters.js', import.meta.url)),
        ...Object.fromEntries(
          readdirSync(fileURLToPath(new URL('./src/components', import.meta.url)))
            .filter(file => file.endsWith('.vue')).map(file => [
            `components/${file.replace('.vue', '')}`,
            fileURLToPath(new URL(`./src/components/${file}`, import.meta.url)),
          ]),
        ),
      },
      formats: ['es'],
      fileName: (_format, name) => `${name}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: { assetFileNames: asset => asset.name?.endsWith('.css') ? 'styles.css' : 'assets/[name][extname]' },
    },
  },
});
