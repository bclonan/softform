<script>
/** SOFTFORM AGENT NOTE
 * A hairline separator with an optional centered label.
 * Use to separate nearby groups or label an alternative path.
 * Do not use repeated dividers to replace spacing and headings.
 * HTML tag: <sf-divider> via @bclonan/softform/elements/SfDivider.
 * Props, events, and a runnable example: docs/components/SfDivider.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfDivider',props:{as:{type:String,default:'div'}},};
</script>

<template>
<component :is="as" class="sf-divider" role="separator"><slot/></component>
</template>
