import SfButton from '../src/components/SfButton.vue';

export default { title: 'Components/SfButton', component: SfButton, argTypes: {"variant": {"control": "text"}, "size": {"control": "text"}, "icon": {"control": "text"}, "loading": {"control": "boolean"}, "disabled": {"control": "boolean"}, "type": {"control": "text"}} };

export const Default = {
  args: {"variant": "surface", "loading": false, "disabled": false, "type": "button"},
  render: args => ({
    components: { SfButton },
    setup() { return { args }; },
    template: `<SfButton v-bind="args" @update:modelValue="args.modelValue = $event">Create workspace</SfButton>`,
  }),
};
