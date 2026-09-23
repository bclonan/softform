import SfElement from '../src/components/SfElement.vue';

export default { title: 'Components/SfElement', component: SfElement, argTypes: {} };

export const Default = {
  args: {"as": "section"},
  render: args => ({
    components: { SfElement },
    setup() { return { args }; },
    template: `<SfElement v-bind="args" @update:modelValue="args.modelValue = $event">Semantic section</SfElement>`,
  }),
};
