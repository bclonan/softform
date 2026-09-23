import SfAdaptedCards from '../src/components/SfAdaptedCards.vue';

export default { title: 'Components/SfAdaptedCards', component: SfAdaptedCards, argTypes: {"adapter": {"control": "text"}, "payload": {"control": "object"}} };

export const Default = {
  args: {"adapter": "rest", "payload": {"notifications": [{"notification_id": "n-1", "category": "message", "subject": "Design review", "preview": "The team left comments on the new layout.", "sender": {"display_name": "Maya Chen"}, "received_at": "09:41", "unread_count": 2}]}},
  render: args => ({
    components: { SfAdaptedCards },
    setup() { return { args }; },
    template: `<SfAdaptedCards v-bind="args" @update:modelValue="args.modelValue = $event"></SfAdaptedCards>`,
  }),
};
