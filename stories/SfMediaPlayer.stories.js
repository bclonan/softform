import SfMediaPlayer from '../src/components/SfMediaPlayer.vue';

export default { title: 'Components/SfMediaPlayer', component: SfMediaPlayer, argTypes: {"src": {"control": "text"}, "title": {"control": "text"}, "subtitle": {"control": "text"}} };

export const Default = {
  args: {"title": "Ceramic", "subtitle": "An original synthesized loop"},
  render: args => ({
    components: { SfMediaPlayer },
    setup() { return { args }; },
    template: `<SfMediaPlayer v-bind="args" @update:modelValue="args.modelValue = $event"></SfMediaPlayer>`,
  }),
};
