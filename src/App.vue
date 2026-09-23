<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';
import { SfIcon, SfButton, SfIconButton, SfBadge, SfSurface, SfStatCard, SfBarChart, SfDonutChart, SfTable, SfTimeline, SfCalendar, SfAvatar, SfAdaptedCards, SfInput, SfSelect, SfSwitch, SfTextarea, SfSlider, SfAlert, SfToast, SfModal, SfElement } from './index.js';

const path = location.pathname;
const page = ref(path.includes('inbox') ? 'inbox' : path.includes('settings') ? 'settings' : 'dashboard');
const pageTitle = computed(() => ({ dashboard: 'Overview', inbox: 'Team inbox', settings: 'Workspace settings' })[page.value]);
const pageOrder = ['dashboard','inbox','settings'];
const previousPage = ref(-1);
const navReady = ref(false);
const navMotionDelay = ref(0);
const navMotionDuration = ref(420);
const navMotion = ref(true);
function navOrigin(name){const index=pageOrder.indexOf(name);return {'--sf-fill-origin':previousPage.value<0?'50%':previousPage.value<index?'0%':'100%'}}
function readPage(){const pathname=location.pathname;previousPage.value=pageOrder.indexOf(page.value);page.value=pathname.includes('inbox')?'inbox':pathname.includes('settings')?'settings':'dashboard'}
function navigate(name){if(page.value===name)return;previousPage.value=pageOrder.indexOf(page.value);page.value=name;history.pushState(null,'',name==='dashboard'?'/':`/examples/${name}.html`);document.title=`${pageTitle.value} · Softform`;window.scrollTo({top:0,behavior:'instant'})}
onMounted(()=>{navReady.value=true;window.addEventListener('popstate',readPage)});
onBeforeUnmount(()=>window.removeEventListener('popstate',readPage));
const greeting = new Intl.DateTimeFormat('en', { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date());
const notifications = ref(true);
const focus = ref(false);
const capacity = ref(72);
const workspace = ref('studio');
const displayName = ref('Brad Morgan');
const notes = ref('A calm place for the team to build, review, and share.');
const saved = ref(false);
const showModal = ref(false);
const selectedDate = ref('2026-09-23');
const activity = ref('');
const inboxPayload = ref({ notifications: [
  { notification_id: 'n-1', category: 'message', subject: 'Design review', preview: 'The dashboard is ready for your feedback.', sender: { display_name: 'Maya Chen' }, received_at: '09:41', unread_count: 4 },
  { notification_id: 'n-2', category: 'call', subject: 'Product sync', preview: 'A recap from this morning is now available.', sender: { display_name: 'Product team' }, received_at: '10:15', unread_count: 2 },
  { notification_id: 'n-3', category: 'status', subject: 'Everything is in sync', preview: 'Your workspace is up to date.', sender: { display_name: 'Workspace' }, received_at: 'Just now', unread_count: 0 },
] });
const adapterKind = ref('rest');
const activePayload = computed(() => {
  const records = inboxPayload.value.notifications;
  if (adapterKind.value === 'graphql') return { data: { inbox: { edges: records.map(item => ({ node: {
    key: item.notification_id, kind: item.category.toUpperCase(), headline: item.subject,
    content: item.preview, author: { name: item.sender.display_name }, displayTime: item.received_at,
    unreadCount: item.unread_count,
  } })) } } };
  if (adapterKind.value === 'legacy') return { records: records.map(item => [
    item.notification_id, item.category, item.subject, item.preview,
    item.sender.display_name, item.received_at, item.unread_count, 1,
  ]) };
  return inboxPayload.value;
});
const rows = ref([
  { id: '1', project: 'Product refresh', owner: 'Maya Chen', status: 'Active', due: 'Oct 02' },
  { id: '2', project: 'Field notes', owner: 'Brad Morgan', status: 'Active', due: 'Oct 08' },
  { id: '3', project: 'Launch archive', owner: 'Sam Rivera', status: 'Draft', due: 'Oct 15' },
]);
const columns = [
  { key: 'project', label: 'Project' }, { key: 'owner', label: 'Owner' },
  { key: 'status', label: 'Status', badge: true }, { key: 'due', label: 'Due' },
];
const timeline = [
  { title: 'Design review', description: 'Maya shared the new dashboard screens.', time: '09:41' },
  { title: 'Weekly report', description: 'The report is ready to read.', time: 'Yesterday' },
  { title: 'New project', description: 'Field notes joined the workspace.', time: 'Monday' },
];
const unreadCount = computed(() => inboxPayload.value.notifications.reduce((sum, n) => sum + n.unread_count, 0));
function addProject() {
  rows.value = [{ id: String(Date.now()), project: 'Untitled project', owner: displayName.value || 'You', status: 'Draft', due: 'TBD' }, ...rows.value];
  showModal.value = false;
  activity.value = 'Project created in this local example.';
}
function saveSettings() { saved.value = true; activity.value = 'Settings saved for this session.'; }
function selectCard(card) { activity.value = `Opened ${card.title}.`; }
</script>

<template>
  <div class="app-shell">
    <aside class="app-sidebar" aria-label="Main navigation">
      <a class="app-brand" href="/"><span class="brand-symbol">s<span></span></span><span>softform<small>WORKSPACE</small></span></a>
      <div class="workspace-picker"><SfAvatar initials="AM" tone="dark" /><span>Atelier Studio<small>Team workspace</small></span><SfIcon name="down" size="sm" /></div>
      <p class="nav-caption">WORKSPACE</p>
      <nav class="site-nav" :class="{'site-nav-ready':navReady && navMotion}" :style="{'--sf-select-duration':navMotionDuration+'ms','--sf-select-delay':navMotionDelay+'ms'}" aria-label="Examples">
        <a href="/" :style="navOrigin('dashboard')" :aria-current="page === 'dashboard' ? 'page' : undefined" @click.prevent="navigate('dashboard')"><SfIcon name="grid" size="sm" /> Overview</a>
        <a href="/examples/inbox.html" :style="navOrigin('inbox')" :aria-current="page === 'inbox' ? 'page' : undefined" @click.prevent="navigate('inbox')"><SfIcon name="inbox" size="sm" /> Inbox <span class="nav-count">{{ unreadCount }}</span></a>
        <a href="/examples/settings.html" :style="navOrigin('settings')" :aria-current="page === 'settings' ? 'page' : undefined" @click.prevent="navigate('settings')"><SfIcon name="sliders" size="sm" /> Settings</a>
        <a href="/examples/analytics.html"><SfIcon name="chart" size="sm" /> Studio pulse</a>
        <a href="/examples/planner.html"><SfIcon name="calendar" size="sm" /> Planner</a>
      </nav>
      <p class="nav-caption nav-secondary">RESOURCES</p>
      <nav class="site-nav" aria-label="Resources"><a href="/docs.html"><SfIcon name="code" size="sm" /> Documentation</a><a href="/examples/elements-gallery.html"><SfIcon name="cube" size="sm" /> HTML gallery</a><a href="http://127.0.0.1:6006" target="_blank" rel="noreferrer"><SfIcon name="layers" size="sm" /> Storybook</a></nav>
      <div class="sidebar-bottom"><div class="plan-box"><SfIcon name="spark" /><strong>Thoughtful by default.</strong><p>Components shaped for work that needs a little room to breathe.</p></div><div class="user-line"><SfAvatar initials="AM" tone="dark" /><span>Brad Morgan<small>Product designer</small></span><SfIcon name="more" size="sm" /></div></div>
    </aside>

    <div class="app-main">
      <header class="app-topbar"><div class="crumb">Atelier Studio <SfIcon name="chevron" size="sm" /> <strong>{{ pageTitle }}</strong></div><div class="top-actions"><span class="live-label"><i></i> LOCAL DEMO</span><SfIconButton icon="bell" label="View notifications" size="small" @click="activity = 'Your inbox has '+unreadCount+' unread updates.'" /><SfAvatar initials="AM" tone="dark" size="small" /></div></header>
      <main id="main-content">
        <div class="page-intro"><div><p class="eyebrow">{{ greeting }}</p><h1>{{ page === 'dashboard' ? 'Good morning, Brad.' : pageTitle }}</h1><p class="intro-sub">{{ page === 'dashboard' ? 'Here is what is happening across your workspace today.' : page === 'inbox' ? 'Updates from your team, gathered in one place.' : 'Adjust your workspace to fit the way you work.' }}</p></div><SfButton v-if="page === 'dashboard'" variant="dark" icon="plus" @click="showModal = true">New project</SfButton><SfBadge v-else tone="outline">{{ page === 'inbox' ? unreadCount + ' unread' : 'Local preferences' }}</SfBadge></div>

        <template v-if="page === 'dashboard'">
          <section class="stats-grid" aria-label="Workspace metrics"><SfStatCard label="Active projects" :value="rows.length" change="+1 this week" description="across your team" icon="folder" :motion-delay="0" /><SfStatCard label="Unread updates" :value="unreadCount" change="3 conversations" description="need a look" icon="mail" :motion-delay="120" /><SfStatCard label="Team members" :value="12" change="+2 this month" description="in Atelier Studio" icon="users" :motion-delay="240" /></section>
          <section class="dash-grid" aria-label="Workspace activity"><SfSurface as="article" class="chart-card"><div class="card-heading"><div><p class="eyebrow">TEAM ACTIVITY</p><h2>Steady momentum</h2></div><SfBadge tone="accent">THIS WEEK</SfBadge></div><SfBarChart :values="[32, 44, 38, 61, 54, 77, 68]" :labels="['M','T','W','T','F','S','S']" label="Activity" unit="7 DAYS" :highlight="5" :motion-delay="280" :stagger="90" :motion-duration="760" /></SfSurface><SfSurface as="article" class="focus-card"><div class="card-heading"><div><p class="eyebrow">CAPACITY</p><h2>Room to focus</h2></div><SfIcon name="target" /></div><SfDonutChart :value="capacity" label="Available" primary="Available" secondary="Scheduled" :motion-delay="430" :motion-duration="850" /></SfSurface></section>
          <section class="lower-grid"><div><div class="section-heading"><div><p class="eyebrow">WORK IN MOTION</p><h2>Projects</h2></div><SfButton size="small" variant="ghost" icon="plus" @click="showModal = true">Add project</SfButton></div><SfTable :columns="columns" :rows="rows" caption="Projects in Atelier Studio" /></div><SfSurface as="section" class="activity-panel"><p class="eyebrow">LATEST UPDATES</p><h2>Recent activity</h2><SfTimeline :items="timeline" /></SfSurface></section>
        </template>

        <template v-else-if="page === 'inbox'"><div class="inbox-grid"><section><div class="section-heading"><div><p class="eyebrow">YOUR TEAM</p><h2>Recent messages</h2></div><div class="inbox-tools"><SfSelect v-model="adapterKind" label="Data source" :options="[{label:'REST',value:'rest'},{label:'GraphQL',value:'graphql'},{label:'Legacy',value:'legacy'}]" /><SfBadge tone="accent">{{ unreadCount }} unread</SfBadge></div></div><SfAdaptedCards :adapter="adapterKind" :payload="activePayload" @select="selectCard" @error="activity = $event" /></section><aside class="inbox-side"><SfSurface as="section" class="calendar-panel"><p class="eyebrow">YOUR SCHEDULE</p><h2>Make time for it</h2><SfCalendar v-model="selectedDate" /></SfSurface><SfAlert title="Connected data, one shape" :message="'Viewing the '+adapterKind.toUpperCase()+' payload. Switch sources above to see the same cards.'" /></aside></div></template>

        <template v-else><div class="settings-grid"><SfSurface as="form" class="settings-form" @submit.prevent="saveSettings"><div class="settings-head"><p class="eyebrow">PERSONAL DETAILS</p><h2>Your workspace</h2><p>Keep the essentials current for this session.</p></div><div class="form-grid"><SfInput v-model="displayName" label="Display name" icon="user" /><SfSelect v-model="workspace" label="Default workspace" :options="[{label:'Atelier Studio',value:'studio'},{label:'Personal',value:'personal'}]" /></div><SfTextarea v-model="notes" label="Workspace note" /><div class="form-actions"><SfButton type="submit" variant="dark" icon="check">Save preferences</SfButton><span v-if="saved">Saved for this session</span></div></SfSurface><aside class="settings-aside"><SfSurface as="section" class="preference-card"><p class="eyebrow">PREFERENCES</p><h2>Stay in control</h2><div class="preference-row"><span><strong>Notifications</strong><small>Updates from your team</small></span><SfSwitch v-model="notifications" label="Notifications" hide-label /></div><div class="preference-row"><span><strong>Focus mode</strong><small>Quiet the extra noise</small></span><SfSwitch v-model="focus" label="Focus mode" hide-label /></div><SfSlider v-model="capacity" label="Weekly capacity" /></SfSurface><SfSurface as="section" class="preference-card"><p class="eyebrow">NAVIGATION</p><h2>Selection motion</h2><SfSwitch v-model="navMotion" label="Animate selection" /><SfSlider v-model="navMotionDelay" label="Fill delay" unit=" ms" :min="0" :max="600" :step="20" /><SfSlider v-model="navMotionDuration" label="Fill duration" unit=" ms" :min="0" :max="1200" :step="20" /><p>Choose Overview or Inbox to see the new timing.</p></SfSurface><SfAlert tone="info" title="A local example" message="Preferences live only in this page session. Connect your own storage through your app." /></aside></div></template>
      </main>
      <footer class="app-footer">Softform component library <span>Vue 3 · Semantic HTML · Adapter-ready</span></footer>
    </div>
    <div class="toast-position" v-if="activity"><SfToast :message="activity" @dismiss="activity = ''" /></div>
    <SfModal v-model="showModal" title="Create a project"><p>Start with a draft. You can give it a name once the idea takes shape.</p><template #footer><SfButton variant="ghost" @click="showModal = false">Cancel</SfButton><SfButton variant="dark" @click="addProject">Create project</SfButton></template></SfModal>
  </div>
</template>
