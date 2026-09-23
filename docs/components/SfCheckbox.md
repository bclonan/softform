# SfCheckbox

A native checkbox with a clear selected state, label, and disabled option.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfCheckbox) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfcheckbox--default)

```vue
<sf-checkbox v-model="notifications"
  label="Email notifications" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | Boolean | `false` |
| `label` | String | `'Checkbox'` |
| `disabled` | Boolean | `false` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
