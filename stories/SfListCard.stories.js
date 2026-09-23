import SfListCard from '../src/components/SfListCard.vue';

export default { title: 'Components/SfListCard', component: SfListCard, argTypes: {"title": {"control": "text"}, "items": {"control": "object"}} };

export const Default = {
  args: {"title": "Recent calls"},
  render: args => ({
    components: { SfListCard },
    setup() { return { args }; },
    template: `<SfListCard v-bind="args" @update:modelValue="args.modelValue = $event"></SfListCard>`,
  }),
};
