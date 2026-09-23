import SfMixer from '../src/components/SfMixer.vue';

export default { title: 'Components/SfMixer', component: SfMixer, argTypes: {"modelValue": {"control": "object"}, "labels": {"control": "object"}, "title": {"control": "text"}} };

export const Default = {
  args: {"title": "Sound levels"},
  render: args => ({
    components: { SfMixer },
    setup() { return { args }; },
    template: `<SfMixer v-bind="args" @update:modelValue="args.modelValue = $event"></SfMixer>`,
  }),
};
