<script>
/** SOFTFORM AGENT NOTE
 * An ordered activity list with connectors, descriptions, and times.
 * Use for events whose order and time are meaningful.
 * Use SfListCard when the entries are actions without chronology.
 * HTML tag: <sf-timeline> via @bclonan/softform/elements/SfTimeline.
 * Props, events, and a runnable example: docs/components/SfTimeline.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfTimeline',props:{items:{type:Array,default:()=>[]}}};
</script>

<template>
<ol class="sf-timeline" aria-label="Activity timeline"><li v-for="(i,n) in items" :key="n"><span class="timeline-dot" aria-hidden="true"></span><div><strong>{{i.title}}</strong><p>{{i.description}}</p></div><time>{{i.time}}</time></li></ol>
</template>
