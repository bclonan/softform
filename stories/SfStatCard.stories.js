import SfStatCard from '../src/components/SfStatCard.vue';

export default { title: 'Components/SfStatCard', component: SfStatCard, argTypes: {"label": {"control": "text"}, "value": {"control": "number"}, "change": {"control": "text"}, "description": {"control": "text"}, "icon": {"control": "text"}, "loading":{"control":"boolean"},"motionDelay":{"control":"number"},"motionDuration":{"control":"number"},"animateOnMount":{"control":"boolean"}} };

export const Default = {
  args: {"label": "Messages", "value": 128, "description": "since last week", "icon": "mail", "loading":false, "motionDelay":150, "motionDuration":760, "animateOnMount":true},
  render: args => ({
    components: { SfStatCard },
    setup() { return { args }; },
    template: `<SfStatCard v-bind="args" @update:modelValue="args.modelValue = $event"></SfStatCard>`,
  }),
};
