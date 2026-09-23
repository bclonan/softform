import SfFab from '../src/components/SfFab.vue';

export default { title: 'Components/SfFab', component: SfFab, argTypes: {"icon": {"control": "text"}, "label": {"control": "text"}} };

export const Default = {
  args: {"icon": "plus", "label": "Create new"},
  render: args => ({
    components: { SfFab },
    setup() { return { args }; },
    template: `<SfFab v-bind="args" @update:modelValue="args.modelValue = $event"></SfFab>`,
  }),
};
