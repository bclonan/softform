# SfAdaptedCards

Injects a registry, normalizes the provider payload, validates an immutable CardModel array, then renders provider-agnostic notification cards.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfAdaptedCards) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfadaptedcards--default)

```vue
<sf-adapted-cards adapter="rest" :payload="apiResponse"
  @select="openCard" @error="reportError" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `adapter` | String | `'rest'` |
| `payload` | Object | `required` |
| `registry` | Object | `injected registry` |

## Events

`select`, `adapted`, `error`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

Pass a custom registry through the `registry` property in plain JavaScript. Vue apps may also provide `ADAPTER_KEY` to the component tree.
