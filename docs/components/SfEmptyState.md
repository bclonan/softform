# SfEmptyState

A composed icon, title, supporting text, and optional action for a meaningful blank state.

```vue
<sf-empty-state title="All caught up."
  message="No new messages." action="New message"
  @action="compose" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `as` | String | `'div'` |
| `title` | String | `'A little room for possibility.'` |
| `message` | String | `'Your collection starts with a single component.'` |
| `action` | String | `'Create collection'` |
| `icon` | String | `'inbox'` |

## Events

`action`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

Use `as` when a different semantic element fits the content.
