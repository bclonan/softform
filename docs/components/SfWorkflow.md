# SfWorkflow

A set of physical-looking nodes joined by hairlines. Selection is controlled by the parent.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfWorkflow) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfworkflow--default)

```vue
<sf-workflow v-model="selectedNode" :nodes="nodes" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | String | `'adapt'` |
| `nodes` | Array | `none` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
