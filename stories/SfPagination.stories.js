import SfPagination from '../src/components/SfPagination.vue';

export default { title: 'Components/SfPagination', component: SfPagination, argTypes: {"modelValue": {"control": "number"}, "pages": {"control": "number"}, "motion":{"control":"boolean"}, "motionDelay":{"control":"number"}, "motionDuration":{"control":"number"}, "motionEasing":{"control":"text"}} };

export const Default = {
  args: {"modelValue": 1, "pages": 4, "motion":true, "motionDelay":0, "motionDuration":420, "motionEasing":"cubic-bezier(.2,.8,.2,1)"},
  render: args => ({
    components: { SfPagination },
    setup() { return { args }; },
    template: `<SfPagination v-bind="args" @update:modelValue="args.modelValue = $event"></SfPagination>`,
  }),
};
