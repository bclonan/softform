import SfSurface from '../src/components/SfSurface.vue';

export default { title: 'Components/SfSurface', component: SfSurface, argTypes: {"as": {"control": "text"}, "depth": {"control": "text"}, "tone": {"control": "text"}} };

export const Default = {
  args: {"as": "div", "depth": "raised", "tone": "light"},
  render: args => ({
    components: { SfSurface },
    setup() { return { args }; },
    template: `<SfSurface v-bind="args" @update:modelValue="args.modelValue = $event">Your content</SfSurface>`,
  }),
};
