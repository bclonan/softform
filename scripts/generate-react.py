"""Generate one React wrapper and declaration per Softform custom element."""
from pathlib import Path
import json
import re

root = Path(__file__).resolve().parent.parent
names = sorted(path.stem for path in (root / 'src/components').glob('Sf*.vue'))
catalog = json.loads((root / 'src/component-dictionary.json').read_text(encoding='utf8'))
source = root / 'src/react'
types = root / 'types/react'
source.mkdir(exist_ok=True)
types.mkdir(exist_ok=True)

for name in names:
    tag = catalog[name]['tag']
    events = catalog[name]['events']
    source.joinpath(f'{name}.js').write_text(
        f"import {{ register{name} }} from '../elements/{name}.js';\n"
        f"import {{ createReactComponent }} from './createReactComponent.js';\n\n"
        f"/** React adapter for <{tag}>. Data props become DOM properties. */\n"
        f"export const {name} = createReactComponent(register{name}, '{tag}', {json.dumps(events)});\n"
        f"export default {name};\n",
        encoding='utf8',
    )
    types.joinpath(f'{name}.d.ts').write_text(
        f"import type {{ ForwardRefExoticComponent, HTMLAttributes, RefAttributes }} from 'react';\n"
        f"import type {{ {name}Element }} from '../elements/{name}.js';\n\n"
        f"export type {name}ReactProps = "
        f"Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & "
        f"Partial<Omit<{name}Element, keyof HTMLElement>> & {{\n"
        f"  onClick?: (event: Event) => void;\n"
        f"  onChange?: (event: Event) => void;\n"
        f"  onInput?: (event: Event) => void;\n"
        f"  onValueChange?: (value: {('unknown' if 'modelValue' not in [p['name'] for p in catalog[name]['props']] else 'NonNullable<'+name+'Element[\'modelValue\']>')}, event: CustomEvent<{{ value: unknown }}>) => void;\n"
        f"  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;\n"
        f"}};\n"
        f"declare const {name}: ForwardRefExoticComponent<{name}ReactProps & RefAttributes<{name}Element>>;\n"
        f"export {{ {name} }};\nexport default {name};\n",
        encoding='utf8',
    )

source.joinpath('index.js').write_text(
    ''.join(f"export {{ {name} }} from './{name}.js';\n" for name in names),
    encoding='utf8',
)
types.joinpath('index.d.ts').write_text(
    ''.join(f"export {{ {name} }} from './{name}.js';\nexport type {{ {name}ReactProps }} from './{name}.js';\n" for name in names),
    encoding='utf8',
)
print(f'Generated {len(names)} React wrappers')
