<script>
/** SOFTFORM AGENT NOTE
 * Four native vertical sliders. Changes emit a copied channel array; application audio routing is intentionally separate.
 * Use to adjust several related audio levels together.
 * Use SfSlider for one value.
 * HTML tag: <sf-mixer> via @bclonan/softform/elements/SfMixer.
 * Props, events, and a runnable example: docs/components/SfMixer.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfSurface from './SfSurface.vue';
export default {name:'SfMixer',components:{SfSurface},props:{modelValue:{type:Array,default:()=>[72,46,84,61]},labels:{type:Array,default:()=>['Voice','Ambient','Alerts','Master']},title:{type:String,default:'Sound levels'}},emits:['update:modelValue'],setup(p,{emit}){const id=uid('mixer');function set(i,v){const result=[...p.modelValue];result[i]=clamp(v);emit('update:modelValue',result)}return{id,set}}};
</script>

<template>
<sf-surface class="sf-mixer"><div class="mixer-head">{{title}}<span>4 CHANNELS</span></div><div class="mixer-channels"><div class="mixer-channel" v-for="(v,i) in modelValue" :key="i"><output :for="id+'-'+i">{{v}}</output><input type="range" :id="id+'-'+i" min="0" max="100" :value="v" :aria-label="labels[i] || 'Channel '+(i+1)" @input="set(i,$event.target.value)"/><label :for="id+'-'+i">{{labels[i] || i+1}}</label></div></div></sf-surface>
</template>
