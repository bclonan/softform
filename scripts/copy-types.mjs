import { cpSync, mkdirSync } from 'node:fs';

mkdirSync('dist/components', { recursive: true });
cpSync('types/components', 'dist/components', { recursive: true });
mkdirSync('dist/elements', { recursive: true });
cpSync('types/elements', 'dist/elements', { recursive: true });
cpSync('types/index.d.ts', 'dist/index.d.ts');
cpSync('types/adapters.d.ts', 'dist/adapters.d.ts');
cpSync('src/styles.css', 'dist/styles.css');
cpSync('src/component-dictionary.json', 'dist/component-dictionary.json');
