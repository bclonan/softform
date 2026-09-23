import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  build: { outDir: 'dist-site', rollupOptions: { input: {
    dashboard: fileURLToPath(new URL('./index.html', import.meta.url)),
    inbox: fileURLToPath(new URL('./examples/inbox.html', import.meta.url)),
    settings: fileURLToPath(new URL('./examples/settings.html', import.meta.url)),
    elements: fileURLToPath(new URL('./examples/elements.html', import.meta.url)),
    elementsGallery: fileURLToPath(new URL('./examples/elements-gallery.html', import.meta.url)),
    analytics: fileURLToPath(new URL('./examples/analytics.html', import.meta.url)),
    react: fileURLToPath(new URL('./examples/react.html', import.meta.url)),
    planner: fileURLToPath(new URL('./examples/planner.html', import.meta.url)),
    docs: fileURLToPath(new URL('./docs.html', import.meta.url)),
  } } },
});
