import SfSwitch from '../src/components/SfSwitch.vue';

export default { title: 'Components/SfSwitch', component: SfSwitch, argTypes: {"modelValue": {"control": "boolean"}, "label": {"control": "text"}, "hideLabel": {"control": "boolean"}, "disabled": {"control": "boolean"}} };

export const Default = {
  args: {"modelValue": true, "label": "Focus mode", "hideLabel": false, "disabled": false},
  render: args => ({
    components: { SfSwitch },
    setup() { return { args }; },
    template: `<SfSwitch v-bind="args" @update:modelValue="args.modelValue = $event"></SfSwitch>`,
  }),
};
