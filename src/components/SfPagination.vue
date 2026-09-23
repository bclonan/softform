<script>
/** SOFTFORM AGENT NOTE
 * A controlled page selector with bounded previous and next actions.
 * Use to move through known pages of a collection.
 * Do not use when total pages are unknown.
 * HTML tag: <sf-pagination> via @bclonan/softform/elements/SfPagination.
 * Props, events, and a runnable example: docs/components/SfPagination.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
import { selectionMotionProps, useSelectionMotion } from '../useSelectionMotion.js';
export default {name:'SfPagination',components:{SfIcon},props:{modelValue:{type:Number,default:1},pages:{type:Number,default:4},...selectionMotionProps},emits:['update:modelValue'],setup(p){return useSelectionMotion(p,()=>Array.from({length:Math.max(0,p.pages)},(_,i)=>({value:i+1})))}};
</script>

<template>
<nav class="sf-pagination sf-selection" :class="{'sf-selection-ready':motionReady}" :style="motionStyle" aria-label="Pagination"><button type="button" aria-label="Previous page" :disabled="modelValue<=1" @click="$emit('update:modelValue',modelValue-1)"><sf-icon name="left" size="sm"/></button><button v-for="n in pages" :key="n" type="button" :style="fillStyle(n-1)" :aria-label="'Page '+n" :aria-current="modelValue===n?'page':undefined" @click="$emit('update:modelValue',n)">{{n}}</button><button type="button" aria-label="Next page" :disabled="modelValue>=pages" @click="$emit('update:modelValue',modelValue+1)"><sf-icon name="chevron" size="sm"/></button></nav>
</template>
