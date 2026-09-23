import SfIcon from '../src/components/SfIcon.vue';

export default { title: 'Components/SfIcon', component: SfIcon, argTypes: {"name": {"control": "text"}, "size": {"control": "text"}} };

export const Default = {
  args: {"name": "spark", "size": "lg"},
  render: args => ({
    components: { SfIcon },
    setup() { return { args }; },
    template: `<SfIcon v-bind="args" @update:modelValue="args.modelValue = $event"></SfIcon>`,
  }),
};
