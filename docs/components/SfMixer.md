# SfMixer

Four native vertical sliders. Changes emit a copied channel array; application audio routing is intentionally separate.

```vue
<sf-mixer v-model="channels"
  :labels="[\'Voice\',\'Ambient\',\'Alerts\',\'Master\']" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | Array | `none` |
| `labels` | Array | `none` |
| `title` | String | `'Sound levels'` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
