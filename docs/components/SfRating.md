# SfRating

Keyboard-operable star selection with radio semantics. Arrow keys, Home, and End are supported.

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
