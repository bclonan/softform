<script>
/** SOFTFORM AGENT NOTE
 * Informational, warning, and error states. Errors use alert semantics; other messages use status.
 * Use for a persistent message that needs attention in the current context.
 * Use SfToast for a brief confirmation that can disappear.
 * HTML tag: <sf-alert> via @bclonan/softform/elements/SfAlert.
 * Props, events, and a runnable example: docs/components/SfAlert.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
export default {name:'SfAlert',components:{SfIcon},props:{as:{type:String,default:'div'},title:{type:String,default:'A little heads up'},message:String,tone:{type:String,default:'info'}}};
</script>

<template>
<component :is="as" class="sf-alert" :class="tone" :role="tone==='error'?'alert':'status'"><span class="alert-icon"><sf-icon :name="tone==='warning'||tone==='error'?'warning':'info'"/></span><div><strong>{{title}}</strong><p v-if="message">{{message}}</p><slot/></div></component>
</template>
