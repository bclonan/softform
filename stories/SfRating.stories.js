import SfRating from '../src/components/SfRating.vue';

export default { title: 'Components/SfRating', component: SfRating, argTypes: {"modelValue": {"control": "number"}, "max": {"control": "number"}, "label": {"control": "text"}} };

export const Default = {
  args: {"modelValue": 4, "max": 5, "label": "Rating"},
  render: args => ({
    components: { SfRating },
    setup() { return { args }; },
    template: `<SfRating v-bind="args" @update:modelValue="args.modelValue = $event"></SfRating>`,
  }),
};
