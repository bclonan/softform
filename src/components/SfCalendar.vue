<script>
/** SOFTFORM AGENT NOTE
 * A selectable local calendar with month navigation and arrow-key movement between dates.
 * Use for choosing one date while browsing adjacent months.
 * Use a native date input when a compact form field is more useful.
 * HTML tag: <sf-calendar> via @bclonan/softform/elements/SfCalendar.
 * Props, events, and a runnable example: docs/components/SfCalendar.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
export default {name:'SfCalendar',components:{SfIcon},props:{modelValue:{type:String,default:'2026-09-23'}},emits:['update:modelValue'],setup(p,{emit}){const parse=s=>{const [y,m,d]=String(s).split('-').map(Number);return new Date(y||2026,(m||9)-1,d||1)};const cursor=ref(parse(p.modelValue)),root=ref(null);let pendingDay=null;function afterMonthEnter(){if(pendingDay!==null){root.value?.querySelector(`[data-day="${pendingDay}"]`)?.focus();pendingDay=null}}const title=computed(()=>cursor.value.toLocaleDateString('en-US',{month:'long',year:'numeric'}));const days=computed(()=>{const y=cursor.value.getFullYear(),m=cursor.value.getMonth();const offset=(new Date(y,m,1).getDay()+6)%7;return [...Array(offset).fill(null),...Array.from({length:new Date(y,m+1,0).getDate()},(_,i)=>i+1)]});const iso=d=>`${cursor.value.getFullYear()}-${String(cursor.value.getMonth()+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;function month(n){cursor.value=new Date(cursor.value.getFullYear(),cursor.value.getMonth()+n,1)}function key(e,d){const delta={ArrowRight:1,ArrowLeft:-1,ArrowDown:7,ArrowUp:-7}[e.key];if(delta===undefined)return;e.preventDefault();const date=new Date(cursor.value.getFullYear(),cursor.value.getMonth(),d+delta);const changedMonth=date.getMonth()!==cursor.value.getMonth()||date.getFullYear()!==cursor.value.getFullYear();cursor.value=date;if(changedMonth)pendingDay=date.getDate();else nextTick(()=>root.value?.querySelector(`[data-day="${date.getDate()}"]`)?.focus())}watch(()=>p.modelValue,v=>{cursor.value=parse(v)});return{root,title,days,iso,month,key,afterMonthEnter,week:['M','T','W','T','F','S','S']}}};
</script>

<template>
<div ref="root" class="sf-surface sf-calendar"><div class="calendar-head"><button type="button" aria-label="Previous month" @click="month(-1)"><sf-icon name="left"/></button><span aria-live="polite">{{title}}</span><button type="button" aria-label="Next month" @click="month(1)"><sf-icon name="chevron"/></button></div><Transition name="sf-calendar-month" mode="out-in" @after-enter="afterMonthEnter"><div class="calendar-grid" :key="title"><span class="weekday" v-for="(w,i) in week" :key="'w'+i" aria-hidden="true">{{w}}</span><template v-for="(d,i) in days" :key="'d'+i"><button v-if="d" type="button" :data-day="d" :aria-label="title+' '+d" :aria-pressed="modelValue===iso(d)" @click="$emit('update:modelValue',iso(d))" @keydown="key($event,d)">{{d}}</button><span v-else aria-hidden="true"></span></template></div></Transition><div class="calendar-foot">Selected · {{modelValue}}</div></div>
</template>
