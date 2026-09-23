import SfButtonGroup from '../src/components/SfButtonGroup.vue';

export default { title: 'Components/SfButtonGroup', component: SfButtonGroup, argTypes: {"modelValue": {"control": "text"}, "options": {"control": "object"}, "label": {"control": "text"}, "motion":{"control":"boolean"}, "motionDelay":{"control":"number"}, "motionDuration":{"control":"number"}, "motionEasing":{"control":"text"}} };

export const Default = {
  args: {"label": "Button group", "modelValue": "left", "options": [{"label": "Left", "value": "left"}, {"label": "Center", "value": "center"}], "motion":true, "motionDelay":0, "motionDuration":420, "motionEasing":"cubic-bezier(.2,.8,.2,1)"},
  render: args => ({
    components: { SfButtonGroup },
    setup() { return { args }; },
    template: `<SfButtonGroup v-bind="args" @update:modelValue="args.modelValue = $event"></SfButtonGroup>`,
  }),
};
