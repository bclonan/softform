<script>
/** SOFTFORM AGENT NOTE
 * A reusable profile composition with initials, status, role, and an action affordance.
 * Use to summarize one person, role, and availability.
 * Do not use for a full editable profile form.
 * HTML tag: <sf-profile-card> via @bclonan/softform/elements/SfProfileCard.
 * Props, events, and a runnable example: docs/components/SfProfileCard.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfAvatar from './SfAvatar.vue';
import SfBadge from './SfBadge.vue';
import SfIconButton from './SfIconButton.vue';
import SfSurface from './SfSurface.vue';
export default {name:'SfProfileCard',components:{SfAvatar,SfBadge,SfIconButton,SfSurface},props:{name:{type:String,default:'Brad Morgan'},role:{type:String,default:'Product designer'},initials:{type:String,default:'AM'},status:{type:String,default:'Available for ideas'}},emits:['action']};
</script>

<template>
<sf-surface class="sf-profile"><div class="profile-top"><sf-avatar :initials="initials" tone="dark" size="large" :label="name"/><div class="grow"><h4>{{name}}</h4><p>{{role}}</p></div><sf-icon-button icon="more" label="Profile actions" size="small" @click="$emit('action')"/></div><div class="profile-bottom"><span class="row" style="gap:6px"><i class="status-dot"></i>{{status}}</span><sf-badge tone="outline">PRO</sf-badge></div></sf-surface>
</template>
