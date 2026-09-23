import SfSegmented from '../src/components/SfSegmented.vue';

export default { title: 'Components/SfSegmented', component: SfSegmented, argTypes: {"modelValue": {"control": "text"}, "options": {"control": "object"}, "label": {"control": "text"}, "motion":{"control":"boolean"}, "motionDelay":{"control":"number"}, "motionDuration":{"control":"number"}, "motionEasing":{"control":"text"}} };

export const Default = {
  args: {"label": "View", "modelValue": "week", "options": [{"label": "Week", "value": "week"}, {"label": "Month", "value": "month"}], "motion":true, "motionDelay":0, "motionDuration":420, "motionEasing":"cubic-bezier(.2,.8,.2,1)"},
  render: args => ({
    components: { SfSegmented },
    setup() { return { args }; },
    template: `<SfSegmented v-bind="args" @update:modelValue="args.modelValue = $event"></SfSegmented>`,
  }),
};
