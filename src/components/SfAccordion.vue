<script>
/** SOFTFORM AGENT NOTE
 * Native details elements preserve open/close and keyboard behavior. Multiple sections may remain open.
 * Use for a short list of questions or sections that readers can expand independently.
 * Do not hide required form fields or essential safety text.
 * HTML tag: <sf-accordion> via @bclonan/softform/elements/SfAccordion.
 * Props, events, and a runnable example: docs/components/SfAccordion.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
export default {name:'SfAccordion',components:{SfIcon},props:{items:{type:Array,default:()=>[]}}};
</script>

<template>
<div class="sf-surface sf-accordion"><details v-for="(item,i) in items" :key="i"><summary>{{item.title}}<sf-icon name="plus"/></summary><p>{{item.content}}</p></details></div>
</template>
