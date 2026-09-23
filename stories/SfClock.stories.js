import SfClock from '../src/components/SfClock.vue';

export default { title: 'Components/SfClock', component: SfClock, argTypes: {"label": {"control": "text"}} };

export const Default = {
  args: {"label": "Your local time"},
  render: args => ({
    components: { SfClock },
    setup() { return { args }; },
    template: `<SfClock v-bind="args" @update:modelValue="args.modelValue = $event"></SfClock>`,
  }),
};
