import SfBarChart from '../src/components/SfBarChart.vue';

export default { title: 'Components/SfBarChart', component: SfBarChart, argTypes: {"values": {"control": "object"}, "labels": {"control": "object"}, "label": {"control": "text"}, "unit": {"control": "text"}, "highlight": {"control": "number"}, "orientation":{"control":"select","options":["vertical","horizontal"]}, "accentColor":{"control":"color"}, "loading":{"control":"boolean"},"motionDelay":{"control":"number"},"motionDuration":{"control":"number"},"stagger":{"control":"number"},"animateOnMount":{"control":"boolean"}} };

export const Default = {
  args: {"label": "Activity", "unit": "THIS WEEK", "highlight": 5, "orientation":"vertical", "accentColor":"#ffe247", "loading":false, "motionDelay":180, "motionDuration":760, "stagger":90, "animateOnMount":true},
  render: args => ({
    components: { SfBarChart },
    setup() { return { args }; },
    template: `<SfBarChart v-bind="args" @update:modelValue="args.modelValue = $event"></SfBarChart>`,
  }),
};
