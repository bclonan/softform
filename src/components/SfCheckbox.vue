<script>
/** SOFTFORM AGENT NOTE
 * A native checkbox with a clear selected state, label, and disabled option.
 * Use for one independent yes or no option.
 * Use SfRadioGroup for mutually exclusive choices.
 * HTML tag: <sf-checkbox> via @bclonan/softform/elements/SfCheckbox.
 * Props, events, and a runnable example: docs/components/SfCheckbox.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfCheckbox',props:{modelValue:Boolean,label:{type:String,default:'Checkbox'},disabled:Boolean},emits:['update:modelValue']};
</script>

<template>
<label class="sf-check"><input type="checkbox" :checked="modelValue" :disabled="disabled" @change="$emit('update:modelValue',$event.target.checked)"/><span>{{label}}</span></label>
</template>
