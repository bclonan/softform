import SfTabs from '../src/components/SfTabs.vue';

export default { title: 'Components/SfTabs', component: SfTabs, argTypes: {"modelValue": {"control": "text"}, "options": {"control": "object"}, "label": {"control": "text"}, "motion":{"control":"boolean"}, "motionDelay":{"control":"number"}, "motionDuration":{"control":"number"}, "motionEasing":{"control":"text"}} };

export const Default = {
  args: {"label": "Tabs", "modelValue": "overview", "options": [{"label": "Overview", "value": "overview"}, {"label": "Activity", "value": "activity"}], "motion":true, "motionDelay":0, "motionDuration":420, "motionEasing":"cubic-bezier(.2,.8,.2,1)"},
  render: args => ({
    components: { SfTabs },
    setup() { return { args }; },
    template: `<SfTabs v-bind="args" @update:modelValue="args.modelValue = $event">Tab content</SfTabs>`,
  }),
};
