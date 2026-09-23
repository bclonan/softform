<script>
/** SOFTFORM AGENT NOTE
 * A native select preserves operating-system pickers and keyboard behavior.
 * Use a native picker for a compact list of options.
 * Use SfRadioGroup when every option should stay visible.
 * HTML tag: <sf-select> via @bclonan/softform/elements/SfSelect.
 * Props, events, and a runnable example: docs/components/SfSelect.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfSelect',props:{modelValue:String,label:String,options:{type:Array,default:()=>[]}},emits:['update:modelValue'],setup:()=>({id:uid('select')})};
</script>

<template>
<div class="sf-field"><label :for="id">{{label || 'Choose an option'}}</label><select class="sf-select" :id="id" :value="modelValue" @change="$emit('update:modelValue',$event.target.value)"><option v-for="o in options" :key="o.value" :value="o.value">{{o.label}}</option></select></div>
</template>
