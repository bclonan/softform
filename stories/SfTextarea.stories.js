import SfTextarea from '../src/components/SfTextarea.vue';

export default { title: 'Components/SfTextarea', component: SfTextarea, argTypes: {"modelValue": {"control": "text"}, "label": {"control": "text"}, "placeholder": {"control": "text"}, "maxlength": {"control": "number"}} };

export const Default = {
  args: {"modelValue": "A clear note for the team.", "maxlength": 240, "label": "Notes"},
  render: args => ({
    components: { SfTextarea },
    setup() { return { args }; },
    template: `<SfTextarea v-bind="args" @update:modelValue="args.modelValue = $event"></SfTextarea>`,
  }),
};
