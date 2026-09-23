import SfInput from '../src/components/SfInput.vue';

export default { title: 'Components/SfInput', component: SfInput, argTypes: {"modelValue": {"control": "text"}, "label": {"control": "text"}, "placeholder": {"control": "text"}, "type": {"control": "select", "options":["text","email","password","search","tel","url","number","date","time","datetime-local","month","week","color","range","checkbox","radio","file","hidden","button","submit","reset","image"]}, "icon": {"control": "text"}, "hint": {"control": "text"}, "error": {"control": "text"}, "disabled": {"control": "boolean"}, "required":{"control":"boolean"}, "readonly":{"control":"boolean"}, "name":{"control":"text"}, "autocomplete":{"control":"text"}, "inputmode":{"control":"text"}, "min":{"control":"text"}, "max":{"control":"text"}, "step":{"control":"text"}, "minlength":{"control":"number"}, "maxlength":{"control":"number"}, "pattern":{"control":"text"}, "multiple":{"control":"boolean"}, "accept":{"control":"text"}, "capture":{"control":"text"}, "list":{"control":"text"}, "checkedValue":{"control":"text"}, "size":{"control":"number"}, "autofocus":{"control":"boolean"}, "spellcheck":{"control":"boolean"}, "enterkeyhint":{"control":"text"}, "src":{"control":"text"}, "alt":{"control":"text"}, "width":{"control":"number"}, "height":{"control":"number"}, "form":{"control":"text"}, "formaction":{"control":"text"}, "formenctype":{"control":"text"}, "formmethod":{"control":"text"}, "formnovalidate":{"control":"boolean"}, "formtarget":{"control":"text"}, "dirname":{"control":"text"}} };

export const Default = {
  args: {"modelValue": "", "type": "text", "disabled": false, "label": "Email address", "placeholder": "you@example.com"},
  render: args => ({
    components: { SfInput },
    setup() { return { args }; },
    template: `<SfInput v-bind="args" @update:modelValue="args.modelValue = $event"></SfInput>`,
  }),
};
