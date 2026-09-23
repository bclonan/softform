<script>
/** SOFTFORM AGENT NOTE
 * Renders any native HTML tag in Vue while forwarding its attributes and slot content.
 * Use to choose any valid native HTML root while preserving attributes and slots.
 * Use a specialized control when native interaction is needed.
 * HTML tag: <sf-element> via @bclonan/softform/elements/SfElement.
 * Props, events, and a runnable example: docs/components/SfElement.md.
 */
export default {
  name: 'SfElement',
  props: { as: { type: String, default: 'div' } },
};
</script>

<template>
  <component :is="as"><slot /></component>
</template>
