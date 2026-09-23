<script setup>
import { computed, ref, watch } from 'vue';
import { SfAlert, SfBadge, SfButton, SfCalendar, SfEmptyState, SfIcon, SfInput, SfListCard, SfModal, SfProgress, SfSegmented, SfSelect, SfStatCard, SfSurface, SfTable, SfTextarea, SfToast } from '../index.js';

const selectedDate = ref('2026-09-23');
const time = ref('10:00');
const person = ref('');
const type = ref('Review');
const notes = ref('');
const tried = ref(false);
const reviewOpen = ref(false);
const feedback = ref('');
const timeOptions = ['09:00','10:00','11:00','14:00'].map(value => ({value,label:value}));
const bookings = ref([
  {id:'1',date:'2026-09-23',time:'09:00',person:'Maya Chen',type:'Review',notes:'Review the new navigation.'},
  {id:'2',date:'2026-09-23',time:'14:00',person:'Sam Rivera',type:'Planning',notes:'Plan the release checklist.'},
  {id:'3',date:'2026-09-25',time:'11:00',person:'Brad Morgan',type:'Workshop',notes:'Sketch the mobile flow.'},
]);
const dayBookings = computed(() => bookings.value.filter(item => item.date===selectedDate.value).sort((a,b)=>a.time.localeCompare(b.time)));
const available = computed(() => timeOptions.filter(slot => !dayBookings.value.some(item => item.time===slot.value)));
const choiceOptions = computed(() => available.value.map(slot => ({...slot,label:slot.label})));
const occupancy = computed(() => dayBookings.value.length / timeOptions.length * 100);
const tableColumns = [{key:'date',label:'Date'},{key:'time',label:'Time'},{key:'person',label:'Person'},{key:'type',label:'Session',badge:true}];
const listItems = computed(() => dayBookings.value.map(item => ({label:`${item.time} · ${item.person}`,detail:item.type,icon:'calendar',id:item.id})));
watch(selectedDate, () => { time.value = available.value[0]?.value || ''; tried.value = false; });
watch(available, slots => { if (time.value && !slots.some(slot => slot.value===time.value)) time.value = slots[0]?.value || ''; });

function prepareBooking() {
  tried.value = true;
  if (!person.value.trim() || !time.value) return;
  reviewOpen.value = true;
}
function confirmBooking() {
  if (!person.value.trim() || !time.value || dayBookings.value.some(item=>item.time===time.value)) {
    reviewOpen.value = false;
    feedback.value = 'That time is no longer available. Choose another slot.';
    return;
  }
  bookings.value = [...bookings.value, {id:String(Date.now()),date:selectedDate.value,time:time.value,person:person.value.trim(),type:type.value,notes:notes.value.trim()}];
  feedback.value = `${type.value} booked for ${person.value.trim()} on ${selectedDate.value} at ${time.value}.`;
  person.value = ''; notes.value = ''; tried.value = false; reviewOpen.value = false;
}
function showBooking(item) {
  const booking = bookings.value.find(record=>record.id===item.id);
  if (booking) feedback.value = `${booking.person}: ${booking.notes || 'No notes for this session.'}`;
}
</script>

<template>
  <div class="example-shell">
    <aside class="example-sidebar">
      <a class="example-brand" href="/"><span>s</span> softform <small>EXAMPLES</small></a>
      <p class="example-nav-label">EXPLORE</p>
      <nav aria-label="Example pages"><a href="/"><SfIcon name="grid" /> Workspace</a><a href="/examples/analytics.html"><SfIcon name="chart" /> Studio pulse</a><a href="/examples/planner.html" aria-current="page"><SfIcon name="calendar" /> Planner</a><a href="/examples/elements-gallery.html"><SfIcon name="cube" /> HTML gallery</a><a href="/docs.html"><SfIcon name="code" /> Component docs</a></nav>
      <div class="example-sidebar-note"><SfIcon name="info" /><p>Bookings stay in this browser tab. This example does not contact a server.</p></div>
    </aside>
    <div class="example-main">
      <header class="example-topbar"><span>Atelier Studio <SfIcon name="chevron" /> Planner</span><SfBadge tone="outline">LOCAL SESSION</SfBadge></header>
      <main class="example-content">
        <div class="example-heading"><div><p class="eyebrow">TEAM SCHEDULE</p><h1>Plan a session</h1><p>Choose a day, reserve a free time, and review the details before adding it.</p></div><SfBadge tone="accent">{{bookings.length}} SESSIONS</SfBadge></div>
        <section class="planner-stats" aria-label="Schedule summary"><SfStatCard label="Booked sessions" :value="bookings.length" change="This tab" description="local session" icon="calendar" /><SfStatCard label="Selected day" :value="dayBookings.length" change="Of 4 slots" description="already reserved" icon="clock" /><SfStatCard label="Open slots" :value="available.length" change="Available" description="on selected day" icon="checkCircle" /></section>
        <div class="planner-grid"><SfSurface as="section" class="planner-calendar"><p class="eyebrow">STEP 01</p><h2>Pick a day</h2><SfCalendar v-model="selectedDate" /><SfProgress label="Booked slots" :value="occupancy" :motion-delay="140" :motion-duration="650" /></SfSurface>
          <SfSurface as="section" class="planner-form"><p class="eyebrow">STEP 02</p><h2>Session details</h2><p class="planner-hint">{{selectedDate}} has {{available.length}} open {{available.length===1?'slot':'slots'}}.</p><SfInput v-model="person" label="Person or team" placeholder="Who is this with?" :error="tried && !person.trim() ? 'Enter a person or team.' : ''" /><SfSelect v-model="type" label="Session type" :options="[{label:'Review',value:'Review'},{label:'Planning',value:'Planning'},{label:'Workshop',value:'Workshop'}]" /><div class="planner-slots"><span>Available times</span><SfSegmented v-if="choiceOptions.length" v-model="time" :options="choiceOptions" label="Available times" /><SfAlert v-else tone="warning" title="This day is full" message="Choose another date to see open times." /></div><SfTextarea v-model="notes" label="Notes" placeholder="What should you cover?" :maxlength="180" /><SfButton variant="dark" icon="arrow" :disabled="!available.length" @click="prepareBooking">Review booking</SfButton></SfSurface>
          <aside class="planner-side"><SfListCard v-if="dayBookings.length" title="Sessions on this day" :items="listItems" @select="showBooking" /><SfEmptyState v-else title="A clear day" message="No sessions are booked for this date." action="" /><SfAlert tone="info" title="Local scheduling example" message="The form prevents double booking within this tab. Reloading restores the sample schedule." /></aside>
        </div>
        <section class="planner-records"><div class="example-section-head"><div><p class="eyebrow">ALL BOOKINGS</p><h2>Schedule overview</h2></div><span>{{bookings.length}} local records</span></div><SfTable :columns="tableColumns" :rows="bookings" caption="Sessions in this browser tab" /></section>
      </main>
      <footer class="example-footer">Softform example <span>Local state · Native form controls · Review before adding</span></footer>
    </div>
    <SfModal v-model="reviewOpen" title="Review booking"><p><strong>{{person.trim()}}</strong> · {{type}}</p><p>{{selectedDate}} at {{time}}</p><p v-if="notes.trim()">{{notes.trim()}}</p><template #footer><SfButton variant="ghost" @click="reviewOpen=false">Edit details</SfButton><SfButton variant="dark" @click="confirmBooking">Add session</SfButton></template></SfModal>
    <div class="toast-position" v-if="feedback"><SfToast :message="feedback" @dismiss="feedback=''" /></div>
  </div>
</template>
