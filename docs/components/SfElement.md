# SfElement

Renders any native HTML tag in Vue while forwarding its attributes and slot content.

```vue
<SfElement as="article" aria-labelledby="report-title">
  <h2 id="report-title">Quarterly report</h2>
</SfElement>
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `as` | String | `'div'` |

## Events

None.

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
