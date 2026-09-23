# SfTabs

A controlled tablist with roving focus, linked tab panel, and directional keyboard navigation.

```vue
<sf-tabs v-model="activeTab" :options="tabs">
  <p>{{ content[activeTab] }}</p>
</sf-tabs>
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | String | `none` |
| `options` | Array | `none` |
| `label` | String | `'Tabs'` |
| `motion` | Boolean | `true` |
| `motionDelay` | Number | `0` |
| `motionDuration` | Number | `360` |
| `motionEasing` | String | `'cubic-bezier(.2,.8,.2,1)'` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

The active underline fills toward the new tab. The panel transition remains separate. Arrow keys, Home, and End still select tabs. Timing uses milliseconds; `motion=false` and reduced-motion preference remove the underline animation.
