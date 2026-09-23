import SfRadioGroup from '../src/components/SfRadioGroup.vue';

export default { title: 'Components/SfRadioGroup', component: SfRadioGroup, argTypes: {"modelValue": {"control": "text"}, "label": {"control": "text"}, "options": {"control": "object"}} };

export const Default = {
  args: {"label": "Plan", "modelValue": "team", "options": [{"label": "Solo", "value": "solo"}, {"label": "Team", "value": "team"}]},
  render: args => ({
    components: { SfRadioGroup },
    setup() { return { args }; },
    template: `<SfRadioGroup v-bind="args" @update:modelValue="args.modelValue = $event"></SfRadioGroup>`,
  }),
};
