<script>
/** SOFTFORM AGENT NOTE
 * A physical dial driven by a native horizontal range. Drag left/right or use arrow keys to adjust.
 * Use for a tactile percentage control when an approximate value is acceptable.
 * Use SfInput or SfStepper for a precise number.
 * HTML tag: <sf-dial> via @bclonan/softform/elements/SfDial.
 * Props, events, and a runnable example: docs/components/SfDial.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfDial',props:{modelValue:{type:Number,default:64},label:{type:String,default:'Intensity'}},emits:['update:modelValue'],setup:()=>({id:uid('dial')})};
</script>

<template>
<div class="sf-dial"><div class="sf-dial-shell"><div class="sf-dial-face" aria-hidden="true"><div class="sf-dial-indicator" :style="{'--angle':(modelValue*2.8-140)+'deg'}"></div><strong>{{modelValue}}</strong><small>PERCENT</small></div><input :id="id" type="range" min="0" max="100" :value="modelValue" :aria-label="label" :aria-valuetext="modelValue+' percent'" @input="$emit('update:modelValue',Number($event.target.value))"/></div><label :for="id">{{label}} · drag or use arrow keys</label></div>
</template>
