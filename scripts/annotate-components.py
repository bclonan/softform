"""Put short usage notes beside each implementation without changing runtime code."""
from pathlib import Path
import json
import re

root = Path(__file__).resolve().parent.parent
catalog = json.loads((root / 'src/component-dictionary.json').read_text(encoding='utf8'))
for name, entry in catalog.items():
    path = root / 'src/components' / f'{name}.vue'
    source = path.read_text(encoding='utf8')
    source = re.sub(r'<script>\n/\*\* SOFTFORM AGENT NOTE.*?\*/\n', '<script>\n', source, flags=re.S)
    note = f'''<script>
/** SOFTFORM AGENT NOTE
 * {entry['purpose']}
 * {entry['whenToUse']}
 * {entry['avoidWhen']}
 * HTML tag: <{entry['tag']}> via @bclonan/softform/elements/{name}.
 * Props, events, and a runnable example: docs/components/{name}.md.
 */
'''
    path.write_text(source.replace('<script>\n',note,1),encoding='utf8')
print('Annotated',len(catalog),'component sources')
