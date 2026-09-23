<script>
/** SOFTFORM AGENT NOTE
 * A real local clock. The interval is cleaned up on unmount. No server or external time service is used.
 * Use when the user needs the current local time in a dashboard.
 * Do not use it as a countdown or server-time claim.
 * HTML tag: <sf-clock> via @bclonan/softform/elements/SfClock.
 * Props, events, and a runnable example: docs/components/SfClock.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
import SfSurface from './SfSurface.vue';
export default {name:'SfClock',components:{SfIcon,SfSurface},props:{label:{type:String,default:'Your local time'}},setup(){const date=ref(new Date());let timer;onMounted(()=>timer=setInterval(()=>date.value=new Date(),1000));onBeforeUnmount(()=>clearInterval(timer));return{parts:computed(()=>[String(date.value.getHours()).padStart(2,'0'),String(date.value.getMinutes()).padStart(2,'0')]),day:computed(()=>date.value.toLocaleDateString('en-US',{weekday:'long',month:'short',day:'numeric'})),zone:Intl.DateTimeFormat().resolvedOptions().timeZone}}};
</script>

<template>
<sf-surface class="sf-clock"><div class="clock-meta"><span>{{label}}</span><sf-icon name="clock" size="sm"/></div><div class="clock-time" role="timer" :aria-label="parts.join(':')">{{parts[0]}}<span class="colon">:</span>{{parts[1]}}</div><div class="clock-zone">{{day}} · {{zone}}</div></sf-surface>
</template>
