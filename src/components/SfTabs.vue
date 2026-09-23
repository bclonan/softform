<script>
/** SOFTFORM AGENT NOTE
 * A controlled tablist with roving focus, linked tab panel, and directional keyboard navigation.
 * Use when one of several labeled panels is visible at a time.
 * Use SfSegmented for a short filter that does not own a panel.
 * HTML tag: <sf-tabs> via @bclonan/softform/elements/SfTabs.
 * Props, events, and a runnable example: docs/components/SfTabs.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import { selectionMotionProps, useSelectionMotion } from '../useSelectionMotion.js';

export default {name:'SfTabs',props:{modelValue:String,options:{type:Array,default:()=>[]},label:{type:String,default:'Tabs'},...selectionMotionProps},emits:['update:modelValue'],setup(p,{emit}){const root=ref(null),id=uid('tabs');function key(e,i){if(!p.options.length)return;let j=i;if(e.key==='ArrowRight')j=(i+1)%p.options.length;else if(e.key==='ArrowLeft')j=(i+p.options.length-1)%p.options.length;else if(e.key==='Home')j=0;else if(e.key==='End')j=p.options.length-1;else return;e.preventDefault();emit('update:modelValue',p.options[j].value);nextTick(()=>root.value?.querySelectorAll('[role=tab]')[j]?.focus())}return{root,id,key,...useSelectionMotion(p,()=>p.options)}}};
</script>

<template>
<div ref="root" class="sf-tabs sf-selection" :class="{'sf-selection-ready':motionReady}" :style="motionStyle"><div role="tablist" :aria-label="label"><button v-for="(o,i) in options" :key="o.value" :id="id+'-'+o.value" role="tab" type="button" :style="fillStyle(i)" :aria-selected="modelValue===o.value" :aria-controls="id+'-panel'" :tabindex="modelValue===o.value?0:-1" @click="$emit('update:modelValue',o.value)" @keydown="key($event,i)">{{o.label}}</button></div><div :id="id+'-panel'" role="tabpanel" :aria-labelledby="id+'-'+modelValue" tabindex="0"><Transition name="sf-feedback" mode="out-in"><div :key="modelValue" class="sf-tab-content"><slot :active="modelValue"/></div></Transition></div></div>
</template>
