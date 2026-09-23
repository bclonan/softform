<script>
/** SOFTFORM AGENT NOTE
 * A hint shown on hover or focus. The slot receives its tooltip id to attach with aria-describedby.
 * Use to explain a compact control on hover or focus.
 * Do not hide essential instructions in a tooltip.
 * HTML tag: <sf-tooltip> via @bclonan/softform/elements/SfTooltip.
 * Props, events, and a runnable example: docs/components/SfTooltip.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfTooltip',props:{text:{type:String,required:true}},setup:()=>({id:uid('tooltip')})};
</script>

<template>
<span class="sf-tooltip"><slot :describedby="id"/><span :id="id" role="tooltip">{{text}}</span></span>
</template>
