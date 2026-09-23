# SfFileUpload

Choose or drop a local file. The component emits a File object; it does not send data anywhere. Accept filters the chooser only; validate dropped files in your application.

```vue
<sf-file-upload accept=".png,.jpg,.svg"
  @select="file = $event" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `accept` | String | `'.png,.jpg,.jpeg,.svg,.json'` |
| `label` | String | `'Drop a file here'` |

## Events

`select`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
