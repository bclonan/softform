<script>
/** SOFTFORM AGENT NOTE
 * A native radio group in an inset tray. Use for view modes or mutually exclusive settings.
 * Use for a few short view or filter modes with one active choice.
 * Use SfTabs when each choice owns a content panel.
 * HTML tag: <sf-segmented> via @bclonan/softform/elements/SfSegmented.
 * Props, events, and a runnable example: docs/components/SfSegmented.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
import { selectionMotionProps, useSelectionMotion } from '../useSelectionMotion.js';
export default {name:'SfSegmented',components:{SfIcon},props:{modelValue:String,options:{type:Array,default:()=>[]},label:{type:String,default:'View'},...selectionMotionProps},emits:['update:modelValue'],setup(p){return{id:uid('segment'),...useSelectionMotion(p,()=>p.options)}}};
</script>

<template>
<div class="sf-segmented sf-selection" :class="{'sf-selection-ready':motionReady}" :style="motionStyle" role="radiogroup" :aria-label="label"><label v-for="(o,index) in options" :key="o.value" :style="fillStyle(index)"><input type="radio" :name="id" :value="o.value" :checked="o.value===modelValue" :aria-label="o.label" @change="$emit('update:modelValue',o.value)"/><sf-icon v-if="o.icon" :name="o.icon" size="sm"/><span>{{o.label}}</span></label></div>
</template>
