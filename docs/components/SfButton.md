# SfButton

Surface, dark, accent, and ghost actions. Supports icons, loading, and disabled states.

```vue
<sf-button variant="accent" icon="plus"
  @click="createWorkspace">Create workspace</sf-button>
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | String | `'surface'` |
| `size` | String | `none` |
| `icon` | String | `none` |
| `loading` | Boolean | `false` |
| `disabled` | Boolean | `false` |
| `type` | String | `'button'` |

## Events

`click`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
