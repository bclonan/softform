import { rollup } from 'rollup';
import { fileURLToPath } from 'node:url';

const entry = fileURLToPath(new URL('../dist/index.js', import.meta.url)).replaceAll('\\', '/');
const bundle = await rollup({
  input: 'virtual:softform-consumer',
  external: id => id === 'vue',
  plugins: [{
    name: 'consumer-entry',
    resolveId(id) { if (id === 'virtual:softform-consumer') return id; },
    load(id) { if (id === 'virtual:softform-consumer') return `import { SfButton } from '${entry}'; export default SfButton;`; },
  }],
});
const { output } = await bundle.generate({ format: 'es', inlineDynamicImports: true });
const code = output.map(chunk => chunk.code || '').join('\n');
await bundle.close();
if (!code.includes('sf-button') || code.includes('SfMediaPlayer') || code.includes('sf-calendar') || code.includes('SOFTFORM_AUDIO')) {
  throw new Error('The named SfButton import pulled in unrelated components.');
}
console.log(`Tree-shaking smoke passed: SfButton consumer bundle is ${Buffer.byteLength(code)} bytes before minification.`);

const elementEntry = fileURLToPath(new URL('../dist/elements/SfSlider.js', import.meta.url)).replaceAll('\\', '/');
const elementBundle = await rollup({ input: elementEntry });
const { output: elementOutput } = await elementBundle.generate({ format: 'es', inlineDynamicImports: true });
const elementCode = elementOutput.map(chunk => chunk.code || '').join('\n');
await elementBundle.close();
if (!elementCode.includes('sf-slider') || elementCode.includes('SfMediaPlayer') || elementCode.includes('SOFTFORM_AUDIO')) {
  throw new Error('The single SfSlider custom element pulled in unrelated components or media.');
}
console.log(`Custom element smoke passed: SfSlider registration bundle is ${Buffer.byteLength(elementCode)} bytes before minification.`);

const reactEntry = fileURLToPath(new URL('../dist/react/SfInput.js', import.meta.url)).replaceAll('\\', '/');
const reactBundle = await rollup({ input: reactEntry, external: id => id === 'react' });
const { output: reactOutput } = await reactBundle.generate({ format: 'es', inlineDynamicImports: true });
const reactCode = reactOutput.map(chunk => chunk.code || '').join('\n');
await reactBundle.close();
if (!reactCode.includes('sf-input') || reactCode.includes('SfMediaPlayer') || reactCode.includes('SOFTFORM_AUDIO')) {
  throw new Error('The single SfInput React adapter pulled in unrelated components or media.');
}
console.log(`React adapter smoke passed: SfInput consumer bundle is ${Buffer.byteLength(reactCode)} bytes before minification.`);
