# SfTable

A semantic table with sortable column headers. Data is copied before sorting, never mutated in place.

```vue
<sf-table :columns="columns" :rows="rows"
  caption="Recent activity" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `columns` | Array | `none` |
| `rows` | Array | `none` |
| `caption` | String | `'Recent activity'` |
| `view` | String | `'table'` |
| `searchable` | Boolean | `false` |
| `searchPlaceholder` | String | `'Search records'` |
| `pageSize` | Number | `0` |
| `loading` | Boolean | `false` |
| `emptyText` | String | `'No records yet.'` |
| `rowKey` | String | `'id'` |
| `compact` | Boolean | `false` |

## Events

None.

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.

Set `view="cards"` for a stacked record layout. `searchable` filters across visible columns, `pageSize` enables local paging, and `loading` announces a pending data set. A column with `sortable:false` gets a plain header. A column with `badge:true` renders status badges. Use named `#cell-key` slots in Vue for custom values; for example `#cell-owner`. Search, sorting, and paging use the supplied rows in memory and never mutate them. Pass stable row IDs through `rowKey`.
