<script>
/** SOFTFORM AGENT NOTE
 * Injects a registry, normalizes the provider payload, validates an immutable CardModel array, then renders provider-agnostic notification cards.
 * Use when notification cards arrive from REST, GraphQL, legacy records, or a custom provider.
 * Do not pass provider payloads directly to presentation cards.
 * HTML tag: <sf-adapted-cards> via @bclonan/softform/elements/SfAdaptedCards.
 * Props, events, and a runnable example: docs/components/SfAdaptedCards.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import { ADAPTER_KEY, defaultRegistry } from '../adapters.js';
import SfAlert from './SfAlert.vue';
import SfEmptyState from './SfEmptyState.vue';
import SfNotification from './SfNotification.vue';
export default {name:'SfAdaptedCards',components:{SfAlert,SfEmptyState,SfNotification},
 props:{adapter:{type:String,default:'rest'},payload:{type:Object,required:true},registry:Object},emits:['select','adapted','error'],
 setup(p,{emit}){const injected=inject(ADAPTER_KEY,defaultRegistry);const result=computed(()=>{try{return{cards:(p.registry||injected).normalize(p.adapter,p.payload),error:''}}catch(e){return{cards:[],error:e.message}}});watch(result,r=>r.error?emit('error',r.error):emit('adapted',r.cards),{immediate:true});return{result,iconFor:type=>({message:'mail',call:'phone',status:'checkCircle'})[type]};}};
</script>

<template>
<div class="adapted-cards"><sf-alert v-if="result.error" tone="error" title="Adapter needs attention" :message="result.error"/><sf-notification v-for="card in result.cards" :key="card.id" :title="card.title" :body="card.body" :sender="card.sender" :time="card.time" :count="card.count" :icon="iconFor(card.type)" @action="$emit('select',card)"/><sf-empty-state v-if="!result.error && !result.cards.length" title="Your inbox is clear." message="The adapter returned an empty collection." action=""/></div>
</template>
