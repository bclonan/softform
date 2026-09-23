# SfToast

A compact live status message with an optional dismiss action. Placement and timing belong to the host app.

```vue
<sf-toast message="Workspace saved."
  @dismiss="visible = false" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `as` | String | `'div'` |
| `message` | String | `'Changes saved to your workspace.'` |
| `dismissible` | Boolean | `true` |

## Events

`dismiss`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

Use `as` when a different semantic element fits the content.
