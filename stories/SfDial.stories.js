import SfDial from '../src/components/SfDial.vue';

export default { title: 'Components/SfDial', component: SfDial, argTypes: {"modelValue": {"control": "number"}, "label": {"control": "text"}} };

export const Default = {
  args: {"modelValue": 64, "label": "Intensity"},
  render: args => ({
    components: { SfDial },
    setup() { return { args }; },
    template: `<SfDial v-bind="args" @update:modelValue="args.modelValue = $event"></SfDial>`,
  }),
};
