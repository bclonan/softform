<script>
/** SOFTFORM AGENT NOTE
 * Surface, dark, accent, and ghost actions. Supports icons, loading, and disabled states.
 * Use for a discrete action such as save, create, or submit.
 * Use a native link for navigation.
 * HTML tag: <sf-button> via @bclonan/softform/elements/SfButton.
 * Props, events, and a runnable example: docs/components/SfButton.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
import SfSpinner from './SfSpinner.vue';
export default {name:'SfButton',components:{SfIcon,SfSpinner},props:{variant:{type:String,default:'surface'},size:String,icon:String,loading:Boolean,disabled:Boolean,type:{type:String,default:'button'}},emits:['click']};
</script>

<template>
<button :type="type" class="sf-button" :class="[variant,size]" :disabled="disabled || loading" :aria-busy="loading || undefined" @click="$emit('click',$event)"><sf-spinner v-if="loading" size="small"/><sf-icon v-else-if="icon" :name="icon"/><slot/></button>
</template>
