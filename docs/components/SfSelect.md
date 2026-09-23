# SfSelect

A native select preserves operating-system pickers and keyboard behavior.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfSelect) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfselect--default)

```vue
<sf-select v-model="workspace"
  label="Workspace" :options="workspaces" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | String | `none` |
| `label` | String | `none` |
| `options` | Array | `none` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
