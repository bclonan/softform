<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { SfAlert, SfBadge, SfBarChart, SfButton, SfDonutChart, SfIcon, SfProgress, SfSelect, SfSkeleton, SfSlider, SfStatCard, SfSurface, SfTable, SfTimeline, SfToast } from '../index.js';

// These fixtures are local sample data. Each phase below represents a simulated
// response, so loading indicators never claim that a network request occurred.
const reports = {
  week: { label:'This week', axis:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], values:[42,58,49,72,65,87,76], completed:28, active:12, response:91, focus:72,
    rows:[{id:'1',project:'Northstar site',owner:'Maya Chen',status:'Active',updated:'Today'},{id:'2',project:'Field notes',owner:'Brad Morgan',status:'Active',updated:'Yesterday'},{id:'3',project:'Release kit',owner:'Sam Rivera',status:'Review',updated:'Monday'}] },
  month: { label:'This month', axis:['W1','W2','W3','W4'], values:[134,168,152,206], completed:104, active:19, response:94, focus:78,
    rows:[{id:'4',project:'Design system',owner:'Maya Chen',status:'Active',updated:'Today'},{id:'5',project:'Partner portal',owner:'Sam Rivera',status:'Review',updated:'Tuesday'},{id:'6',project:'Release kit',owner:'Brad Morgan',status:'Active',updated:'Monday'}] },
  quarter: { label:'This quarter', axis:['Jul','Aug','Sep'], values:[522,614,708], completed:312, active:24, response:96, focus:81,
    rows:[{id:'7',project:'Partner portal',owner:'Maya Chen',status:'Active',updated:'Today'},{id:'8',project:'Field research',owner:'Brad Morgan',status:'Review',updated:'Wednesday'},{id:'9',project:'Mobile refresh',owner:'Sam Rivera',status:'Active',updated:'Monday'}] },
};
const period = ref('week');
const report = computed(() => reports[period.value]);
const phase = ref(0);
const delay = ref(220);
const stagger = ref(90);
const duration = ref(760);
const chartLayout = ref('vertical');
const recordView = ref('table');
const ringSize = ref(110);
const toast = ref('');
const columns = [{key:'project',label:'Project'},{key:'owner',label:'Owner'},{key:'status',label:'Status',badge:true},{key:'updated',label:'Updated'}];
const timeline = [{title:'Report prepared',description:'Sample activity is ready to inspect.',time:'Today'},{title:'Review shared',description:'Maya added comments to Northstar.',time:'Yesterday'},{title:'Draft opened',description:'The release kit entered review.',time:'Monday'}];
const status = computed(() => ['Preparing sample report','Summary ready. Loading charts','Charts ready. Loading records','Sample report ready'][phase.value]);
let timers = [];
function loadReport() {
  timers.forEach(clearTimeout);
  timers = [];
  phase.value = 0;
  timers.push(setTimeout(() => { phase.value = 1; }, 220));
  timers.push(setTimeout(() => { phase.value = 2; }, 540));
  timers.push(setTimeout(() => { phase.value = 3; }, 1120));
}
watch(period, loadReport);
onMounted(loadReport);
onBeforeUnmount(() => timers.forEach(clearTimeout));
</script>

<template>
  <div class="example-shell">
    <aside class="example-sidebar">
      <a class="example-brand" href="/"><span>s</span> softform <small>EXAMPLES</small></a>
      <p class="example-nav-label">EXPLORE</p>
      <nav aria-label="Example pages"><a href="/"><SfIcon name="grid" /> Workspace</a><a href="/examples/analytics.html" aria-current="page"><SfIcon name="chart" /> Studio pulse</a><a href="/examples/planner.html"><SfIcon name="calendar" /> Planner</a><a href="/examples/elements-gallery.html"><SfIcon name="cube" /> HTML gallery</a><a href="/docs.html"><SfIcon name="code" /> Component docs</a></nav>
      <div class="example-sidebar-note"><SfIcon name="info" /><p>This page uses local sample data. Reload the report to watch each section arrive.</p></div>
    </aside>
    <div class="example-main">
      <header class="example-topbar"><span>Atelier Studio <SfIcon name="chevron" /> Studio pulse</span><SfBadge tone="outline">LOCAL SAMPLE</SfBadge></header>
      <main class="example-content">
        <div class="example-heading"><div><p class="eyebrow">OPERATIONS REPORT</p><h1>Studio pulse</h1><p>Track project activity, team capacity, and the work waiting for review.</p></div><SfButton variant="dark" icon="refresh" @click="loadReport">Replay data load</SfButton></div>
        <SfAlert tone="info" title="A real loading sequence for sample data" message="The data is stored in this page. The staged delays show how a page can expose pending, partial, and ready states without implying a live service." />
        <div class="report-toolbar"><SfSelect v-model="period" label="Report period" :options="[{label:'This week',value:'week'},{label:'This month',value:'month'},{label:'This quarter',value:'quarter'}]" /><p role="status" aria-live="polite"><span class="status-dot" :class="{ready:phase===3}"></span>{{status}}</p></div>
        <section class="example-stats" aria-label="Report summary">
          <SfStatCard label="Completed tasks" :value="report.completed" change="Delivered" description="in this period" icon="checkCircle" :loading="phase<1" :motion-delay="0" :motion-duration="duration" />
          <SfStatCard label="Active projects" :value="report.active" change="In progress" description="across the studio" icon="folder" :loading="phase<1" :motion-delay="120" :motion-duration="duration" />
          <SfStatCard label="Response rate" :value="report.response" change="Percent" description="team check-ins" icon="activity" :loading="phase<1" :motion-delay="240" :motion-duration="duration" />
        </section>
        <section class="example-chart-grid" aria-label="Report charts">
          <SfSurface as="article" class="example-chart-card"><div class="example-card-head"><div><p class="eyebrow">ACTIVITY</p><h2>Work completed</h2></div><SfBadge tone="accent">{{report.label}}</SfBadge></div><SfBarChart :values="report.values" :labels="report.axis" label="Completed work" :unit="report.label.toUpperCase()" :highlight="report.values.length-2" :orientation="chartLayout" :loading="phase<2" :motion-delay="delay" :motion-duration="duration" :stagger="stagger" /></SfSurface>
          <SfSurface as="article" class="example-chart-card"><div class="example-card-head"><div><p class="eyebrow">CAPACITY</p><h2>Time with room</h2></div><SfIcon name="target" /></div><SfDonutChart :value="report.focus" label="Available" primary="Available" secondary="Booked" :size="ringSize" :loading="phase<2" :motion-delay="delay+180" :motion-duration="duration" /><div class="example-progress"><SfProgress label="Response rate" :value="report.response" :loading="phase<2" :motion-delay="delay+300" :motion-duration="duration" /></div></SfSurface>
        </section>
        <section class="example-lower-grid"><div><div class="example-section-head"><div><p class="eyebrow">PROJECTS</p><h2>Recently touched</h2></div><SfSelect v-model="recordView" label="Record view" :options="[{label:'Table',value:'table'},{label:'Cards',value:'cards'}]" /></div><SfTable :columns="columns" :rows="report.rows" caption="Projects in this sample report" :view="recordView" searchable :page-size="2" :loading="phase<3" /></div><SfSurface as="aside" class="example-activity"><p class="eyebrow">EVENTS</p><h2>What changed</h2><SfTimeline :items="timeline" /></SfSurface></section>
        <SfSurface as="section" class="motion-panel"><div class="example-section-head"><div><p class="eyebrow">MOTION CONTROLS</p><h2>Set the timing</h2></div><span>Timing changes apply on the next replay</span></div><p>These controls pass milliseconds to the chart props. Reduced-motion settings still take priority.</p><div class="motion-controls"><SfSlider v-model="delay" label="Start delay" unit=" ms" :min="0" :max="1000" :step="20" /><SfSlider v-model="stagger" label="Bar stagger" unit=" ms" :min="0" :max="250" :step="10" /><SfSlider v-model="duration" label="Duration" unit=" ms" :min="100" :max="1600" :step="20" /><SfSelect v-model="chartLayout" label="Bar layout" :options="[{label:'Vertical',value:'vertical'},{label:'Horizontal',value:'horizontal'}]" /><SfSlider v-model="ringSize" label="Ring size" unit=" px" :min="60" :max="180" :step="10" /></div></SfSurface>
      </main>
      <footer class="example-footer">Softform example <span>Local fixture data · Vue components · Adjustable motion</span></footer>
    </div>
    <div class="toast-position" v-if="toast"><SfToast :message="toast" @dismiss="toast=''" /></div>
  </div>
</template>
