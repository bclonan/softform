import SfDivider from '../src/components/SfDivider.vue';

export default { title: 'Components/SfDivider', component: SfDivider, argTypes: {"as": {"control": "text"}} };

export const Default = {
  args: {"as": "div"},
  render: args => ({
    components: { SfDivider },
    setup() { return { args }; },
    template: `<SfDivider v-bind="args" @update:modelValue="args.modelValue = $event">or continue with</SfDivider>`,
  }),
};
