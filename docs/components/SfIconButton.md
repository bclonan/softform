# SfIconButton

A tactile round control. Every instance requires a descriptive label.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfIconButton) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sficonbutton--default)

```vue
<sf-icon-button icon="heart" label="Save item"
  tone="accent" :pressed="saved" @click="saved = !saved" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `icon` | String | `'plus'` |
| `label` | String | `required` |
| `tone` | String | `none` |
| `size` | String | `none` |
| `disabled` | Boolean | `false` |
| `pressed` | Boolean | `false` |

## Events

`click`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
