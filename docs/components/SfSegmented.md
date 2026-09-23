# SfSegmented

A native radio group in an inset tray. Use for view modes or mutually exclusive settings.

```vue
<sf-segmented v-model="view"
  label="View mode" :options="views" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | String | `none` |
| `options` | Array | `none` |
| `label` | String | `'View'` |
| `motion` | Boolean | `true` |
| `motionDelay` | Number | `0` |
| `motionDuration` | Number | `360` |
| `motionEasing` | String | `'cubic-bezier(.2,.8,.2,1)'` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

The checked option fills after selection. The native radio inputs retain keyboard behavior. Timing uses milliseconds; `motion=false` and reduced-motion preference remove the fill animation.
