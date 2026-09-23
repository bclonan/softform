import { cpSync, mkdirSync } from 'node:fs';

mkdirSync('dist/react', { recursive: true });
cpSync('src/react', 'dist/react', { recursive: true });
cpSync('types/react', 'dist/react', { recursive: true });
