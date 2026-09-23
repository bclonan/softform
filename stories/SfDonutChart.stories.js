import SfDonutChart from '../src/components/SfDonutChart.vue';

export default { title: 'Components/SfDonutChart', component: SfDonutChart, argTypes: {"value": {"control": "number"}, "label": {"control": "text"}, "primary": {"control": "text"}, "secondary": {"control": "text"}, "size":{"control":"number"}, "thickness":{"control":"number"}, "primaryColor":{"control":"color"}, "secondaryColor":{"control":"color"}, "loading":{"control":"boolean"},"motionDelay":{"control":"number"},"motionDuration":{"control":"number"},"animateOnMount":{"control":"boolean"}} };

export const Default = {
  args: {"value": 72, "label": "Focus", "primary": "Focused", "secondary": "Available", "size":110, "thickness":9, "primaryColor":"#151a1d", "secondaryColor":"#b3c2cc", "loading":false, "motionDelay":200, "motionDuration":760, "animateOnMount":true},
  render: args => ({
    components: { SfDonutChart },
    setup() { return { args }; },
    template: `<SfDonutChart v-bind="args" @update:modelValue="args.modelValue = $event"></SfDonutChart>`,
  }),
};
