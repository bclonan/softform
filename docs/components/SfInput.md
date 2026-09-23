# SfInput

A native input inside an inset material, with explicit label, icon, hint, and error state.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfInput) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfinput--default)

```vue
<sf-input v-model="email" label="Email address"
  type="email" icon="mail" placeholder="you@studio.co" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `modelValue` | String, Number | `''` |
| `label` | String | `none` |
| `placeholder` | String | `none` |
| `type` | String | `'text'` |
| `icon` | String | `none` |
| `hint` | String | `none` |
| `error` | String | `none` |
| `disabled` | Boolean | `false` |
| `required` | Boolean | `false` |
| `readonly` | Boolean | `false` |
| `name` | String | `none` |
| `autocomplete` | String | `none` |
| `inputmode` | String | `none` |
| `min` | String, Number | `none` |
| `max` | String, Number | `none` |
| `step` | String, Number | `none` |
| `minlength` | Number | `none` |
| `maxlength` | Number | `none` |
| `pattern` | String | `none` |
| `multiple` | Boolean | `false` |
| `accept` | String | `none` |
| `capture` | String | `none` |
| `list` | String | `none` |
| `checkedValue` | String | `'on'` |
| `size` | Number | `none` |
| `autofocus` | Boolean | `false` |
| `spellcheck` | Boolean, String | `none` |
| `enterkeyhint` | String | `none` |
| `src` | String | `none` |
| `alt` | String | `none` |
| `width` | Number | `none` |
| `height` | Number | `none` |
| `form` | String | `none` |
| `formaction` | String | `none` |
| `formenctype` | String | `none` |
| `formmethod` | String | `none` |
| `formnovalidate` | Boolean | `false` |
| `formtarget` | String | `none` |
| `dirname` | String | `none` |

## Events

`update:modelValue`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

`type` passes through to the native input. It supports button, checkbox, color, date, datetime-local, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, text, time, URL, and week. Matching native attributes, including form submission and image attributes, reach the input. Text and number inputs emit their string value. Checkbox emits a Boolean, radio emits `checkedValue`, and file emits a `FileList`. For a standalone checkbox, range, or file picker, prefer SfCheckbox, SfSlider, or SfFileUpload when their specialized UI fits. Use SfButton for a styled button.
