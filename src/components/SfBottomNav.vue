<script>
/** SOFTFORM AGENT NOTE
 * A compact navigation bar for phone-sized layouts, with visible labels and an accent active state.
 * Use for a small set of primary destinations in a narrow layout.
 * Do not use for a long list of routes.
 * HTML tag: <sf-bottom-nav> via @bclonan/softform/elements/SfBottomNav.
 * Props, events, and a runnable example: docs/components/SfBottomNav.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
import { selectionMotionProps, useSelectionMotion } from '../useSelectionMotion.js';
export default {name:'SfBottomNav',components:{SfIcon},props:{modelValue:String,items:{type:Array,default:()=>[]},...selectionMotionProps},emits:['update:modelValue'],setup(p){return useSelectionMotion(p,()=>p.items)}};
</script>

<template>
<nav class="sf-surface sf-bottom-nav sf-selection" :class="{'sf-selection-ready':motionReady}" :style="motionStyle" aria-label="Mobile navigation"><button v-for="(i,index) in items" :key="i.value" type="button" :style="fillStyle(index)" :aria-current="i.value===modelValue?'page':undefined" @click="$emit('update:modelValue',i.value)"><span class="nav-icon"><sf-icon :name="i.icon" size="sm"/></span><span class="nav-label">{{i.label}}</span></button></nav>
</template>
