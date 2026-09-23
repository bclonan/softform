# SfProgress

A native progress element with a label and numeric output. Values represent real state supplied by the host.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfProgress) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfprogress--default)

```vue
<sf-progress :value="progress"
  label="Processing components" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `value` | Number | `68` |
| `label` | String | `'Workspace sync'` |
| `tone` | String | `none` |
| `loading` | Boolean | `false` |
| `motionDelay` | Number | `0` |
| `motionDuration` | Number | `650` |
| `animateOnMount` | Boolean | `true` |

## Events

None.

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

The native progress value and text count toward the supplied percentage. `loading` holds a zero value with a loading label. Use the actual measured percentage, then clear `loading` when it is ready. Timing values use milliseconds.
