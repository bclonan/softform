# Softform documentation

Softform has 53 components, including 52 from the original gallery and `SfElement` for semantic roots. Each component has Vue, React, and custom element imports, a [prop and event reference](./components/SfButton.md), a live documentation demo, and a Storybook story. The [agent guide](./agent-guide.md) explains the dictionary and selection rules. The original standalone gallery remains in `softform-component-library.html` for comparison.

[Live site](https://softform-34r5.netlify.app/) · [Component docs](https://softform-34r5.netlify.app/docs.html) · [Storybook](https://softform-34r5.netlify.app/storybook/) · [npm package](https://www.npmjs.com/package/@bclonan/softform)

![Softform component docs showing the SfSegmented demo](https://softform-34r5.netlify.app/screenshots/docs.png)

## Install from npm

```bash
npm install @bclonan/softform
```

Add `vue` for the Vue API or `react` for the React adapters. The custom element API needs neither framework installed by the consuming app. The [React example](https://softform-34r5.netlify.app/examples/react.html) and [plain HTML example](https://softform-34r5.netlify.app/examples/elements.html) show both paths.

## Build and install locally

```bash
cd softform
npm install
npm run build
mkdir release
npm pack --pack-destination release
```

In a sibling Vue project, install the tarball and Vue:

```bash
npm install ../softform/release/bclonan-softform-1.3.1.tgz vue
```

```vue
<script setup>
import { SfButton, SfSurface } from '@bclonan/softform';
import '@bclonan/softform/styles.css';
</script>

<template>
  <SfSurface as="article">
    <h2>Quarterly report</h2>
    <SfButton variant="accent" @click="openReport">Open report</SfButton>
  </SfSurface>
</template>
```

Import named components for the best bundle result. The `SoftformPlugin` registers the full set when a small app prefers global components. Styles are a separate CSS import, so JavaScript imports stay free of global styling.

For native HTML, install the tarball and register individual custom elements. No Vue app is needed. The custom element build includes its own renderer and styles.

For React, install the tarball and React. Import one adapter per component so the app bundle only contains what it uses. The adapter registers the custom element in the browser. Server rendering emits the custom tag, then React connects events and object props after hydration.

```jsx
import { useState } from 'react';
import { SfInput } from '@bclonan/softform/react/SfInput';

function Example() {
  const [name, setName] = useState('');
  return <SfInput label="Name" modelValue={name} onValueChange={setName} />;
}
```

`onValueChange(value, event)` handles the custom element's `input` event. `onClick`, `onChange`, and `onInput` receive native DOM events. `onSoftformEvent(name, event)` receives other events named in each component reference. Vue custom event arguments are in `event.detail`. Use a ref when an app needs the custom element directly. React adapters use React 18.3 or 19; Vue imports use Vue 3.5.

```js
import { registerSfInput } from '@bclonan/softform/elements/SfInput';
registerSfInput();
document.querySelector('sf-input').addEventListener('input', event => {
  console.log(event.detail.value);
});
```

```html
<sf-input label="Workspace name" hint="Changes appear as you type"></sf-input>
```

## Semantics

`SfElement` accepts any native HTML element through `as` in Vue. It forwards attributes and slots, with no tag allowlist. `SfSurface`, `SfBadge`, `SfDivider`, `SfAlert`, `SfToast`, and `SfEmptyState` also accept `as`. Choose the tag that matches the content, such as `article` for a card, `section` for a titled region, or `aside` for supporting information. Use native inputs, buttons, links, tables, dialogs, and fieldsets where the corresponding component already supplies them. For plain HTML custom elements, use native landmark tags around the custom element because the host itself remains a custom tag. Use an anchor for navigation.

```vue
<SfElement as="main" id="content" aria-label="Dashboard">
  <SfSurface as="section" aria-labelledby="activity-heading">
    <h2 id="activity-heading">Activity</h2>
  </SfSurface>
</SfElement>
```

## Data adapters

`SfAdaptedCards` receives a provider name and payload. The registry converts provider data to `CardModel` before any card renders. The shipped registry supports REST, GraphQL, and a tuple-based legacy format. Register a custom adapter that implements `adapt(payload)` and provide the registry to the app.

```js
import { createAdapterRegistry, ADAPTER_KEY } from '@bclonan/softform/adapters';

const registry = createAdapterRegistry().register('my-api', {
  adapt(payload) {
    return payload.items.map(item => ({
      id: item.id,
      type: 'message',
      title: item.title,
      body: item.body,
      sender: item.author,
      time: item.time,
      count: item.unreadCount,
    }));
  },
});
app.provide(ADAPTER_KEY, registry);
```

The registry checks the model, rejects duplicate IDs and invalid counts, and returns frozen cards. `SfAdaptedCards` emits `adapted`, `error`, and `select` so callers can handle loading, failures, and navigation in their own app.

## Examples and Storybook

Browse the [dashboard](https://softform-34r5.netlify.app/), [inbox](https://softform-34r5.netlify.app/examples/inbox.html), [settings](https://softform-34r5.netlify.app/examples/settings.html), [analytics report](https://softform-34r5.netlify.app/examples/analytics.html), [session planner](https://softform-34r5.netlify.app/examples/planner.html), [React](https://softform-34r5.netlify.app/examples/react.html), [plain HTML](https://softform-34r5.netlify.app/examples/elements.html), [53-element gallery](https://softform-34r5.netlify.app/examples/elements-gallery.html), and [documentation](https://softform-34r5.netlify.app/docs.html) examples. The analytics report shows staged loading and programmable chart delays. The planner has a complete local booking flow. Each component page in the documentation browser has a working demo. [Storybook](https://softform-34r5.netlify.app/storybook/) has one story and live props controls per component. `npm run check` runs tests, builds the example sites and package, and builds Storybook.

## Package layout

`@bclonan/softform` exposes named Vue exports, and `@bclonan/softform/components/SfButton` exposes a single default Vue component. `@bclonan/softform/react/SfButton` exports the React adapter. `@bclonan/softform/elements/SfButton` has a named function that registers the corresponding custom element. The build keeps a file per entry and shares internal dependencies. React and Vue are optional peer dependencies. Custom element imports bundle the renderer and inject scoped styles. The package does not mount an app.

