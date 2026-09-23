<script>
/** SOFTFORM AGENT NOTE
 * Increment, decrement, or type a numeric value. Every change is clamped to the provided limits.
 * Use to adjust a small integer quantity within known limits.
 * Use SfSlider for a broad approximate range.
 * HTML tag: <sf-stepper> via @bclonan/softform/elements/SfStepper.
 * Props, events, and a runnable example: docs/components/SfStepper.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIconButton from './SfIconButton.vue';
export default {name:'SfStepper',components:{SfIconButton},props:{modelValue:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:99},label:{type:String,default:'Quantity'}},emits:['update:modelValue'],setup(p,{emit}){return{set:v=>emit('update:modelValue',Math.round(clamp(v,p.min,p.max))) }}};
</script>

<template>
<div class="sf-stepper" role="group" :aria-label="label"><sf-icon-button icon="minus" :label="'Decrease '+label" :disabled="modelValue<=min" @click="set(modelValue-1)"/><input type="number" :aria-label="label" :min="min" :max="max" :value="modelValue" @change="set($event.target.value)"/><sf-icon-button icon="plus" :label="'Increase '+label" :disabled="modelValue>=max" @click="set(modelValue+1)"/></div>
</template>
