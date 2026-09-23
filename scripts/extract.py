"""One-time extraction of the original standalone Softform gallery."""
from pathlib import Path
import base64
import re

root = Path(__file__).resolve().parent.parent
html = (root / 'softform-component-library.html').read_text(encoding='utf8')
scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.S)
source = scripts[-1]
components = root / 'src/components'
components.mkdir(parents=True, exist_ok=True)

icons = source[source.index('const ICONS='):source.index('const components=')].replace('const ICONS=', 'export const ICONS=', 1)
helpers = """import { useId, ref, watch, onMounted, nextTick } from 'vue';
""" + icons + """
export const uid = prefix => `${prefix}-${useId()}`;
export const clamp = (v,min=0,max=100) => Math.min(max,Math.max(min,Number.isFinite(Number(v))?Number(v):min));
export const displayTime = s => `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
""" + source[source.index('function dialogSetup('):source.index("C('SfModal'")].replace('function dialogSetup(', 'export function dialogSetup(')
(root / 'src/helpers.js').write_text(helpers, encoding='utf8')

adapters = source[source.index('const ADAPTER_KEY='):source.index('const BASE_CARDS=')]
adapters = adapters.replace("const ADAPTER_KEY=", "export const ADAPTER_KEY=", 1)
for name in ['NotificationAdapter','RestNotificationAdapter','GraphQLNotificationAdapter','LegacyNotificationAdapter','AdapterRegistry']:
    adapters = adapters.replace('class '+name+' ', 'export class '+name+' ')
adapters = adapters.replace('function validateCards(', 'export function validateCards(').replace('function createAdapterRegistry(', 'export function createAdapterRegistry(').replace('const defaultRegistry=', 'export const defaultRegistry=')
(root / 'src/adapters.js').write_text(adapters, encoding='utf8')

names = []
for match in re.finditer(r"C\('(Sf\w+)'\s*,\s*\{", source):
    name = match.group(1)
    start = match.end() - 1
    # Every definition ends at the next line's closing });, including SfAdaptedCards.
    end = source.index('});', start) + 2
    definition = source[start:end - 2].rstrip()
    # A definition may contain nested }); in setup. Find the actual call end by tracking braces,
    # strings and template literals with a small lexical scanner.
    depth = 0
    quote = None
    escape = False
    for i in range(start, len(source)):
        ch = source[i]
        if quote:
            if escape: escape = False
            elif ch == '\\': escape = True
            elif ch == quote: quote = None
            continue
        if ch in "'\"`": quote = ch
        elif ch == '{': depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                end = i + 1
                break
    definition = source[start:end]
    template_match = re.search(r',?\s*template:`([^`]*)`\s*}$', definition, re.S)
    template = template_match.group(1) if template_match else None
    if template_match:
        definition = definition[:template_match.start()] + '}'
    # Preserve the original component behavior but let root elements use a semantic tag.
    if name in ['SfSurface','SfBadge','SfDivider','SfAlert','SfToast','SfEmptyState'] and template:
        tag = re.search(r'^<(div|span)(?=[\s>])', template)
        if tag:
            original = tag.group(1)
            template = '<component :is="as"' + template[tag.end():]
            pos = template.rfind('</'+original+'>')
            if pos >= 0: template = template[:pos] + '</component>' + template[pos+len(original)+3:]
            definition = definition.replace('props:{', "props:{as:{type:String,default:'"+original+"'},", 1) if 'props:{' in definition else definition.replace('{', "{props:{as:{type:String,default:'"+original+"'}},", 1)
    deps = sorted(set(re.findall(r'<(sf-[a-z][a-z-]*)\b', template or '')))
    imports = []
    aliases = []
    for tag in deps:
        dep = 'Sf' + ''.join(part.capitalize() for part in tag[3:].split('-'))
        if dep != name:
            imports.append(f"import {dep} from './{dep}.vue';")
            aliases.append(dep)
    if aliases:
        definition = definition.replace('{', '{components:{'+','.join(aliases)+'},', 1)
    pre = "import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';\n"
    pre += "import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';\n"
    if name == 'SfAdaptedCards': pre += "import { ADAPTER_KEY, defaultRegistry } from '../adapters.js';\n"
    if name == 'SfMediaPlayer':
        pre += "import audioUrl from '../assets/loop.wav?url';\n"
        definition = definition.replace('()=>window.SOFTFORM_AUDIO', '()=>audioUrl')
    pre += '\n'.join(imports) + '\n'
    out = '<script>\n'+pre+'export default {name:\''+name+'\','+definition[1:]+';\n</script>\n'
    if template: out += '\n<template>\n'+template+'\n</template>\n'
    (components / (name+'.vue')).write_text(out, encoding='utf8')
    names.append(name)

names.insert(0, 'SfElement')
index = "import { ADAPTER_KEY, defaultRegistry } from './adapters.js';\n"
for name in names: index += f"import {name} from './components/{name}.vue';\n"
index += "\nexport { " + ', '.join(names) + " };\n"
index += "export { ADAPTER_KEY, NotificationAdapter, RestNotificationAdapter, GraphQLNotificationAdapter, LegacyNotificationAdapter, AdapterRegistry, createAdapterRegistry, validateCards, defaultRegistry } from './adapters.js';\n"
index += "export const SoftformPlugin = { install(app, options = {}) {\n  for (const component of ["+ ', '.join(names) +"]) app.component(component.name, component);\n  app.provide(ADAPTER_KEY, options.registry || defaultRegistry);\n} };\n"
(root / 'src/index.js').write_text(index, encoding='utf8')

css = html[html.index('<style>')+7:html.index('</style>')]
tokens = css[css.index(':root{'):css.index('}', css.index(':root{')) + 1]
library = css[css.index('/* Reusable materials / actions */'):css.index('/* Shell color variants')]
base = '''
:where([class^="sf-"], [class*=" sf-"]), :where([class^="sf-"], [class*=" sf-"]) * { box-sizing: border-box; }
:where([class^="sf-"], [class*=" sf-"]) button, :where([class^="sf-"], [class*=" sf-"]) input, :where([class^="sf-"], [class*=" sf-"]) select, :where([class^="sf-"], [class*=" sf-"]) textarea { font: inherit; }
:where([class^="sf-"], [class*=" sf-"]) :focus-visible { outline: 3px solid var(--sf-focus); outline-offset: 3px; }
.sf-icon{width:20px;height:20px}.sf-icon.sm{width:16px;height:16px}.sf-icon.lg{width:26px;height:26px}
.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
.row{display:flex;align-items:center;gap:12px}.grow{flex:1;min-width:0}.hint{font-size:12px;color:var(--sf-muted);line-height:1.7}.status-dot{display:inline-block;width:6px;height:6px;background:#5f7568;border-radius:50%}
.bare-button{display:inline-flex;align-items:center;justify-content:center;border:0;background:none;padding:8px;border-radius:9px}
'''
(root / 'src/styles.css').write_text(tokens+'\n'+base+'\n'+library, encoding='utf8')

audio = re.search(r'window.SOFTFORM_AUDIO="data:audio/wav;base64,([^"]+)"', scripts[-2])
(root / 'src/assets').mkdir(exist_ok=True)
if audio: (root / 'src/assets/loop.wav').write_bytes(base64.b64decode(audio.group(1)))
print('Extracted', len(names) - 1, 'original components and retained SfElement')
