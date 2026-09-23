# SfDonutChart

A CSS conic-gradient ring, numeric center, and legend. Provide a percentage from 0 to 100.

```vue
<sf-donut-chart :value="72" label="Focus"
  primary="Focused" secondary="Available" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `value` | Number | `72` |
| `label` | String | `'Focus'` |
| `primary` | String | `'Focused'` |
| `secondary` | String | `'Available'` |
| `size` | Number | `110` |
| `thickness` | Number | `9` |
| `primaryColor` | String | `''` |
| `secondaryColor` | String | `''` |
| `loading` | Boolean | `false` |
| `motionDelay` | Number | `0` |
| `motionDuration` | Number | `650` |
| `animateOnMount` | Boolean | `true` |

## Events

None.

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

The ring and center number follow the same timed value. `loading` holds the ring at zero and labels it busy until the host supplies data. Timing values use milliseconds. Reduced-motion preference shows the final value immediately.

`size` and `thickness` use pixels. Color props accept CSS colors; leave them empty to use the theme tokens.
