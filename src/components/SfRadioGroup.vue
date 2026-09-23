<script>
/** SOFTFORM AGENT NOTE
 * Mutually exclusive native inputs with fieldset and legend semantics.
 * Use for one choice among a labeled set of options.
 * Use SfSelect if the list is long and space is limited.
 * HTML tag: <sf-radio-group> via @bclonan/softform/elements/SfRadioGroup.
 * Props, events, and a runnable example: docs/components/SfRadioGroup.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfRadioGroup',props:{modelValue:String,label:String,options:{type:Array,default:()=>[]}},emits:['update:modelValue'],setup:()=>({id:uid('radio')})};
</script>

<template>
<fieldset class="sf-radio-group"><legend v-if="label">{{label}}</legend><label class="sf-radio" v-for="o in options" :key="o.value"><input type="radio" :name="id" :value="o.value" :checked="o.value===modelValue" @change="$emit('update:modelValue',o.value)"/><span>{{o.label}}</span></label></fieldset>
</template>
