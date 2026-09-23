<script>
/** SOFTFORM AGENT NOTE
 * Small, regular, and large loading indicators. The status label can be customized.
 * Use for an indeterminate wait inside or near an action.
 * Use SfProgress when completion can be measured.
 * HTML tag: <sf-spinner> via @bclonan/softform/elements/SfSpinner.
 * Props, events, and a runnable example: docs/components/SfSpinner.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfSpinner',props:{size:String,label:{type:String,default:'Loading'}}};
</script>

<template>
<span class="sf-spinner" :class="size" role="status" :aria-label="label"></span>
</template>
