import SfProfileCard from '../src/components/SfProfileCard.vue';

export default { title: 'Components/SfProfileCard', component: SfProfileCard, argTypes: {"name": {"control": "text"}, "role": {"control": "text"}, "initials": {"control": "text"}, "status": {"control": "text"}} };

export const Default = {
  args: {"name": "Brad Morgan", "role": "Product designer", "initials": "AM", "status": "Available for ideas"},
  render: args => ({
    components: { SfProfileCard },
    setup() { return { args }; },
    template: `<SfProfileCard v-bind="args" @update:modelValue="args.modelValue = $event"></SfProfileCard>`,
  }),
};
