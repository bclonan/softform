<script>
/** SOFTFORM AGENT NOTE
 * A prominent, pill-shaped entry point for a primary creation flow.
 * Use for the main creation action when the layout can give it clear space.
 * Do not add several floating primary actions to one view.
 * HTML tag: <sf-fab> via @bclonan/softform/elements/SfFab.
 * Props, events, and a runnable example: docs/components/SfFab.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
export default {name:'SfFab',components:{SfIcon},props:{icon:{type:String,default:'plus'},label:{type:String,default:'Create new'}},emits:['click']};
</script>

<template>
<button type="button" class="sf-fab" @click="$emit('click',$event)"><sf-icon :name="icon"/>{{label}}</button>
</template>
