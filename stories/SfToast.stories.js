import SfToast from '../src/components/SfToast.vue';

export default { title: 'Components/SfToast', component: SfToast, argTypes: {"as": {"control": "text"}, "message": {"control": "text"}, "dismissible": {"control": "boolean"}} };

export const Default = {
  args: {"as": "div", "message": "Changes saved to your workspace."},
  render: args => ({
    components: { SfToast },
    setup() { return { args }; },
    template: `<SfToast v-bind="args" @update:modelValue="args.modelValue = $event"></SfToast>`,
  }),
};
