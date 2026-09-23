import SfAvatar from '../src/components/SfAvatar.vue';

export default { title: 'Components/SfAvatar', component: SfAvatar, argTypes: {"initials": {"control": "text"}, "icon": {"control": "text"}, "size": {"control": "text"}, "tone": {"control": "text"}, "label": {"control": "text"}} };

export const Default = {
  args: {"initials": "SF"},
  render: args => ({
    components: { SfAvatar },
    setup() { return { args }; },
    template: `<SfAvatar v-bind="args" @update:modelValue="args.modelValue = $event"></SfAvatar>`,
  }),
};
