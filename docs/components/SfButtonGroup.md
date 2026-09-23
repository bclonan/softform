# SfButtonGroup

A compact controlled group for related tools. It emits a new value without mutating props.

```vue
<sf-button-group v-model="alignment"
  label="Text alignment" :options="alignments" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | String | `none` |
| `options` | Array | `none` |
| `label` | String | `'Button group'` |
| `motion` | Boolean | `true` |
| `motionDelay` | Number | `0` |
| `motionDuration` | Number | `360` |
| `motionEasing` | String | `'cubic-bezier(.2,.8,.2,1)'` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

The pressed option fills when `modelValue` changes. Timing uses milliseconds. Set `motion=false` to remove the fill; reduced-motion preference also removes it.
