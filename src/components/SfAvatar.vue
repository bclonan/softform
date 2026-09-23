<script>
/** SOFTFORM AGENT NOTE
 * Initials or a decorative icon, with an accessible name and three size options.
 * Use an initial or icon to identify a person or source in a compact space.
 * Do not use an unlabeled avatar as the only name for a person.
 * HTML tag: <sf-avatar> via @bclonan/softform/elements/SfAvatar.
 * Props, events, and a runnable example: docs/components/SfAvatar.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
export default {name:'SfAvatar',components:{SfIcon},props:{initials:{type:String,default:'SF'},icon:String,size:String,tone:String,label:String}};
</script>

<template>
<span class="sf-avatar" :class="[size,tone]" role="img" :aria-label="label || initials"><sf-icon v-if="icon" :name="icon"/><span v-else aria-hidden="true">{{ initials }}</span></span>
</template>
