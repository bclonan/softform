import SfBreadcrumbs from '../src/components/SfBreadcrumbs.vue';

export default { title: 'Components/SfBreadcrumbs', component: SfBreadcrumbs, argTypes: {"items": {"control": "object"}} };

export const Default = {
  args: {"items": ["Workspace", "Projects", "Softform"]},
  render: args => ({
    components: { SfBreadcrumbs },
    setup() { return { args }; },
    template: `<SfBreadcrumbs v-bind="args" @update:modelValue="args.modelValue = $event"></SfBreadcrumbs>`,
  }),
};
