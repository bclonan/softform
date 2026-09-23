import SfCheckbox from '../src/components/SfCheckbox.vue';

export default { title: 'Components/SfCheckbox', component: SfCheckbox, argTypes: {"modelValue": {"control": "boolean"}, "label": {"control": "text"}, "disabled": {"control": "boolean"}} };

export const Default = {
  args: {"modelValue": true, "label": "Email updates", "disabled": false},
  render: args => ({
    components: { SfCheckbox },
    setup() { return { args }; },
    template: `<SfCheckbox v-bind="args" @update:modelValue="args.modelValue = $event"></SfCheckbox>`,
  }),
};
