<script>
/** SOFTFORM AGENT NOTE
 * A ceramic side menu with icons, counts, and a current-page marker.
 * Use for a small vertical group of destinations or sections.
 * Do not use for arbitrary action buttons.
 * HTML tag: <sf-nav-list> via @bclonan/softform/elements/SfNavList.
 * Props, events, and a runnable example: docs/components/SfNavList.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfBadge from './SfBadge.vue';
import SfIcon from './SfIcon.vue';
import { selectionMotionProps, useSelectionMotion } from '../useSelectionMotion.js';
export default {name:'SfNavList',components:{SfBadge,SfIcon},props:{modelValue:String,items:{type:Array,default:()=>[]},label:{type:String,default:'Main navigation'},...selectionMotionProps},emits:['update:modelValue'],setup(p){return useSelectionMotion(p,()=>p.items)}};
</script>

<template>
<nav class="sf-surface sf-nav-list sf-selection" :class="{'sf-selection-ready':motionReady}" :style="motionStyle" :aria-label="label"><button v-for="(i,index) in items" :key="i.value" type="button" :style="fillStyle(index)" :aria-current="i.value===modelValue?'page':undefined" @click="$emit('update:modelValue',i.value)"><sf-icon :name="i.icon || 'circle'" size="sm"/><span>{{i.label}}</span><sf-badge v-if="i.count" :tone="i.value===modelValue?'accent':''">{{i.count}}</sf-badge><sf-icon v-else name="chevron" class="chevron" size="sm"/></button></nav>
</template>
