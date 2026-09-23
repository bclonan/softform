# SfTooltip

A hint shown on hover or focus. The slot receives its tooltip id to attach with aria-describedby.

```vue
<sf-tooltip text="Saved to your collection" v-slot="{ describedby }">
  <sf-icon-button icon="heart" label="Save item"
    :aria-describedby="describedby" />
</sf-tooltip>
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `text` | String | `required` |

## Events

None.

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
