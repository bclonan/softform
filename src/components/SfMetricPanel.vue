<script>
/** SOFTFORM AGENT NOTE
 * A dense dashboard module combining a total, two counters, and a compact activity chart.
 * Use to combine a total, two related counts, and recent activity.
 * Use SfStatCard for one isolated metric.
 * HTML tag: <sf-metric-panel> via @bclonan/softform/elements/SfMetricPanel.
 * Props, events, and a runnable example: docs/components/SfMetricPanel.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfBarChart from './SfBarChart.vue';
import SfSurface from './SfSurface.vue';
import { useMotionNumber } from '../useMotionNumber.js';
export default {name:'SfMetricPanel',components:{SfBarChart,SfSurface},props:{title:{type:String,default:'Messages'},total:{type:Number,default:84},primary:{type:Number,default:63},secondary:{type:Number,default:21},loading:Boolean,motionDelay:{type:Number,default:0},motionDuration:{type:Number,default:650},stagger:{type:Number,default:80},animateOnMount:{type:Boolean,default:true}},setup(p){const settings={delay:()=>p.motionDelay,duration:()=>p.motionDuration,animateOnMount:()=>p.animateOnMount,immediateWhen:()=>p.loading};return{totalDisplay:useMotionNumber(()=>p.loading?0:p.total,settings),primaryDisplay:useMotionNumber(()=>p.loading?0:p.primary,settings),secondaryDisplay:useMotionNumber(()=>p.loading?0:p.secondary,settings)}}};
</script>

<template>
<sf-surface class="sf-metric-panel" :aria-busy="loading"><div class="metric-panel-title">{{title}}<small>{{loading?'…':Math.round(totalDisplay)}}</small></div><div class="metric-panel-stats"><div><strong>{{loading?'…':Math.round(primaryDisplay)}}</strong><span>Received</span></div><div><strong>{{loading?'…':Math.round(secondaryDisplay)}}</strong><span>Sent</span></div></div><sf-bar-chart :values="[25,40,35,65,53,78]" :labels="['M','T','W','T','F','S']" label="Weekly activity" unit="6 DAYS" :highlight="5" :loading="loading" :motion-delay="motionDelay" :motion-duration="motionDuration" :stagger="stagger" :animate-on-mount="animateOnMount"/></sf-surface>
</template>
