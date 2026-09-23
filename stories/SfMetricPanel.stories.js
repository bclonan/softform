import SfMetricPanel from '../src/components/SfMetricPanel.vue';

export default { title: 'Components/SfMetricPanel', component: SfMetricPanel, argTypes: {"title": {"control": "text"}, "total": {"control": "number"}, "primary": {"control": "number"}, "secondary": {"control": "number"}, "loading":{"control":"boolean"},"motionDelay":{"control":"number"},"motionDuration":{"control":"number"},"stagger":{"control":"number"},"animateOnMount":{"control":"boolean"}} };

export const Default = {
  args: {"title": "Messages", "total": 84, "primary": 63, "secondary": 21, "loading":false, "motionDelay":150, "motionDuration":760, "stagger":90, "animateOnMount":true},
  render: args => ({
    components: { SfMetricPanel },
    setup() { return { args }; },
    template: `<SfMetricPanel v-bind="args" @update:modelValue="args.modelValue = $event"></SfMetricPanel>`,
  }),
};
