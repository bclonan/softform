import SfFileUpload from '../src/components/SfFileUpload.vue';

export default { title: 'Components/SfFileUpload', component: SfFileUpload, argTypes: {"accept": {"control": "text"}, "label": {"control": "text"}} };

export const Default = {
  args: {"accept": ".png,.jpg,.jpeg,.svg,.json", "label": "Drop a file here"},
  render: args => ({
    components: { SfFileUpload },
    setup() { return { args }; },
    template: `<SfFileUpload v-bind="args" @update:modelValue="args.modelValue = $event"></SfFileUpload>`,
  }),
};
