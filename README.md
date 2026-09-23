# Softform

Softform is a reusable component library built from the original standalone gallery. It contains the 52 original components plus `SfElement` for semantic roots. Every component has a Vue import, a framework-neutral custom element registration, a prop reference, a live docs demo, and a Storybook story. The library also has a data adapter registry and an [agent-readable dictionary](docs/agent-guide.md).

```bash
npm install
npm run dev
npm run storybook
```

The example site has a [dashboard](http://127.0.0.1:5173/), [inbox](http://127.0.0.1:5173/examples/inbox.html), [settings page](http://127.0.0.1:5173/examples/settings.html), [analytics report](http://127.0.0.1:5173/examples/analytics.html), [session planner](http://127.0.0.1:5173/examples/planner.html), [plain HTML page](http://127.0.0.1:5173/examples/elements.html), [React page](http://127.0.0.1:5173/examples/react.html), [53-element gallery](http://127.0.0.1:5173/examples/elements-gallery.html), and [documentation browser](http://127.0.0.1:5173/docs.html). Storybook runs at [localhost:6006](http://127.0.0.1:6006/).

The analytics report uses local sample data to demonstrate staged loading. Sliders control the delay, duration, and spacing between bar animations. It also switches between vertical and horizontal bars, and between searchable table and card views. The planner includes validation, available time slots, a review dialog, and a local booking list.

Selection components expose `motion`, `motionDelay`, `motionDuration`, and `motionEasing`. The dashboard, inbox, and settings examples keep their navigation mounted so the selected destination fills when it changes. Settings lets you tune that fill. `SfInput` passes native input types and their matching attributes to the actual input.

```vue
<script setup>
import { SfButton, SfSurface } from '@bclonan/softform';
import '@bclonan/softform/styles.css';
</script>

<template>
  <SfSurface as="article">
    <h2>New ideas</h2>
    <SfButton variant="accent" @click="create">Create project</SfButton>
  </SfSurface>
</template>
```

See [usage and adapters](docs/README.md), [design guidelines](docs/design-guidelines.md), and the [component references](docs/components/SfButton.md). Run `npm run check` for tests, package and example builds, and the Storybook build.

The library exports each Vue component and custom element registration as its own ES module. Vue imports use Vue as a peer dependency and import CSS separately. Custom element imports include a bundled renderer and scoped styles, so a plain HTML page can use them without a Vue app. Import only the components the page needs.

React apps can import one adapter at a time. The adapter registers its custom element, passes arrays and objects as DOM properties, and listens to native events. `onValueChange` receives the value and original event.

```jsx
import { useState } from 'react';
import { SfInput } from '@bclonan/softform/react/SfInput';

function NameField() {
  const [name, setName] = useState('');
  return <SfInput label="Name" modelValue={name} onValueChange={setName} />;
}
```

The package supports Vue 3.5, React 18.3 or 19, and browser custom elements. The React and Vue dependencies are optional peers. Install the framework you use. The [package guide](docs/README.md) covers each import path.
