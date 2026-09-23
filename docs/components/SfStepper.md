# SfStepper

Increment, decrement, or type a numeric value. Every change is clamped to the provided limits.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfStepper) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfstepper--default)

```vue
<sf-stepper v-model="quantity" :min="1" :max="12"
  label="Guests" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | Number | `1` |
| `min` | Number | `0` |
| `max` | Number | `99` |
| `label` | String | `'Quantity'` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
