<script>
/** SOFTFORM AGENT NOTE
 * Compact status, count, and metadata markers. Four treatments: default, accent, dark, outline.
 * Use for a short status, count, or category beside other content.
 * Do not use a badge as a button or for long sentences.
 * HTML tag: <sf-badge> via @bclonan/softform/elements/SfBadge.
 * Props, events, and a runnable example: docs/components/SfBadge.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfBadge',props:{as:{type:String,default:'span'},tone:{type:String,default:''},dot:Boolean}};
</script>

<template>
<component :is="as" class="sf-badge" :class="[tone,{dot}]"><slot/></component>
</template>
