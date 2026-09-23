# SfDropdown

A floating action menu with outside-click dismissal, Escape, focus restoration, and arrow-key navigation.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfDropdown) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfdropdown--default)

```vue
<sf-dropdown label="Quick actions" :items="actions"
  @select="handleAction" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `label` | String | `'Quick actions'` |
| `items` | Array | `none` |

## Events

`select`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
