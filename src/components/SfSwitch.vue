<script>
/** SOFTFORM AGENT NOTE
 * A native checkbox exposed as a switch. The tiny yellow thumb indicates the on state.
 * Use for an immediate on or off setting.
 * Use SfCheckbox when the option is part of a later form submission.
 * HTML tag: <sf-switch> via @bclonan/softform/elements/SfSwitch.
 * Props, events, and a runnable example: docs/components/SfSwitch.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfSwitch',props:{modelValue:Boolean,label:{type:String,default:'Toggle'},hideLabel:Boolean,disabled:Boolean},emits:['update:modelValue']};
</script>

<template>
<label class="sf-switch"><span :class="{'sr-only':hideLabel}">{{label}}</span><input type="checkbox" role="switch" :checked="modelValue" :disabled="disabled" @change="$emit('update:modelValue',$event.target.checked)"/><span class="sf-switch-track" aria-hidden="true"></span></label>
</template>
