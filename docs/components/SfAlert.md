# SfAlert

Informational, warning, and error states. Errors use alert semantics; other messages use status.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfAlert) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfalert--default)

```vue
<sf-alert tone="warning" title="One small thing"
  message="Review your changes before continuing." />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `as` | String | `'div'` |
| `title` | String | `'A little heads up'` |
| `message` | String | `none` |
| `tone` | String | `'info'` |

## Events

None.

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

Use `as` when a different semantic element fits the content.
