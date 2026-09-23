import SfDropdown from '../src/components/SfDropdown.vue';

export default { title: 'Components/SfDropdown', component: SfDropdown, argTypes: {"label": {"control": "text"}, "items": {"control": "object"}} };

export const Default = {
  args: {"label": "Quick actions"},
  render: args => ({
    components: { SfDropdown },
    setup() { return { args }; },
    template: `<SfDropdown v-bind="args" @update:modelValue="args.modelValue = $event"></SfDropdown>`,
  }),
};
