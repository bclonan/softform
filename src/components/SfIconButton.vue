<script>
/** SOFTFORM AGENT NOTE
 * A tactile round control. Every instance requires a descriptive label.
 * Use for a compact action whose accessible label can be concise.
 * Use SfButton when the action text should remain visible.
 * HTML tag: <sf-icon-button> via @bclonan/softform/elements/SfIconButton.
 * Props, events, and a runnable example: docs/components/SfIconButton.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
export default {name:'SfIconButton',components:{SfIcon},props:{icon:{type:String,default:'plus'},label:{type:String,required:true},tone:String,size:String,disabled:Boolean,pressed:{type:Boolean,default:undefined}},emits:['click']};
</script>

<template>
<button type="button" class="sf-icon-button" :class="[tone,size]" :aria-label="label" :title="label" :aria-pressed="pressed" :disabled="disabled" @click="$emit('click',$event)"><sf-icon :name="icon"/></button>
</template>
