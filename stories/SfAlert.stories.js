import SfAlert from '../src/components/SfAlert.vue';

export default { title: 'Components/SfAlert', component: SfAlert, argTypes: {"as": {"control": "text"}, "title": {"control": "text"}, "message": {"control": "text"}, "tone": {"control": "text"}} };

export const Default = {
  args: {"as": "div", "title": "A little heads up", "tone": "info"},
  render: args => ({
    components: { SfAlert },
    setup() { return { args }; },
    template: `<SfAlert v-bind="args" @update:modelValue="args.modelValue = $event">Review the details</SfAlert>`,
  }),
};
