# SfSwitch

A native checkbox exposed as a switch. The tiny yellow thumb indicates the on state.

```vue
<sf-switch v-model="focusMode" label="Focus mode" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | Boolean | `false` |
| `label` | String | `'Toggle'` |
| `hideLabel` | Boolean | `false` |
| `disabled` | Boolean | `false` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
