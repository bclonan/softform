import SfCalendar from '../src/components/SfCalendar.vue';

export default { title: 'Components/SfCalendar', component: SfCalendar, argTypes: {"modelValue": {"control": "text"}} };

export const Default = {
  args: {"modelValue": "2026-09-23"},
  render: args => ({
    components: { SfCalendar },
    setup() { return { args }; },
    template: `<SfCalendar v-bind="args" @update:modelValue="args.modelValue = $event"></SfCalendar>`,
  }),
};
