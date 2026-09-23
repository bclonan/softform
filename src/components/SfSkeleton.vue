<script>
/** SOFTFORM AGENT NOTE
 * A loading placeholder, with reduced-motion support and a status label.
 * Use to reserve the shape of content during a pending load.
 * Do not use it after an empty response is known.
 * HTML tag: <sf-skeleton> via @bclonan/softform/elements/SfSkeleton.
 * Props, events, and a runnable example: docs/components/SfSkeleton.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfSkeleton',props:{kind:{type:String,default:'card'}}};
</script>

<template>
<div v-if="kind==='card'" class="sf-surface sf-skeleton-card" role="status" aria-label="Loading content"><div class="row"><div class="sf-skeleton circle"></div><div class="grow"><div class="sf-skeleton" style="width:70%"></div><div class="sf-skeleton" style="width:45%"></div></div></div><div class="sf-skeleton" style="width:100%;margin-top:22px"></div><div class="sf-skeleton" style="width:75%"></div></div><div v-else class="sf-skeleton" :class="kind" role="status" aria-label="Loading content"></div>
</template>
