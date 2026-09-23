import SfTooltip from '../src/components/SfTooltip.vue';

export default { title: 'Components/SfTooltip', component: SfTooltip, argTypes: {"text": {"control": "text"}} };

export const Default = {
  args: { "text": "This control opens more detail." },
  render: args => ({
    components: { SfTooltip },
    setup() { return { args }; },
    template: `<SfTooltip v-bind="args" @update:modelValue="args.modelValue = $event">Hover for detail</SfTooltip>`,
  }),
};
