import { cpSync, existsSync } from 'node:fs';

if (!existsSync('storybook-static/index.html')) {
  throw new Error('Storybook build is missing');
}
cpSync('storybook-static', 'dist-site/storybook', { recursive: true, force: true });
console.log('Copied Storybook into dist-site/storybook');
