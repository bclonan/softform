# SfDrawer

A right-side native dialog for settings and contextual details. Its content is provided through slots.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfDrawer) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfdrawer--default)

```vue
<sf-drawer v-model="open" title="Workspace settings">
  <sf-switch v-model="notifications" label="Notifications" />
</sf-drawer>
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | Boolean | `false` |
| `title` | String | `'Workspace settings'` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
