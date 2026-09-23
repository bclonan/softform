# Agent guide

Use [`src/component-dictionary.json`](../src/component-dictionary.json) as the component index. The package exports the same JSON at `@bclonan/softform/dictionary`. It lists all 53 components with their HTML tag, purpose, when to choose it, when to choose another component, props, events, motion, and runnable demo values. Each source component also starts with a short `SOFTFORM AGENT NOTE`.

[Live component docs](https://softform-34r5.netlify.app/docs.html) · [Storybook](https://softform-34r5.netlify.app/storybook/) · [Example pages](https://softform-34r5.netlify.app/) · [npm package](https://www.npmjs.com/package/@bclonan/softform)

## Pick a component

Choose by the job the user is doing, not by the visual shape. For example, `SfSelect` is a native form choice, `SfDropdown` opens secondary actions, and `SfTabs` switches content panels. `SfSegmented` changes a short mode or filter. `SfAlert` stays visible, while `SfToast` confirms a brief action. `SfSkeleton` represents a pending load, and `SfEmptyState` represents a finished empty result.

Search the dictionary's `whenToUse` and `avoidWhen` fields before adding a component. Then open its `docs/components/SfName.md` page for defaults and events. The live page at `https://softform-34r5.netlify.app/docs.html?component=SfName` lets you try it. Every component has a [Storybook entry](https://softform-34r5.netlify.app/storybook/) with editable controls.

## Use in Vue

```vue
<script setup>
import { ref } from 'vue';
import { SfSlider } from '@bclonan/softform';
import '@bclonan/softform/styles.css';

const volume = ref(35);
</script>

<template><SfSlider v-model="volume" label="Volume" /></template>
```

Use a default import from `@bclonan/softform/components/SfSlider` when the import path should name one component. Vue remains a peer dependency for this API.

## Use without a framework

```js
import { registerSfSlider } from '@bclonan/softform/elements/SfSlider';

registerSfSlider();
const slider = document.querySelector('sf-slider');
slider.addEventListener('input', event => console.log(event.detail.value));
slider.value = 35;
```

```html
<sf-slider label="Volume" min="0" max="100"></sf-slider>
```

Every inventory item has a custom element registration. The custom element build bundles its renderer, so consuming it does not require a Vue app or Vue peer install. Primitive props can use HTML attributes. Pass arrays, objects, callback functions, and custom adapter registries as DOM properties. Model components expose both `modelValue` and `value` on the host and emit `input` and `change` with `event.detail.value`. Component-specific events keep their names and put Vue arguments in `event.detail` as an array. Register only the elements a page uses to keep its bundle small. See [`examples/elements.html`](../examples/elements.html) for a plain HTML page and [`examples/elements-gallery.html`](../examples/elements-gallery.html) for all 53 registered elements.

The Vue implementation uses native HTML elements for each control. The custom element itself remains a custom tag. For document landmarks in plain HTML, wrap it in native `main`, `section`, `article`, or `aside` tags. In Vue, `SfElement` accepts any valid semantic tag through `as`.

## Adapter contract

Provider data belongs in an adapter, not in a visual card. A registry adapter receives a payload and returns `CardModel[]`. `SfAdaptedCards` validates the result before rendering. Vue apps can inject `ADAPTER_KEY`; custom element consumers set the `registry` DOM property. Handle `adapted` and `error` for feedback. The plain HTML example registers a custom provider.

## Motion and feedback

State changes use short transitions. Slider output and textarea counts animate when values change. Input focus, filled, hint, and error states respond while typing. Calendar month changes and selection have separate motion. Native dialogs animate in and out while keeping Escape, backdrop close, and focus return. Charts, progress, tabs, buttons, and disclosure states respond to changes. `prefers-reduced-motion: reduce` removes decorative motion. Do not animate a state without changing the state itself or leave a pending indicator after a result arrives.

`SfBarChart`, `SfDonutChart`, `SfProgress`, `SfStatCard`, and `SfMetricPanel` accept `loading`, `motionDelay`, `motionDuration`, and `animateOnMount`. The bar chart and metric panel also accept `stagger`. Timing values are milliseconds. Pass actual data and set `loading` while the host waits for it. The [Studio pulse example](../examples/analytics.html) lets you adjust the timing and replay a staged local data load.

`SfBottomNav`, `SfNavList`, `SfTabs`, `SfSegmented`, `SfButtonGroup`, and `SfPagination` fill their selected item when the controlled value changes. Set `motion`, `motionDelay`, `motionDuration`, and `motionEasing` per instance. The initial selection appears immediately. The [workspace example](../index.html) keeps its navigation mounted while switching Overview, Inbox, and Settings, and its Settings page lets you tune the fill.

`SfInput` forwards common native input attributes. Use its `type` prop for browser-native date, time, number, file, color, and text inputs. Checkbox values emit a Boolean; file values emit a FileList; other input types emit strings. `SfTable` supports local search, sorting, paging, loading, compact density, and table or card views. Use the same rows for both views. `SfBarChart` can lay bars vertically or horizontally; `SfDonutChart` exposes ring size, thickness, and colors. The [Studio pulse example](../examples/analytics.html) demonstrates these views.

## Adding or changing a component

Keep one Vue file per component in `src/components`. Add or update its props in `types/components`, the reference in `docs/components`, and its Storybook story. If the component is new, export it from `src/index.js`, then run `python scripts/generate-elements.py` and `python scripts/generate-dictionary.py`. Run `npm run check` after changing behavior. The original standalone gallery stays in `softform-component-library.html` as extraction evidence.
