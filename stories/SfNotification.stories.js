import SfNotification from '../src/components/SfNotification.vue';

export default { title: 'Components/SfNotification', component: SfNotification, argTypes: {"title": {"control": "text"}, "body": {"control": "text"}, "sender": {"control": "text"}, "time": {"control": "text"}, "icon": {"control": "text"}, "count": {"control": "number"}, "action": {"control": "text"}} };

export const Default = {
  args: {"title": "Design review", "body": "Your new component library is ready to explore.", "sender": "Maya Chen", "time": "09:41", "icon": "mail", "count": 0, "action": "Open"},
  render: args => ({
    components: { SfNotification },
    setup() { return { args }; },
    template: `<SfNotification v-bind="args" @update:modelValue="args.modelValue = $event"></SfNotification>`,
  }),
};
