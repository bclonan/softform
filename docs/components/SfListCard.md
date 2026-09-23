# SfListCard

A compact row-based card for calls, contacts, tasks, or recent items. Emits the selected row.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfListCard) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sflistcard--default)

```vue
<sf-list-card title="Recent calls" :items="calls"
  @select="openCall" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `title` | String | `'Recent calls'` |
| `items` | Array | `none` |

## Events

`select`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
