import SfTimeline from '../src/components/SfTimeline.vue';

export default { title: 'Components/SfTimeline', component: SfTimeline, argTypes: {"items": {"control": "object"}} };

export const Default = {
  args: {"items": [{"title": "Review complete", "description": "Maya approved the layout.", "time": "09:41"}, {"title": "Draft created", "description": "A new draft is ready.", "time": "Yesterday"}]},
  render: args => ({
    components: { SfTimeline },
    setup() { return { args }; },
    template: `<SfTimeline v-bind="args" @update:modelValue="args.modelValue = $event"></SfTimeline>`,
  }),
};
