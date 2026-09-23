# SfRating

Keyboard-operable star selection with radio semantics. Arrow keys, Home, and End are supported.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfRating) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfrating--default)

```vue
<sf-rating v-model="rating" :max="5"
  label="Rate this library" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | Number | `4` |
| `max` | Number | `5` |
| `label` | String | `'Rating'` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
