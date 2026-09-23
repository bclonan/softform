# SfBottomNav

A compact navigation bar for phone-sized layouts, with visible labels and an accent active state.

```vue
<sf-bottom-nav v-model="page" :items="navigation" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | String | `none` |
| `items` | Array | `none` |
| `motion` | Boolean | `true` |
| `motionDelay` | Number | `0` |
| `motionDuration` | Number | `360` |
| `motionEasing` | String | `'cubic-bezier(.2,.8,.2,1)'` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

The selected icon fills from the previous item when `modelValue` changes. Timing uses milliseconds. `motion=false` or reduced-motion preference shows the new selection immediately. Give every item a stable `value`, visible `label`, and icon.
