# SfBadge

Compact status, count, and metadata markers. Four treatments: default, accent, dark, outline.

```vue
<sf-badge tone="accent" :dot="true">Live</sf-badge>
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `as` | String | `'span'` |
| `tone` | String | `''` |
| `dot` | Boolean | `false` |

## Events

None.

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

Use `as` when a different semantic element fits the content.
