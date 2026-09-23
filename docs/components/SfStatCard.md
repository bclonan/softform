# SfStatCard

A large figure, label, icon, change marker, and supporting context.

```vue
<sf-stat-card label="Messages" :value="128"
  change="+12.8%" description="since last week" icon="mail" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `label` | String | `'Messages'` |
| `value` | String, Number | `128` |
| `change` | String | `none` |
| `description` | String | `'since last week'` |
| `icon` | String | `'mail'` |
| `loading` | Boolean | `false` |
| `motionDelay` | Number | `0` |
| `motionDuration` | Number | `650` |
| `animateOnMount` | Boolean | `true` |

## Events

None.

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

Numeric values count toward the new value. String values keep a short text transition. `loading` shows an ellipsis until the host has data. Timing values use milliseconds.
