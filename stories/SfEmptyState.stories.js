import SfEmptyState from '../src/components/SfEmptyState.vue';

export default { title: 'Components/SfEmptyState', component: SfEmptyState, argTypes: {"as": {"control": "text"}, "title": {"control": "text"}, "message": {"control": "text"}, "action": {"control": "text"}, "icon": {"control": "text"}} };

export const Default = {
  args: {"as": "div", "title": "A little room for possibility.", "message": "Your collection starts with a single component.", "action": "Create collection", "icon": "inbox"},
  render: args => ({
    components: { SfEmptyState },
    setup() { return { args }; },
    template: `<SfEmptyState v-bind="args" @update:modelValue="args.modelValue = $event"></SfEmptyState>`,
  }),
};
