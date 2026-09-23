import SfSpinner from '../src/components/SfSpinner.vue';

export default { title: 'Components/SfSpinner', component: SfSpinner, argTypes: {"size": {"control": "text"}, "label": {"control": "text"}} };

export const Default = {
  args: {"label": "Loading"},
  render: args => ({
    components: { SfSpinner },
    setup() { return { args }; },
    template: `<SfSpinner v-bind="args" @update:modelValue="args.modelValue = $event"></SfSpinner>`,
  }),
};
