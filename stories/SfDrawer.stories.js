import SfDrawer from '../src/components/SfDrawer.vue';

export default { title: 'Components/SfDrawer', component: SfDrawer, argTypes: {"modelValue": {"control": "boolean"}, "title": {"control": "text"}} };

export const Default = {
  args: {"modelValue": true, "title": "Workspace settings"},
  render: args => ({
    components: { SfDrawer },
    setup() { return { args }; },
    template: `<SfDrawer v-bind="args" @update:modelValue="args.modelValue = $event">Drawer content</SfDrawer>`,
  }),
};
