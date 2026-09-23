import SfModal from '../src/components/SfModal.vue';

export default { title: 'Components/SfModal', component: SfModal, argTypes: {"modelValue": {"control": "boolean"}, "title": {"control": "text"}, "code": {"control": "boolean"}} };

export const Default = {
  args: {"modelValue": true, "title": "A moment of clarity", "code": false},
  render: args => ({
    components: { SfModal },
    setup() { return { args }; },
    template: `<SfModal v-bind="args" @update:modelValue="args.modelValue = $event">Dialog content</SfModal>`,
  }),
};
