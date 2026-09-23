import SfTable from '../src/components/SfTable.vue';

export default { title: 'Components/SfTable', component: SfTable, argTypes: {"columns": {"control": "object"}, "rows": {"control": "object"}, "caption": {"control": "text"}, "view":{"control":"select","options":["table","cards"]}, "searchable":{"control":"boolean"}, "searchPlaceholder":{"control":"text"}, "pageSize":{"control":"number"}, "loading":{"control":"boolean"}, "emptyText":{"control":"text"}, "rowKey":{"control":"text"}, "compact":{"control":"boolean"}} };

export const Default = {
  args: {"caption": "Projects", "columns": [{"key": "name", "label": "Name"}, {"key": "status", "label": "Status", "badge": true}], "rows": [{"id": 1, "name": "Softform", "status": "Active"}, {"id": 2, "name": "Release notes", "status": "Draft"}], "view":"table", "searchable":true, "pageSize":0, "loading":false, "compact":false},
  render: args => ({
    components: { SfTable },
    setup() { return { args }; },
    template: `<SfTable v-bind="args" @update:modelValue="args.modelValue = $event"></SfTable>`,
  }),
};
