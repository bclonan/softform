<script>
/** SOFTFORM AGENT NOTE
 * A CSS conic-gradient ring, numeric center, and legend. Provide a percentage from 0 to 100.
 * Use to show one part of a whole with a short label.
 * Use a table or bar chart for multiple exact comparisons.
 * HTML tag: <sf-donut-chart> via @bclonan/softform/elements/SfDonutChart.
 * Props, events, and a runnable example: docs/components/SfDonutChart.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import { useMotionNumber } from '../useMotionNumber.js';

export default {name:'SfDonutChart',props:{value:{type:Number,default:72},label:{type:String,default:'Focus'},primary:{type:String,default:'Focused'},secondary:{type:String,default:'Available'},size:{type:Number,default:110},thickness:{type:Number,default:9},primaryColor:{type:String,default:''},secondaryColor:{type:String,default:''},loading:Boolean,motionDelay:{type:Number,default:0},motionDuration:{type:Number,default:650},animateOnMount:{type:Boolean,default:true}},setup(p){const display=useMotionNumber(()=>p.loading?0:clamp(p.value),{delay:()=>p.motionDelay,duration:()=>p.motionDuration,animateOnMount:()=>p.animateOnMount,immediateWhen:()=>p.loading});return{display}}};
</script>

<template>
<div class="sf-donut" :style="{'--sf-donut-primary':primaryColor || undefined,'--sf-donut-secondary':secondaryColor || undefined}" role="img" :aria-label="loading?'Loading '+label:label+': '+value+' percent'" :aria-busy="loading"><div class="donut-ring" :style="{'--pct':display+'%',width:Math.max(48,size)+'px',height:Math.max(48,size)+'px',padding:Math.max(2,Math.min(thickness,size/2-2))+'px'}"><div class="donut-hole"><strong>{{loading?'…':Math.round(display)+'%'}}</strong><span>{{label}}</span></div></div><div class="donut-key" aria-hidden="true"><span><i class="key-dot"></i>{{primary}}</span><span><i class="key-dot muted"></i>{{secondary}}</span></div></div>
</template>
