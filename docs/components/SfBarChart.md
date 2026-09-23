# SfBarChart

A lightweight HTML/CSS chart with a full textual data description. No canvas or chart library dependency.

```vue
<SfBarChart :values="[28,43,35,62,49,84,61]"
  :labels="['M','T','W','T','F','S','S']"
  :highlight="5" label="Activity" :loading="pending"
  :motion-delay="200" :motion-duration="760" :stagger="90" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `values` | Array | `none` |
| `labels` | Array | `none` |
| `label` | String | `'Activity'` |
| `unit` | String | `'THIS WEEK'` |
| `highlight` | Number | `5` |
| `loading` | Boolean | `false` |
| `orientation` | String | `'vertical'` |
| `accentColor` | String | `''` |
| `motionDelay` | Number | `0` |
| `motionDuration` | Number | `650` |
| `stagger` | Number | `80` |
| `animateOnMount` | Boolean | `true` |

## Events

None.

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

Set `loading` while the host waits for data. Bars start at zero and rise after `motionDelay`, with each bar offset by `stagger`. New `values` animate to their updated heights. Timing values use milliseconds. Reduced-motion preference removes the transition.

Set `orientation="horizontal"` when labels are longer or the chart sits in a narrow card. `accentColor` changes the highlighted bar. Both layouts keep the same text description for assistive technology.
