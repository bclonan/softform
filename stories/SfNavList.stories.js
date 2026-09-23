import SfNavList from '../src/components/SfNavList.vue';

export default { title: 'Components/SfNavList', component: SfNavList, argTypes: {"modelValue": {"control": "text"}, "items": {"control": "object"}, "label": {"control": "text"}, "motion":{"control":"boolean"}, "motionDelay":{"control":"number"}, "motionDuration":{"control":"number"}, "motionEasing":{"control":"text"}} };

export const Default = {
  args: {"label": "Main navigation", "modelValue": "home", "items": [{"label": "Home", "value": "home", "icon": "home"}, {"label": "Inbox", "value": "inbox", "icon": "inbox"}], "motion":true, "motionDelay":0, "motionDuration":420, "motionEasing":"cubic-bezier(.2,.8,.2,1)"},
  render: args => ({
    components: { SfNavList },
    setup() { return { args }; },
    template: `<SfNavList v-bind="args" @update:modelValue="args.modelValue = $event"></SfNavList>`,
  }),
};
