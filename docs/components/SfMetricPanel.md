# SfMetricPanel

A dense dashboard module combining a total, two counters, and a compact activity chart.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfMetricPanel) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfmetricpanel--default)

```vue
<sf-metric-panel title="Messages" :total="84"
  :primary="63" :secondary="21" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `title` | String | `'Messages'` |
| `total` | Number | `84` |
| `primary` | Number | `63` |
| `secondary` | Number | `21` |
| `loading` | Boolean | `false` |
| `motionDelay` | Number | `0` |
| `motionDuration` | Number | `650` |
| `stagger` | Number | `80` |
| `animateOnMount` | Boolean | `true` |

## Events

None.

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

The counters and embedded bar chart use the same timing props. `loading` holds them at a pending state until the host clears it. Timing values use milliseconds.
