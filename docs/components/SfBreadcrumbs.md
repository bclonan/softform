# SfBreadcrumbs

A path with a current-page marker. Earlier items emit navigate events for your router or view state.

```vue
<sf-breadcrumbs :items="[\'Library\', \'Controls\', \'Dial\']"
  @navigate="navigate" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `items` | Array | `none` |

## Events

`navigate`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
