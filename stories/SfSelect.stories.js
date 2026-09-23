import SfSelect from '../src/components/SfSelect.vue';

export default { title: 'Components/SfSelect', component: SfSelect, argTypes: {"modelValue": {"control": "text"}, "label": {"control": "text"}, "options": {"control": "object"}} };

export const Default = {
  args: {"label": "Workspace", "modelValue": "studio", "options": [{"label": "Studio", "value": "studio"}, {"label": "Home", "value": "home"}]},
  render: args => ({
    components: { SfSelect },
    setup() { return { args }; },
    template: `<SfSelect v-bind="args" @update:modelValue="args.modelValue = $event"></SfSelect>`,
  }),
};
