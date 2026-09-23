<script>
/** SOFTFORM AGENT NOTE
 * The shared ceramic material. Use the default raised treatment, a low elevation, a flat card, or an inset well.
 * Use as a card, section, article, or inset well with Softform material.
 * Do not use it to replace a meaningful document heading.
 * HTML tag: <sf-surface> via @bclonan/softform/elements/SfSurface.
 * Props, events, and a runnable example: docs/components/SfSurface.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfSurface',props:{as:{type:String,default:'div'},depth:{type:String,default:'raised'},tone:{type:String,default:'light'}}};
</script>

<template>
<component :is="as" class="sf-surface" :data-depth="depth" :data-tone="tone"><slot/></component>
</template>
