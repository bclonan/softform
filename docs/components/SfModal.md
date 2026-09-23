# SfModal

A native modal dialog with Escape, focus containment, focus restoration, and optional footer content.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfModal) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfmodal--default)

```vue
<sf-modal v-model="open" title="Create workspace">
  <p>Your new space starts here.</p>
  <template #footer>
    <sf-button @click="open = false">Done</sf-button>
  </template>
</sf-modal>
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | Boolean | `false` |
| `title` | String | `'A moment of clarity'` |
| `code` | Boolean | `false` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
