<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { marked } from 'marked';
import { SfIcon, SfInput, SfBadge, SfSurface } from './index.js';
import ComponentDemo from './ComponentDemo.vue';
import dictionary from './component-dictionary.json';
import usage from '../docs/README.md?raw';
import guidelines from '../docs/design-guidelines.md?raw';

const files = import.meta.glob('../docs/components/*.md', { query: '?raw', import: 'default', eager: true });
const components = Object.fromEntries(Object.entries(files).map(([path, content]) => [path.split('/').pop().replace('.md',''), content]));
const names = Object.keys(components).sort();
const query = ref('');
const current = ref(new URLSearchParams(location.search).get('component') || 'overview');
const filtered = computed(() => names.filter(name => name.toLowerCase().includes(query.value.toLowerCase())));
const markdown = computed(() => current.value === 'overview' ? usage : current.value === 'design' ? guidelines : components[current.value] || usage);
const html = computed(() => marked.parse(markdown.value));
const currentEntry = computed(() => dictionary[current.value]);
function choose(name) {
  current.value = name;
  const url = new URL(location.href);
  if (name === 'overview') url.searchParams.delete('component');
  else url.searchParams.set('component', name);
  history.pushState(null, '', url);
  window.scrollTo(0, 0);
}
function readLocation() { current.value = new URLSearchParams(location.search).get('component') || 'overview'; }
onMounted(() => window.addEventListener('popstate', readLocation));
onUnmounted(() => window.removeEventListener('popstate', readLocation));
function followReference(event) {
  const link = event.target.closest('a');
  if (!link) return;
  const match = link.getAttribute('href')?.match(/components\/(Sf\w+)\.md$/);
  if (match) { event.preventDefault(); choose(match[1]); }
}
</script>

<template>
  <div class="docs-layout">
    <aside class="docs-sidebar"><a href="/" class="docs-brand"><span class="docs-logo">s</span> softform <small>DOCS</small></a>
      <div class="docs-nav"><button :aria-current="current === 'overview' ? 'page' : undefined" @click="choose('overview')"><SfIcon name="home" size="sm" /> Getting started</button><button :aria-current="current === 'design' ? 'page' : undefined" @click="choose('design')"><SfIcon name="sliders" size="sm" /> Design guidelines</button></div>
      <div class="docs-search"><SfInput v-model="query" label="Search components" placeholder="Search components" icon="search" /></div>
      <div class="docs-list-head">COMPONENTS <span>{{ filtered.length }}</span></div>
      <nav class="docs-component-list" aria-label="Component references"><button v-for="name in filtered" :key="name" :aria-current="current === name ? 'page' : undefined" @click="choose(name)">{{ name }}<SfIcon name="chevron" size="sm" /></button></nav>
    </aside>
    <main class="docs-content"><div class="docs-top"><div><p class="eyebrow">SOFTFORM REFERENCE</p><span>Vue · React · Web Components</span></div><div class="docs-top-links"><a href="/examples/analytics.html">View examples <SfIcon name="arrow" size="sm" /></a><a href="https://www.npmjs.com/package/@bclonan/softform" target="_blank" rel="noopener noreferrer">npm package <SfIcon name="arrow" size="sm" /></a><SfBadge tone="accent">53 COMPONENTS</SfBadge></div></div><SfSurface as="article" class="docs-paper"><ComponentDemo v-if="currentEntry" :key="currentEntry.name" :entry="currentEntry" /><section v-if="currentEntry" class="component-guidance" aria-label="When to use this component"><div><span>USE IT WHEN</span><p>{{ currentEntry.whenToUse }}</p></div><div><span>CHOOSE SOMETHING ELSE WHEN</span><p>{{ currentEntry.avoidWhen }}</p></div><div><span>HTML TAG</span><code>&lt;{{ currentEntry.tag }}&gt;</code></div><div><span>MOTION</span><p>{{ currentEntry.motion }}</p></div></section><div class="docs-markdown" v-html="html" @click="followReference"></div></SfSurface><footer>Softform · 53 components · Native HTML entry points</footer></main>
  </div>
</template>
