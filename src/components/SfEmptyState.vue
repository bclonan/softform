<script>
/** SOFTFORM AGENT NOTE
 * A composed icon, title, supporting text, and optional action for a meaningful blank state.
 * Use when a collection has no items and the next action is clear.
 * Do not show it while content is still loading.
 * HTML tag: <sf-empty-state> via @bclonan/softform/elements/SfEmptyState.
 * Props, events, and a runnable example: docs/components/SfEmptyState.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfButton from './SfButton.vue';
import SfIcon from './SfIcon.vue';
export default {name:'SfEmptyState',components:{SfButton,SfIcon},props:{as:{type:String,default:'div'},title:{type:String,default:'A little room for possibility.'},message:{type:String,default:'Your collection starts with a single component.'},action:{type:String,default:'Create collection'},icon:{type:String,default:'inbox'}},emits:['action']};
</script>

<template>
<component :is="as" class="sf-empty"><span class="empty-orb"><sf-icon :name="icon"/></span><strong>{{title}}</strong><p>{{message}}</p><sf-button v-if="action" variant="ghost" size="small" icon="plus" @click="$emit('action')">{{action}}</sf-button></component>
</template>
