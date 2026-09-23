import SfBadge from '../src/components/SfBadge.vue';

export default { title: 'Components/SfBadge', component: SfBadge, argTypes: {"as": {"control": "text"}, "tone": {"control": "text"}, "dot": {"control": "boolean"}} };

export const Default = {
  args: {"as": "span", "tone": "accent", "dot": false},
  render: args => ({
    components: { SfBadge },
    setup() { return { args }; },
    template: `<SfBadge v-bind="args" @update:modelValue="args.modelValue = $event">Live</SfBadge>`,
  }),
};
