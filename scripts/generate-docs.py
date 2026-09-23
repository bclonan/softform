from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent
source = re.findall(r'<script[^>]*>(.*?)</script>', (root / 'softform-component-library.html').read_text(encoding='utf8'), re.S)[-1]
components = sorted((root / 'src/components').glob('Sf*.vue'))
(root / 'docs/components').mkdir(parents=True, exist_ok=True)
(root / 'stories').mkdir(exist_ok=True)
(root / 'types').mkdir(exist_ok=True)
(root / 'types/components').mkdir(exist_ok=True)

def properties(text):
    match = re.search(r'\bprops:\{', text)
    if not match: return []
    body = []
    depth = 1
    quote = None
    escape = False
    for c in text[match.end():]:
        if quote:
            if escape: escape = False
            elif c == '\\': escape = True
            elif c == quote: quote = None
            body.append(c)
            continue
        if c in "'\"`": quote = c
        elif c == '{': depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0: break
        body.append(c)
    content = ''.join(body)
    props = []
    depth = 0
    token = ''
    quote = None
    for c in content+',':
        if quote:
            token += c
            if c == quote: quote = None
            continue
        if c in "'\"`": quote = c
        elif c in '{[(': depth += 1
        elif c in '}])': depth -= 1
        if c == ',' and depth == 0:
            item = token.strip()
            if ':' in item:
                key, spec = item.split(':',1)
                key = key.strip()
                kind = ', '.join(re.findall(r'\b(?:String|Number|Boolean|Array|Object)\b', spec)) or 'any'
                default = re.search(r'default:\s*(\'[^\']*\'|"[^"]*"|\d+|true|false)', spec)
                props.append((key, kind, default.group(1) if default else 'required' if 'required:true' in spec else 'false' if kind == 'Boolean' else 'none'))
            token = ''
        else: token += c
    return props

samples = {
 'SfElement': {'as':'section'},
 'SfAdaptedCards': {'adapter':'rest', 'payload': {'notifications':[{'notification_id':'n-1','category':'message','subject':'Design review','preview':'The team left comments on the new layout.','sender':{'display_name':'Maya Chen'},'received_at':'09:41','unread_count':2}]}},
 'SfInput': {'label':'Email address','placeholder':'you@example.com'},
 'SfTextarea': {'label':'Notes','modelValue':'A clear note for the team.'},
 'SfSelect': {'label':'Workspace','modelValue':'studio','options':[{'label':'Studio','value':'studio'},{'label':'Home','value':'home'}]},
 'SfRadioGroup': {'label':'Plan','modelValue':'team','options':[{'label':'Solo','value':'solo'},{'label':'Team','value':'team'}]},
 'SfTabs': {'modelValue':'overview','options':[{'label':'Overview','value':'overview'},{'label':'Activity','value':'activity'}]},
 'SfSegmented': {'modelValue':'week','options':[{'label':'Week','value':'week'},{'label':'Month','value':'month'}]},
 'SfButtonGroup': {'modelValue':'left','options':[{'label':'Left','value':'left'},{'label':'Center','value':'center'}]},
 'SfBreadcrumbs': {'items':['Workspace','Projects','Softform']},
 'SfNavList': {'modelValue':'home','items':[{'label':'Home','value':'home','icon':'home'},{'label':'Inbox','value':'inbox','icon':'inbox'}]},
 'SfBottomNav': {'modelValue':'home','items':[{'label':'Home','value':'home','icon':'home'},{'label':'Inbox','value':'inbox','icon':'inbox'}]},
 'SfAccordion': {'items':[{'title':'How does it work?','content':'Use native HTML controls and shared Softform tokens.'}]},
 'SfTable': {'caption':'Projects','columns':[{'key':'name','label':'Name'},{'key':'status','label':'Status','badge':True}], 'rows':[{'id':1,'name':'Softform','status':'Active'},{'id':2,'name':'Release notes','status':'Draft'}]},
 'SfTimeline': {'items':[{'title':'Review complete','description':'Maya approved the layout.','time':'09:41'},{'title':'Draft created','description':'A new draft is ready.','time':'Yesterday'}]},
 'SfSwitch': {'modelValue':True,'label':'Focus mode'},
 'SfCheckbox': {'modelValue':True,'label':'Email updates'},
 'SfBadge': {'tone':'accent'},
 'SfIcon': {'name':'spark','size':'lg'},
 'SfIconButton': {'icon':'heart','label':'Save item'},
 'SfProgress': {'value':68,'label':'Workspace sync'},
 'SfMediaPlayer': {'title':'Ceramic'},
 'SfModal': {'modelValue':True},
 'SfDrawer': {'modelValue':True},
 'SfWorkflow': {},
}
slot_samples = {'SfButton':'Create workspace','SfBadge':'Live','SfSurface':'Your content','SfElement':'Semantic section','SfDivider':'or continue with','SfAlert':'Review the details','SfTooltip':'Hover for detail','SfTabs':'Tab content','SfModal':'Dialog content','SfDrawer':'Drawer content'}
import json
index = "import type { App, DefineComponent } from 'vue';\n"
index += "export * from './adapters.js';\n"
for path in components:
    name = path.stem
    text = path.read_text(encoding='utf8')
    props = properties(text)
    events = re.search(r'\bemits:\[([^]]*)\]', text)
    event_names = re.findall(r"'([^']+)'", events.group(1)) if events else []
    description = f'{name} is a Softform Vue component. See the example and prop table below.'
    snippet = f'<{name} />'
    for line in source.splitlines():
        if line.lstrip().startswith(name+':\'') or line.lstrip().startswith(name+':['):
            m = re.match(r"\s*\w+:\['(?:\\'|[^'])*','((?:\\'|[^'])*)','((?:\\'|[^'])*)'\]",line)
            if m: description, snippet = m.group(1), m.group(2).replace('\\n','\n')
            break
    live_links = (f'[Live demo](https://softform-34r5.netlify.app/docs.html?component={name}) · '
                  f'[Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-{name.lower()}--default)')
    doc = f'# {name}\n\n{description}\n\n{live_links}\n\n```vue\n{snippet}\n```\n\n## Props\n\n| Prop | Type | Default |\n| --- | --- | --- |\n'
    doc += ''.join(f'| `{key}` | {kind} | `{default}` |\n' for key,kind,default in props) if props else '| No component props | | |\n'
    doc += '\n## Events\n\n' + (', '.join('`'+event+'`' for event in event_names) if event_names else 'None.')+'\n\n'
    doc += 'Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.\n'
    if any(key == 'as' for key, _, _ in props):
        doc += '\nUse `as` when a different semantic element fits the content.\n'
    (root / 'docs/components' / (name+'.md')).write_text(doc,encoding='utf8')
    mapping = {'String':'string','Number':'number','Boolean':'boolean','Array':'unknown[]','Object':'Record<string, unknown>'}
    lines = ["import type { DefineComponent } from 'vue';", f'export interface {name}Props {{']
    for key,kind,default in props:
        ts_type = ' | '.join(mapping.get(part.strip(), 'unknown') for part in kind.split(','))
        lines.append(f'  {key}{"" if default == "required" else "?"}: {ts_type};')
    lines += ['}', f'declare const {name}: DefineComponent<{name}Props>;', f'export default {name};', '']
    (root / 'types/components' / (name+'.d.ts')).write_text('\n'.join(lines),encoding='utf8')
    defaults = {}
    for key, kind, default in props:
        if default == 'false': defaults[key] = False
        elif default.startswith("'") and default.endswith("'"): defaults[key] = default[1:-1]
        elif default.isdigit(): defaults[key] = int(default)
    defaults.update(samples.get(name, {}))
    args = json.dumps(defaults,ensure_ascii=False)
    arg_types = {key:{'control':'boolean' if kind == 'Boolean' else 'number' if kind == 'Number' else 'object' if kind in ('Array','Object') else 'text'} for key,kind,_ in props}
    slot = slot_samples.get(name,'')
    story = f"import {name} from '../src/components/{name}.vue';\n\nexport default {{ title: 'Components/{name}', component: {name}, argTypes: {json.dumps(arg_types)} }};\n\nexport const Default = {{\n  args: {args},\n  render: args => ({{\n    components: {{ {name} }},\n    setup() {{ return {{ args }}; }},\n    template: `<{name} v-bind=\"args\" @update:modelValue=\"args.modelValue = $event\">{slot}</{name}>`,\n  }}),\n}};\n"
    (root / 'stories' / (name+'.stories.js')).write_text(story,encoding='utf8')
    index += f"export {{ default as {name} }} from './components/{name}.js';\n"
index += "export declare const SoftformPlugin: { install(app: App, options?: { registry?: import('./adapters.js').AdapterRegistry }): void };\n"
(root / 'types/index.d.ts').write_text(index,encoding='utf8')
print('Generated docs and stories for',len(components),'components')
