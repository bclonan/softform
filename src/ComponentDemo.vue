<script setup>
import { computed, onBeforeUnmount, reactive, ref, shallowRef, watch } from 'vue';

const props = defineProps({ entry: { type: Object, required: true } });
const modules = import.meta.glob('./components/Sf*.vue');
const component = shallowRef(null);
const values = reactive({});
const feedback = ref('');
const visible = ref(true);
const instanceKey = ref(0);
const isOverlay = computed(() => ['SfModal', 'SfDrawer'].includes(props.entry.name));
const isMotionData = computed(() => ['SfBarChart','SfDonutChart','SfProgress','SfStatCard','SfMetricPanel'].includes(props.entry.name));
const isSelection = computed(() => ['SfBottomNav','SfNavList','SfSegmented','SfTabs','SfButtonGroup','SfPagination'].includes(props.entry.name));
const isInput = computed(() => props.entry.name === 'SfInput');
const isTable = computed(() => props.entry.name === 'SfTable');
const isBar = computed(() => props.entry.name === 'SfBarChart');
const isDonut = computed(() => props.entry.name === 'SfDonutChart');
const storybookUrl = computed(() => `http://127.0.0.1:6006/?path=/story/components-${props.entry.name.toLowerCase()}--default`);
let replayTimer;

watch(() => props.entry.name, async name => {
  component.value = null;
  clearTimeout(replayTimer);
  visible.value = true;
  feedback.value = '';
  for (const key of Object.keys(values)) delete values[key];
  Object.assign(values, structuredClone(props.entry.demo.props));
  if (isOverlay.value) values.modelValue = false;
  const loaded = await modules[`./components/${name}.vue`]?.();
  if (name === props.entry.name) component.value = loaded?.default ?? null;
}, { immediate: true });

function changed(value) {
  values.modelValue = value;
  const summary = Array.isArray(value) ? value.join(', ') : typeof value === 'object' ? 'updated' : String(value);
  feedback.value = `Value changed to ${summary}.`;
}
function selected(value) { feedback.value = value?.title || value?.label || value?.name || 'Item selected.'; }
function action() { feedback.value = 'Action completed in this local example.'; }
function componentClick() {
  if (['SfButton','SfIconButton','SfFab'].includes(props.entry.name)) action();
}
function dismissed() { visible.value = false; feedback.value = 'Notification dismissed. Use Reset demo to show it again.'; }
function reset() {
  clearTimeout(replayTimer);
  for (const key of Object.keys(values)) delete values[key];
  Object.assign(values, structuredClone(props.entry.demo.props));
  if (isOverlay.value) values.modelValue = false;
  visible.value = true;
  feedback.value = '';
  instanceKey.value++;
}
function replayData() {
  clearTimeout(replayTimer);
  values.loading = true;
  feedback.value = 'Sample data is loading.';
  replayTimer = setTimeout(() => { values.loading = false; feedback.value = 'Sample data is ready.'; }, 450);
}
function setInputType(type) {
  values.type = type;
  values.modelValue = type === 'checkbox' ? false : '';
  values.label = type === 'checkbox' ? 'Enable updates' : type === 'radio' ? 'Choose this option' : type === 'file' ? 'Choose a local file' : type === 'hidden' ? 'Hidden form value' : type === 'submit' ? 'Submit' : type === 'reset' ? 'Reset' : type === 'button' ? 'Button' : type === 'image' ? 'Image action' : 'Example '+type;
  values.placeholder = ['text','email','password','search','tel','url'].includes(type) ? 'Enter '+type : '';
  if (type === 'range') { values.min = 0; values.max = 100; values.modelValue = 50; }
  if (type === 'radio') values.checkedValue = 'selected';
  if (type === 'image') values.alt = 'Image action';
}
onBeforeUnmount(() => clearTimeout(replayTimer));
</script>

<template>
  <section class="component-demo" :aria-label="entry.name + ' live example'">
    <div class="component-demo-head"><div><p class="eyebrow">LIVE EXAMPLE</p><h2>Try {{ entry.name }}</h2></div><div class="component-demo-actions"><button v-if="isMotionData" type="button" @click="replayData">Replay data load</button><a :href="storybookUrl" target="_blank" rel="noreferrer">Storybook</a><button type="button" @click="reset">Reset demo</button></div></div>
    <div v-if="isSelection || isInput || isTable || isBar || isDonut" class="demo-prop-controls" aria-label="Example props">
      <template v-if="isSelection"><label><span>Fill delay</span><input v-model.number="values.motionDelay" type="number" min="0" max="30000" step="50" /> ms</label><label><span>Duration</span><input v-model.number="values.motionDuration" type="number" min="0" max="30000" step="50" /> ms</label><label><span>Easing</span><select v-model="values.motionEasing"><option value="cubic-bezier(.2,.8,.2,1)">Fluid</option><option value="ease-in-out">Ease in and out</option><option value="linear">Linear</option></select></label><label><input v-model="values.motion" type="checkbox" /> Motion</label></template>
      <template v-if="isInput"><label><span>Native input type</span><select :value="values.type" @change="setInputType($event.target.value)"><option v-for="type in ['text','email','password','search','tel','url','number','date','time','datetime-local','month','week','color','range','checkbox','radio','file','hidden','button','submit','reset','image']" :key="type" :value="type">{{type}}</option></select></label><label><input v-model="values.required" type="checkbox" /> Required</label><label><input v-model="values.disabled" type="checkbox" /> Disabled</label></template>
      <template v-if="isTable"><label><span>View</span><select v-model="values.view"><option value="table">Table</option><option value="cards">Cards</option></select></label><label><input v-model="values.searchable" type="checkbox" /> Search</label><label><input v-model="values.compact" type="checkbox" /> Compact</label><label><span>Rows per page</span><select v-model.number="values.pageSize"><option :value="0">All</option><option :value="1">1</option><option :value="2">2</option></select></label><label><input v-model="values.loading" type="checkbox" /> Loading</label></template>
      <template v-if="isBar"><label><span>Chart layout</span><select v-model="values.orientation"><option value="vertical">Vertical</option><option value="horizontal">Horizontal</option></select></label><label><span>Accent</span><input v-model="values.accentColor" type="color" /></label></template>
      <template v-if="isDonut"><label><span>Ring size</span><input v-model.number="values.size" type="number" min="48" max="240" /></label><label><span>Ring width</span><input v-model.number="values.thickness" type="number" min="2" max="50" /></label></template>
    </div>
    <div class="component-demo-stage" :class="{'overlay-demo':isOverlay}">
      <button v-if="isOverlay" type="button" class="sf-button dark" @click="values.modelValue = true">Open {{ entry.name === 'SfModal' ? 'modal' : 'drawer' }}</button>
      <component v-if="component && visible" :is="component" :key="instanceKey" v-bind="values"
        @update:modelValue="changed" @click="componentClick" @action="action" @select="selected" @dismiss="dismissed" @error="feedback = $event">
        {{ entry.demo.slot }}
        <template v-if="isOverlay" #footer><button type="button" class="sf-button" @click="values.modelValue = false">Close</button></template>
      </component>
      <p v-else-if="!visible" class="demo-dismissed">The notification is hidden.</p>
      <span v-else class="demo-loading">Loading component...</span>
    </div>
    <p class="component-demo-feedback" role="status">{{ feedback || 'Use the control above to see its behavior.' }}</p>
  </section>
</template>
