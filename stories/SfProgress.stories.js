import SfProgress from '../src/components/SfProgress.vue';

export default { title: 'Components/SfProgress', component: SfProgress, argTypes: {"value": {"control": "number"}, "label": {"control": "text"}, "tone": {"control": "text"}, "loading":{"control":"boolean"},"motionDelay":{"control":"number"},"motionDuration":{"control":"number"},"animateOnMount":{"control":"boolean"}} };

export const Default = {
  args: {"value": 68, "label": "Workspace sync", "loading":false, "motionDelay":150, "motionDuration":760, "animateOnMount":true},
  render: args => ({
    components: { SfProgress },
    setup() { return { args }; },
    template: `<SfProgress v-bind="args" @update:modelValue="args.modelValue = $event"></SfProgress>`,
  }),
};
