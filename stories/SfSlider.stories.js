import SfSlider from '../src/components/SfSlider.vue';

export default { title: 'Components/SfSlider', component: SfSlider, argTypes: {"modelValue": {"control": "number"}, "min": {"control": "number"}, "max": {"control": "number"}, "step": {"control": "number"}, "label": {"control": "text"}, "unit": {"control": "text"}, "ticks": {"control": "boolean"}} };

export const Default = {
  args: {"modelValue": 50, "min": 0, "max": 100, "step": 1, "label": "Level", "unit": "%"},
  render: args => ({
    components: { SfSlider },
    setup() { return { args }; },
    template: `<SfSlider v-bind="args" @update:modelValue="args.modelValue = $event"></SfSlider>`,
  }),
};
