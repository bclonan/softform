import SfSkeleton from '../src/components/SfSkeleton.vue';

export default { title: 'Components/SfSkeleton', component: SfSkeleton, argTypes: {"kind": {"control": "text"}} };

export const Default = {
  args: {"kind": "card"},
  render: args => ({
    components: { SfSkeleton },
    setup() { return { args }; },
    template: `<SfSkeleton v-bind="args" @update:modelValue="args.modelValue = $event"></SfSkeleton>`,
  }),
};
