import SfAccordion from '../src/components/SfAccordion.vue';

export default { title: 'Components/SfAccordion', component: SfAccordion, argTypes: {"items": {"control": "object"}} };

export const Default = {
  args: {"items": [{"title": "How does it work?", "content": "Use native HTML controls and shared Softform tokens."}]},
  render: args => ({
    components: { SfAccordion },
    setup() { return { args }; },
    template: `<SfAccordion v-bind="args" @update:modelValue="args.modelValue = $event"></SfAccordion>`,
  }),
};
