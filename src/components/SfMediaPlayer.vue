<script>
/** SOFTFORM AGENT NOTE
 * A working native audio element with custom controls. The demo includes an original 12-second synthesized WAV.
 * Use for local or supplied audio with play, mute, and seek controls.
 * Do not assume that a source can autoplay.
 * HTML tag: <sf-media-player> via @bclonan/softform/elements/SfMediaPlayer.
 * Props, events, and a runnable example: docs/components/SfMediaPlayer.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import audioUrl from '../assets/loop.wav?url';
import SfIcon from './SfIcon.vue';
import SfIconButton from './SfIconButton.vue';
import SfSurface from './SfSurface.vue';
export default {name:'SfMediaPlayer',components:{SfIcon,SfIconButton,SfSurface},props:{src:{type:String,default:()=>audioUrl},title:{type:String,default:'Ceramic'},subtitle:{type:String,default:'An original synthesized loop'}},setup(){const audio=ref(null),playing=ref(false),time=ref(0),duration=ref(12),muted=ref(false),error=ref('');async function toggle(){try{if(playing.value)audio.value.pause();else await audio.value.play()}catch(e){error.value='Audio could not be started in this browser.'}}function restart(){audio.value.currentTime=0;time.value=0}function seek(v){if(Number.isFinite(audio.value.duration))audio.value.currentTime=Number(v)}onBeforeUnmount(()=>audio.value?.pause());return{audio,playing,time,duration,muted,error,toggle,restart,seek,displayTime}}};
</script>

<template>
<sf-surface class="sf-media"><audio ref="audio" :src="src" preload="metadata" :muted="muted" @play="playing=true" @pause="playing=false" @ended="playing=false" @timeupdate="time=$event.target.currentTime" @loadedmetadata="duration=$event.target.duration" @error="error='Audio is unavailable in this browser.'"></audio><div class="row"><div class="media-art" aria-hidden="true"></div><div><strong>{{title}}</strong><p>{{subtitle}}</p></div></div><div class="media-controls"><button type="button" aria-label="Restart audio" @click="restart"><sf-icon name="rewind" size="sm"/></button><sf-icon-button :icon="playing?'pause':'play'" :label="playing?'Pause audio':'Play audio'" @click="toggle"/><button type="button" :aria-label="muted?'Unmute audio':'Mute audio'" :aria-pressed="muted" @click="muted=!muted"><sf-icon :name="muted?'muted':'volume'" size="sm"/></button></div><div class="media-track"><input type="range" min="0" :max="duration" step="0.1" :value="time" aria-label="Audio position" @input="seek($event.target.value)"/><div class="media-times"><span>{{displayTime(time)}}</span><span>{{displayTime(duration)}}</span></div></div><p v-if="error" role="alert">{{error}}</p></sf-surface>
</template>
