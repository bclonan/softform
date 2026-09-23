# SfSlider

A native range input with output, limits, units, and optional end labels.

```vue
<sf-slider v-model="brightness" label="Brightness"
  :min="0" :max="100" unit="%" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | Number | `50` |
| `min` | Number | `0` |
| `max` | Number | `100` |
| `step` | Number | `1` |
| `label` | String | `'Level'` |
| `unit` | String | `'%'` |
| `ticks` | Boolean | `true` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
