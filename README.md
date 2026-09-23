# Softform

Softform is a library of 53 responsive components for Vue, React, and plain JavaScript. The components use native HTML controls, configurable motion, and a shared visual system. Each one has a prop reference, a live demo, and a Storybook story. The library also includes a data adapter registry and a [component dictionary for agents](https://github.com/bclonan/softform/blob/main/docs/agent-guide.md).

[Live examples](https://softform-34r5.netlify.app/) · [Component docs](https://softform-34r5.netlify.app/docs.html) · [Storybook](https://softform-34r5.netlify.app/storybook/) · [npm package](https://www.npmjs.com/package/@bclonan/softform)

## Screenshots

The examples use local sample data. The charts show staged loading and animate when values change.

### Workspace dashboard

![Softform workspace dashboard with metrics, activity chart, and navigation](https://softform-34r5.netlify.app/screenshots/dashboard.png)

### Analytics report

![Softform analytics report with metrics and animated charts](https://softform-34r5.netlify.app/screenshots/analytics.png)

### Component documentation

![Softform documentation with the SfSegmented live demo and prop controls](https://softform-34r5.netlify.app/screenshots/docs.png)

### React example

![Softform React example with controlled input, navigation, and chart](https://softform-34r5.netlify.app/screenshots/react.png)

## Install

```bash
npm install @bclonan/softform
```

Install Vue 3.5 or React 18.3/19 if you use that framework. Both are optional peer dependencies. Plain JavaScript users can register custom elements without mounting a framework app.

### Vue

```vue
<script setup>
import SfSurface from '@bclonan/softform/components/SfSurface';
import SfButton from '@bclonan/softform/components/SfButton';
import '@bclonan/softform/styles.css';
</script>

<template>
  <SfSurface as="section" aria-labelledby="project-heading">
    <h2 id="project-heading">Projects</h2>
    <SfButton variant="accent">Create project</SfButton>
  </SfSurface>
</template>
```

Import from the package root when you prefer named Vue exports. Import from `components/SfName` when you want a path for one component.

### React

```jsx
import { useState } from 'react';
import { SfInput } from '@bclonan/softform/react/SfInput';

function NameField() {
  const [name, setName] = useState('');
  return <SfInput label="Name" modelValue={name} onValueChange={value => setName(String(value))} />;
}
```

The React adapter registers the custom element, sets arrays and objects as DOM properties, and listens to its native events. Import only the adapters you use.

### Plain JavaScript

```js
import { registerSfSlider } from '@bclonan/softform/elements/SfSlider';

registerSfSlider();
document.querySelector('sf-slider').addEventListener('input', event => {
  console.log(event.detail.value);
});
```

```html
<sf-slider label="Volume" min="0" max="100"></sf-slider>
```

Custom element imports include their renderer and scoped styles. The Vue API imports CSS separately. Component JavaScript imports are tree shakable; custom elements share the library stylesheet.

## Explore the examples

[Dashboard](https://softform-34r5.netlify.app/) · [Inbox](https://softform-34r5.netlify.app/examples/inbox.html) · [Settings](https://softform-34r5.netlify.app/examples/settings.html) · [Analytics](https://softform-34r5.netlify.app/examples/analytics.html) · [Planner](https://softform-34r5.netlify.app/examples/planner.html) · [React](https://softform-34r5.netlify.app/examples/react.html) · [Plain HTML](https://softform-34r5.netlify.app/examples/elements.html) · [53-element gallery](https://softform-34r5.netlify.app/examples/elements-gallery.html)

Selection components expose `motion`, `motionDelay`, `motionDuration`, and `motionEasing`. Charts and metric components can animate data loading with configurable delays and durations. `SfInput` passes native input types and their matching attributes to the actual input. `SfAdaptedCards` accepts REST, GraphQL, legacy, or custom payload adapters.

See the [package guide](https://github.com/bclonan/softform/blob/main/docs/README.md), [design guidelines](https://github.com/bclonan/softform/blob/main/docs/design-guidelines.md), and [live component reference](https://softform-34r5.netlify.app/docs.html) for props, events, and usage advice.

## Develop locally

```bash
npm install
npm run dev
npm run storybook
npm run check
```

`npm run check` runs the tests, package and example builds, type checks, tree shaking smoke checks, and the Storybook build. The example sites use local sample data.

MIT licensed. See [LICENSE](https://github.com/bclonan/softform/blob/main/LICENSE).

## Author & Contact

Created by **Bradley Clonan**, software engineer and architect building developer tools and AI/ML systems.

[LinkedIn](https://www.linkedin.com/in/bclonan/) · [GitHub](https://github.com/bclonan) · [Portfolio](https://bclonan.netlify.app/) · [X](https://x.com/ClonanBradley) · [Email](mailto:clonanxyz@gmail.com)

Questions, feedback, or collaboration ideas? Open an issue or reach out directly.