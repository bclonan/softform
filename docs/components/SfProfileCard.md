# SfProfileCard

A reusable profile composition with initials, status, role, and an action affordance.

[Live demo](https://softform-34r5.netlify.app/docs.html?component=SfProfileCard) · [Storybook](https://softform-34r5.netlify.app/storybook/?path=/story/components-sfprofilecard--default)

```vue
<sf-profile-card name="Brad Morgan" initials="AM"
  role="Product designer" @action="openProfile" />
```

## Props

| Prop | Type | Default |
| --- | --- | --- |
| `name` | String | `'Brad Morgan'` |
| `role` | String | `'Product designer'` |
| `initials` | String | `'AM'` |
| `status` | String | `'Available for ideas'` |

## Events

`action`

Native `class`, `style`, ARIA, and other undeclared attributes pass through to the root element.
