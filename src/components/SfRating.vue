<script>
/** SOFTFORM AGENT NOTE
 * Keyboard-operable star selection with radio semantics. Arrow keys, Home, and End are supported.
 * Use for a small ordered rating that supports keyboard selection.
 * Do not use for a precise numeric measurement.
 * HTML tag: <sf-rating> via @bclonan/softform/elements/SfRating.
 * Props, events, and a runnable example: docs/components/SfRating.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
export default {name:'SfRating',components:{SfIcon},props:{modelValue:{type:Number,default:4},max:{type:Number,default:5},label:{type:String,default:'Rating'}},emits:['update:modelValue'],setup(p,{emit}){const root=ref(null);function key(e,n){let v=n;if(['ArrowRight','ArrowUp'].includes(e.key))v=Math.min(p.max,n+1);else if(['ArrowLeft','ArrowDown'].includes(e.key))v=Math.max(1,n-1);else if(e.key==='Home')v=1;else if(e.key==='End')v=p.max;else return;e.preventDefault();emit('update:modelValue',v);nextTick(()=>root.value.querySelectorAll('button')[v-1]?.focus());}return{root,key}}};
</script>

<template>
<div ref="root" class="sf-rating" role="radiogroup" :aria-label="label"><button v-for="n in max" :key="n" type="button" role="radio" :aria-checked="n===modelValue" :aria-label="n+' of '+max+' stars'" :class="{filled:n<=modelValue}" :tabindex="n===(modelValue||1)?0:-1" @click="$emit('update:modelValue',n)" @keydown="key($event,n)"><sf-icon name="star"/></button></div>
</template>
