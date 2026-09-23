<script>
/** SOFTFORM AGENT NOTE
 * A compact controlled group for related tools. It emits a new value without mutating props.
 * Use when one compact toolbar controls a related set of choices.
 * Use SfRadioGroup when the choices need visible descriptions.
 * HTML tag: <sf-button-group> via @bclonan/softform/elements/SfButtonGroup.
 * Props, events, and a runnable example: docs/components/SfButtonGroup.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
import { selectionMotionProps, useSelectionMotion } from '../useSelectionMotion.js';
export default {name:'SfButtonGroup',components:{SfIcon},props:{modelValue:String,options:{type:Array,default:()=>[]},label:{type:String,default:'Button group'},...selectionMotionProps},emits:['update:modelValue'],setup(p){return useSelectionMotion(p,()=>p.options)}};
</script>

<template>
<div class="sf-button-group sf-selection" :class="{'sf-selection-ready':motionReady}" :style="motionStyle" role="group" :aria-label="label"><button v-for="(o,index) in options" :key="o.value" type="button" :style="fillStyle(index)" :aria-label="o.label" :title="o.label" :aria-pressed="o.value===modelValue" @click="$emit('update:modelValue',o.value)"><sf-icon v-if="o.icon" :name="o.icon"/><span v-else>{{o.label}}</span></button></div>
</template>
