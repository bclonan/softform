import SfIconButton from '../src/components/SfIconButton.vue';

export default { title: 'Components/SfIconButton', component: SfIconButton, argTypes: {"icon": {"control": "text"}, "label": {"control": "text"}, "tone": {"control": "text"}, "size": {"control": "text"}, "disabled": {"control": "boolean"}, "pressed": {"control": "boolean"}} };

export const Default = {
  args: {"icon": "heart", "disabled": false, "pressed": false, "label": "Save item"},
  render: args => ({
    components: { SfIconButton },
    setup() { return { args }; },
    template: `<SfIconButton v-bind="args" @update:modelValue="args.modelValue = $event"></SfIconButton>`,
  }),
};
