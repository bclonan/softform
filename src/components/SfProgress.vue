<script>
/** SOFTFORM AGENT NOTE
 * A native progress element with a label and numeric output. Values represent real state supplied by the host.
 * Use when task completion can be expressed as a percentage.
 * Use SfSpinner when progress cannot be measured.
 * HTML tag: <sf-progress> via @bclonan/softform/elements/SfProgress.
 * Props, events, and a runnable example: docs/components/SfProgress.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import { useMotionNumber } from '../useMotionNumber.js';

export default {name:'SfProgress',props:{value:{type:Number,default:68},label:{type:String,default:'Workspace sync'},tone:String,loading:Boolean,motionDelay:{type:Number,default:0},motionDuration:{type:Number,default:650},animateOnMount:{type:Boolean,default:true}},setup(p){const display=useMotionNumber(()=>p.loading?0:clamp(p.value),{delay:()=>p.motionDelay,duration:()=>p.motionDuration,animateOnMount:()=>p.animateOnMount,immediateWhen:()=>p.loading});return{id:uid('progress'),display}}};
</script>

<template>
<div class="sf-progress" :class="tone" :aria-busy="loading"><div class="progress-title"><label :for="id">{{label}}</label><output>{{loading?'Loading':Math.round(display)+'%'}}</output></div><progress :id="id" max="100" :value="display">{{Math.round(display)}}%</progress></div>
</template>
