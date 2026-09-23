<script>
/** SOFTFORM AGENT NOTE
 * A controlled native textarea with a live character count and maximum length.
 * Use for multi-line writing with a character limit.
 * Use SfInput for one-line values.
 * HTML tag: <sf-textarea> via @bclonan/softform/elements/SfTextarea.
 * Props, events, and a runnable example: docs/components/SfTextarea.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfTextarea',props:{modelValue:{type:String,default:''},label:String,placeholder:String,maxlength:{type:Number,default:240}},emits:['update:modelValue'],setup:()=>({id:uid('textarea')})};
</script>

<template>
<div class="sf-field"><label :for="id" class="field-label">{{label || 'Notes'}}<span class="sf-character-count" :class="{'near-limit':modelValue.length >= maxlength * .9}"><Transition name="sf-value" mode="out-in"><b :key="modelValue.length">{{modelValue.length}}</b></Transition> / {{maxlength}}</span></label><textarea :id="id" class="sf-textarea" :value="modelValue" :maxlength="maxlength" :placeholder="placeholder" @input="$emit('update:modelValue',$event.target.value)"></textarea></div>
</template>
