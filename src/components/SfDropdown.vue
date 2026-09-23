<script>
/** SOFTFORM AGENT NOTE
 * A floating action menu with outside-click dismissal, Escape, focus restoration, and arrow-key navigation.
 * Use for a short list of secondary actions attached to a trigger.
 * Do not use as a form select.
 * HTML tag: <sf-dropdown> via @bclonan/softform/elements/SfDropdown.
 * Props, events, and a runnable example: docs/components/SfDropdown.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
export default {name:'SfDropdown',components:{SfIcon},props:{label:{type:String,default:'Quick actions'},items:{type:Array,default:()=>[{label:'Duplicate',value:'duplicate',icon:'copy'},{label:'Download',value:'download',icon:'download'},{label:'Archive',value:'archive',icon:'folder'}]}},emits:['select'],setup(p,{emit}){const open=ref(false),root=ref(null),id=uid('menu');function focus(i=0){nextTick(()=>{const b=root.value.querySelectorAll('[role=menuitem]');b[(i+b.length)%b.length]?.focus()})}function toggle(){open.value=!open.value;if(open.value)focus()}function close(returnFocus=false){open.value=false;if(returnFocus)root.value?.querySelector('[aria-haspopup]')?.focus()}function outside(e){if(!root.value?.contains(e.target))close()}function key(e){const b=[...root.value.querySelectorAll('[role=menuitem]')];const i=b.indexOf(document.activeElement);if(e.key==='Escape'){e.preventDefault();close(true)}else if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();if(!open.value){open.value=true;focus()}else focus(e.key==='Home'?0:e.key==='End'?b.length-1:i+(e.key==='ArrowDown'?1:-1))}else if(e.key==='Tab')close()}function select(item){emit('select',item);close(true)}onMounted(()=>document.addEventListener('pointerdown',outside));onBeforeUnmount(()=>document.removeEventListener('pointerdown',outside));return{open,root,id,toggle,key,select}}};
</script>

<template>
<div class="sf-dropdown" ref="root" @keydown="key"><button type="button" class="sf-button" aria-haspopup="menu" :aria-expanded="open" :aria-controls="id" @click="toggle">{{label}}<sf-icon name="down" size="sm"/></button><div v-if="open" :id="id" class="sf-surface sf-dropdown-menu" role="menu"><button v-for="i in items" :key="i.value" type="button" role="menuitem" tabindex="-1" @click="select(i)"><sf-icon :name="i.icon || 'circle'"/>{{i.label}}</button></div></div>
</template>
