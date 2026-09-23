# SfNavList

A ceramic side menu with icons, counts, and a current-page marker.

```vue
<sf-nav-list v-model="section" :items="navigation" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | String | `none` |
| `items` | Array | `none` |
| `label` | String | `'Main navigation'` |
| `motion` | Boolean | `true` |
| `motionDelay` | Number | `0` |
| `motionDuration` | Number | `360` |
| `motionEasing` | String | `'cubic-bezier(.2,.8,.2,1)'` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

The active row fills on a controlled selection change. Timing uses milliseconds. Set `motion=false` to disable the fill. Reduced-motion preference disables it too.
