import SfStepper from '../src/components/SfStepper.vue';

export default { title: 'Components/SfStepper', component: SfStepper, argTypes: {"modelValue": {"control": "number"}, "min": {"control": "number"}, "max": {"control": "number"}, "label": {"control": "text"}} };

export const Default = {
  args: {"modelValue": 1, "min": 0, "max": 99, "label": "Quantity"},
  render: args => ({
    components: { SfStepper },
    setup() { return { args }; },
    template: `<SfStepper v-bind="args" @update:modelValue="args.modelValue = $event"></SfStepper>`,
  }),
};
