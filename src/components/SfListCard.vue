<script>
/** SOFTFORM AGENT NOTE
 * A compact row-based card for calls, contacts, tasks, or recent items. Emits the selected row.
 * Use for a short actionable list with an icon and small detail per row.
 * Use SfTable for sortable multi-column records.
 * HTML tag: <sf-list-card> via @bclonan/softform/elements/SfListCard.
 * Props, events, and a runnable example: docs/components/SfListCard.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
import SfSurface from './SfSurface.vue';
export default {name:'SfListCard',components:{SfIcon,SfSurface},props:{title:{type:String,default:'Recent calls'},items:{type:Array,default:()=>[{label:'Design team',detail:'12 min',icon:'users'},{label:'Maya Chen',detail:'4 min',icon:'phone'},{label:'Product sync',detail:'23 min',icon:'globe'}]}},emits:['select']};
</script>

<template>
<sf-surface class="sf-list-card"><h4>{{title}}</h4><button v-for="(i,n) in items" :key="n" type="button" @click="$emit('select',i)"><sf-icon :name="i.icon || 'phone'"/><span>{{i.label}}</span><small>{{i.detail}}</small><sf-icon name="chevron"/></button></sf-surface>
</template>
