"""Keep the Web Component registration modules aligned with the Vue inventory."""
from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent
names = sorted(path.stem for path in (root / 'src/components').glob('Sf*.vue'))
target = root / 'src/elements'
types = root / 'types/elements'
target.mkdir(exist_ok=True)
types.mkdir(exist_ok=True)

for name in names:
    tag = re.sub(r'([a-z0-9])([A-Z])', r'\1-\2', name.replace('Sf', 'sf-', 1)).lower()
    (target / f'{name}.js').write_text(f'''import component from '../components/{name}.vue';
import {{ registerSoftformElement }} from '../element-runtime.js';

export const tagName = '{tag}';
export function register{name}(registry) {{
  return registerSoftformElement(component, registry);
}}
''', encoding='utf8')
    vue_types = (root / 'types/components' / f'{name}.d.ts').read_text(encoding='utf8')
    props = re.search(r'export interface ' + name + r'Props \{(.*?)\n\}', vue_types, re.S).group(1)
    model = re.search(r'^  modelValue\?: (.*?);$', props, re.M)
    alias = f'\n  value?: {model.group(1)};' if model else ''
    declaration = (
        f'/** Set complex values as DOM properties, not string attributes. */\n'
        f'export type {name}Element = HTMLElement & {{{props}{alias}\n}};\n'
        f"export declare const tagName: '{tag}';\n"
        f'export declare function register{name}(registry?: CustomElementRegistry): '
        f'CustomElementConstructor & {{ new(): {name}Element }};\n'
    )
    (types / f'{name}.d.ts').write_text(declaration, encoding='utf8')

imports = '\n'.join(f"import {{ register{name} }} from './{name}.js';" for name in names)
calls = '\n'.join(f'  register{name}(registry);' for name in names)
exports = ', '.join(f'register{name}' for name in names)
(target / 'index.js').write_text(f'''{imports}

/** Register all 53 custom elements once. Import one registration module for a smaller bundle. */
export function registerSoftformElements(registry = globalThis.customElements) {{
{calls}
  return registry;
}}

export {{ {exports} }};
''', encoding='utf8')
(root / 'types/elements/index.d.ts').write_text('''export declare function registerSoftformElements(registry?: CustomElementRegistry): CustomElementRegistry;
'''+ '\n'.join(f"export {{ tagName as {name}TagName, register{name} }} from './{name}.js';" for name in names) + '\n', encoding='utf8')
print('Generated', len(names), 'custom element registrations')
