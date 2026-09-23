<script>
/** SOFTFORM AGENT NOTE
 * A small content card with stable presentation props. It knows nothing about REST, GraphQL, or legacy payloads.
 * Use to show one message, call, or status update with sender and action.
 * Use SfAdaptedCards to normalize a collection from a provider.
 * HTML tag: <sf-notification> via @bclonan/softform/elements/SfNotification.
 * Props, events, and a runnable example: docs/components/SfNotification.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfAvatar from './SfAvatar.vue';
import SfBadge from './SfBadge.vue';
export default {name:'SfNotification',components:{SfAvatar,SfBadge},props:{title:{type:String,default:'Design review'},body:{type:String,default:'Your new component library is ready to explore.'},sender:{type:String,default:'Maya Chen'},time:{type:String,default:'09:41'},icon:{type:String,default:'mail'},count:{type:Number,default:0},action:{type:String,default:'Open'}},emits:['action']};
</script>

<template>
<article class="sf-surface sf-notification"><sf-avatar :icon="icon" tone="dark" :label="icon+' notification'"/><div class="notification-body"><div class="notification-head"><h4>{{title}}</h4><span class="notification-time">{{time}}</span></div><p>{{body}}</p><div class="notification-foot"><span>{{sender}} <sf-badge v-if="count" tone="accent">{{count}} new</sf-badge></span><button v-if="action" type="button" @click="$emit('action')" :aria-label="action+' '+title">{{action}}</button></div></div></article>
</template>
