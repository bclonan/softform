# SfTextarea

A controlled native textarea with a live character count and maximum length.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfTextarea) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sftextarea--default)

```vue
<sf-textarea v-model="notes" label="Workspace notes"
  :maxlength="240" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | String | `''` |
| `label` | String | `none` |
| `placeholder` | String | `none` |
| `maxlength` | Number | `240` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
