# SfAccordion

Native details elements preserve open/close and keyboard behavior. Multiple sections may remain open.

```vue
<sf-accordion :items="[{
  title: \'Can I customize the materials?\',
  content: \'Yes. Edit the shared CSS tokens.\'
}]" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `items` | Array | `none` |

## Events

None.

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
