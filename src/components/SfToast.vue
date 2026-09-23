<script>
/** SOFTFORM AGENT NOTE
 * A compact live status message with an optional dismiss action. Placement and timing belong to the host app.
 * Use for brief confirmation of a completed local action.
 * Use SfAlert for persistent errors or guidance.
 * HTML tag: <sf-toast> via @bclonan/softform/elements/SfToast.
 * Props, events, and a runnable example: docs/components/SfToast.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
export default {name:'SfToast',components:{SfIcon},props:{as:{type:String,default:'div'},message:{type:String,default:'Changes saved to your workspace.'},dismissible:{type:Boolean,default:true}},emits:['dismiss']};
</script>

<template>
<component :is="as" class="sf-toast" role="status"><sf-icon name="checkCircle" size="sm"/><span>{{message}}</span><button v-if="dismissible" type="button" aria-label="Dismiss notification" @click="$emit('dismiss')"><sf-icon name="close" size="sm"/></button></component>
</template>
