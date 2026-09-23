import SfBottomNav from '../src/components/SfBottomNav.vue';

export default { title: 'Components/SfBottomNav', component: SfBottomNav, argTypes: {"modelValue": {"control": "text"}, "items": {"control": "object"}, "motion":{"control":"boolean"}, "motionDelay":{"control":"number"}, "motionDuration":{"control":"number"}, "motionEasing":{"control":"text"}} };

export const Default = {
  args: {"modelValue": "home", "items": [{"label": "Home", "value": "home", "icon": "home"}, {"label": "Inbox", "value": "inbox", "icon": "inbox"}], "motion":true, "motionDelay":0, "motionDuration":420, "motionEasing":"cubic-bezier(.2,.8,.2,1)"},
  render: args => ({
    components: { SfBottomNav },
    setup() { return { args }; },
    template: `<SfBottomNav v-bind="args" @update:modelValue="args.modelValue = $event"></SfBottomNav>`,
  }),
};
