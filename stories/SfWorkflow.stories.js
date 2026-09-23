import SfWorkflow from '../src/components/SfWorkflow.vue';

export default { title: 'Components/SfWorkflow', component: SfWorkflow, argTypes: {"modelValue": {"control": "text"}, "nodes": {"control": "object"}} };

export const Default = {
  args: {"modelValue": "adapt"},
  render: args => ({
    components: { SfWorkflow },
    setup() { return { args }; },
    template: `<SfWorkflow v-bind="args" @update:modelValue="args.modelValue = $event"></SfWorkflow>`,
  }),
};
