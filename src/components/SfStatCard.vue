<script>
/** SOFTFORM AGENT NOTE
 * A large figure, label, icon, change marker, and supporting context.
 * Use for one important metric with context and a short change label.
 * Use SfMetricPanel when two counts and a trend belong together.
 * HTML tag: <sf-stat-card> via @bclonan/softform/elements/SfStatCard.
 * Props, events, and a runnable example: docs/components/SfStatCard.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
import SfSurface from './SfSurface.vue';
import { useMotionNumber } from '../useMotionNumber.js';
export default {name:'SfStatCard',components:{SfIcon,SfSurface},props:{label:{type:String,default:'Messages'},value:{type:[String,Number],default:128},change:String,description:{type:String,default:'since last week'},icon:{type:String,default:'mail'},loading:Boolean,motionDelay:{type:Number,default:0},motionDuration:{type:Number,default:650},animateOnMount:{type:Boolean,default:true}},setup(p){const display=useMotionNumber(()=>p.loading?0:typeof p.value==='number'?p.value:0,{delay:()=>p.motionDelay,duration:()=>p.motionDuration,animateOnMount:()=>p.animateOnMount,immediateWhen:()=>p.loading});return{display}}};
</script>

<template>
<sf-surface class="sf-stat" :aria-busy="loading"><div class="stat-head"><span>{{label}}</span><sf-icon :name="icon"/></div><div class="stat-value"><span v-if="loading">…</span><span v-else-if="typeof value==='number'">{{Math.round(display).toLocaleString()}}</span><Transition v-else name="sf-value" mode="out-in"><span :key="value">{{value}}</span></Transition></div><div class="stat-footer"><span v-if="change && !loading" class="stat-change">{{change}}</span><span>{{description}}</span></div></sf-surface>
</template>
