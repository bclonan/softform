# SfNotification

A small content card with stable presentation props. It knows nothing about REST, GraphQL, or legacy payloads.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfNotification) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfnotification--default)

```vue
<sf-notification title="Design review" sender="Maya Chen"
  body="The new surfaces are ready." time="09:41"
  :count="4" icon="mail" @action="openMessage" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `title` | String | `'Design review'` |
| `body` | String | `'Your new component library is ready to explore.'` |
| `sender` | String | `'Maya Chen'` |
| `time` | String | `'09:41'` |
| `icon` | String | `'mail'` |
| `count` | Number | `0` |
| `action` | String | `'Open'` |

## Events

`action`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
