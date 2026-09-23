<script>
/** SOFTFORM AGENT NOTE
 * A native range input with output, limits, units, and optional end labels.
 * Use for an adjustable bounded number with a visible value.
 * Use SfStepper or SfInput when exact entry is central.
 * HTML tag: <sf-slider> via @bclonan/softform/elements/SfSlider.
 * Props, events, and a runnable example: docs/components/SfSlider.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfSlider',props:{modelValue:{type:Number,default:50},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},label:{type:String,default:'Level'},unit:{type:String,default:'%'},ticks:{type:Boolean,default:true}},emits:['update:modelValue'],setup(p){return{id:uid('slider'),pct:computed(()=>`${clamp((p.modelValue-p.min)/(p.max-p.min)*100)}%`)}}};
</script>

<template>
<div class="sf-slider"><label :for="id">{{label}}<output :for="id"><Transition name="sf-value" mode="out-in"><span :key="modelValue">{{modelValue}}{{unit}}</span></Transition></output></label><input :id="id" type="range" :min="min" :max="max" :step="step" :value="modelValue" :style="{'--pct':pct}" @input="$emit('update:modelValue',Number($event.target.value))"/><div class="range-ends" v-if="ticks" aria-hidden="true"><span>{{min}}</span><span>{{max}}</span></div></div>
</template>
