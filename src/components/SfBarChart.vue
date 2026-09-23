<script>
/** SOFTFORM AGENT NOTE
 * A lightweight HTML/CSS chart with a full textual data description. No canvas or chart library dependency.
 * Use to compare a small sequence of values, such as activity by day.
 * Use a table when precise values matter more than the shape of the data.
 * HTML tag: <sf-bar-chart> via @bclonan/softform/elements/SfBarChart.
 * Props, events, and a runnable example: docs/components/SfBarChart.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import { useMotionNumber } from '../useMotionNumber.js';

const BarValue = {
  props:{value:Number,loading:Boolean,ready:Boolean,motionDelay:Number,motionDuration:Number,animateOnMount:Boolean},
  setup(p){
    const display=useMotionNumber(()=>p.loading||!p.ready?0:p.value,{
      delay:()=>p.motionDelay,duration:()=>p.motionDuration,animateOnMount:()=>p.animateOnMount,immediateWhen:()=>p.loading,
    });
    return()=>h('span',{class:['bar-value',{'bar-value-hidden':p.loading||!p.ready}]},p.loading?'':Math.round(display.value));
  },
};

export default {
  name:'SfBarChart',
  components:{BarValue},
  props:{
    values:{type:Array,default:()=>[28,43,35,62,49,84,61]},
    labels:{type:Array,default:()=>['M','T','W','T','F','S','S']},
    label:{type:String,default:'Activity'},unit:{type:String,default:'THIS WEEK'},
    highlight:{type:Number,default:5},loading:Boolean,
    orientation:{type:String,default:'vertical'},accentColor:{type:String,default:''},
    motionDelay:{type:Number,default:0},motionDuration:{type:Number,default:650},
    stagger:{type:Number,default:80},animateOnMount:{type:Boolean,default:true},
  },
  setup(p){
    const ready=ref(true);
    let frame;
    onMounted(()=>{if(p.animateOnMount){ready.value=false;frame=requestAnimationFrame(()=>{ready.value=true})}});
    onBeforeUnmount(()=>{if(frame!==undefined)cancelAnimationFrame(frame)});
    return{
      ready,
      max:computed(()=>Math.max(...p.values.map(v=>Number(v)||0),1)),
      chartLabel:computed(()=>p.loading?`Loading ${p.label}`:`${p.label}. ${p.values.map((v,i)=>`${p.labels[i] || i+1}: ${v}`).join('; ')}`),
      delayFor:i=>`${Math.min(30000,Math.max(0,p.motionDelay+i*p.stagger))}ms`,
      duration:computed(()=>`${Math.min(30000,Math.max(0,p.motionDuration))}ms`),
    };
  },
};
</script>

<template>
<div class="sf-bars" :style="{'--sf-chart-accent':accentColor || undefined}" role="img" :aria-label="chartLabel" :aria-busy="loading"><div class="chart-caption">{{label}}<span aria-live="polite">{{loading?'LOADING':unit}}</span></div><template v-if="orientation==='horizontal'"><div class="sf-horizontal-bars" aria-hidden="true"><div class="sf-horizontal-row" v-for="(v,i) in values" :key="i" :style="{'--bar-delay':delayFor(i),'--bar-duration':duration}"><span>{{labels[i] || i+1}}</span><div class="sf-horizontal-track"><div class="bar-stick" :class="{highlight:i===highlight,'bar-loading':loading}" :style="{width:loading || !ready?'0%':Math.max(3,(Number(v)||0)/max*100)+'%'}"></div></div><bar-value :value="Number(v)||0" :loading="loading" :ready="ready" :motion-delay="Math.max(0,motionDelay+i*stagger)" :motion-duration="motionDuration" :animate-on-mount="animateOnMount"/></div></div></template><template v-else><div class="bars-plot" aria-hidden="true"><div class="bar-column" v-for="(v,i) in values" :key="i" :style="{'--bar-delay':delayFor(i),'--bar-duration':duration}"><bar-value :value="Number(v)||0" :loading="loading" :ready="ready" :motion-delay="Math.max(0,motionDelay+i*stagger)" :motion-duration="motionDuration" :animate-on-mount="animateOnMount"/><div class="bar-stick" :class="{highlight:i===highlight, 'bar-loading':loading}" :style="{height:loading || !ready?'0%':Math.max(3,(Number(v)||0)/max*76)+'%'}" :title="(labels[i]||i+1)+': '+v"></div></div></div><div class="bar-labels" aria-hidden="true"><span v-for="(v,i) in values" :key="i">{{labels[i] || i+1}}</span></div></template></div>
</template>
