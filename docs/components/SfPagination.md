# SfPagination

A controlled page selector with bounded previous and next actions.

```vue
<sf-pagination v-model="page" :pages="4" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | Number | `1` |
| `pages` | Number | `4` |
| `motion` | Boolean | `true` |
| `motionDelay` | Number | `0` |
| `motionDuration` | Number | `360` |
| `motionEasing` | String | `'cubic-bezier(.2,.8,.2,1)'` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

The current page fills when the controlled page number changes. Timing uses milliseconds. Set `motion=false` to remove the fill; reduced-motion preference also removes it.
