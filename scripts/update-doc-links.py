"""Add stable live URLs without replacing hand-edited component references."""

from pathlib import Path

root = Path(__file__).resolve().parent.parent
count = 0
for path in sorted((root / 'docs/components').glob('Sf*.md')):
    name = path.stem
    content = path.read_text(encoding='utf8')
    if 'https://softform-34r5.netlify.app/docs.html?component=' in content:
        continue
    links = (f'[Live demo](https://softform-34r5.netlify.app/docs.html?component={name}) · '
             f'[Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-{name.lower()}--default)')
    marker = '\n\n```vue'
    if marker not in content:
        raise ValueError(f'Missing Vue example in {path}')
    path.write_text(content.replace(marker, f'\n\n{links}{marker}', 1), encoding='utf8')
    count += 1
print(f'Updated {count} component references')
