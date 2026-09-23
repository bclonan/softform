<script>
/** SOFTFORM AGENT NOTE
 * Choose or drop a local file. The component emits a File object; it does not send data anywhere. Accept filters the chooser only; validate dropped files in your application.
 * Use for local file selection with drag and drop feedback.
 * Do not imply that selection uploads or stores a file.
 * HTML tag: <sf-file-upload> via @bclonan/softform/elements/SfFileUpload.
 * Props, events, and a runnable example: docs/components/SfFileUpload.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
export default {name:'SfFileUpload',components:{SfIcon},props:{accept:{type:String,default:'.png,.jpg,.jpeg,.svg,.json'},label:{type:String,default:'Drop a file here'}},emits:['select'],setup(p,{emit}){const selected=ref(null),dragging=ref(false),input=ref(null);function select(files){selected.value=files?.[0]||null;emit('select',selected.value)}function clear(){selected.value=null;if(input.value)input.value.value='';emit('select',null)}return{selected,dragging,input,select,clear}}};
</script>

<template>
<div class="sf-upload" :class="{dragging}" @dragover.prevent="dragging=true" @dragleave.prevent="dragging=false" @drop.prevent="dragging=false;select($event.dataTransfer.files)"><label><sf-icon name="upload"/><strong>{{label}}</strong><small>Local selection only. Nothing is uploaded.</small><input ref="input" type="file" :accept="accept" @change="select($event.target.files)"/></label><p v-if="selected" class="upload-file">{{selected.name}} · {{Math.ceil(selected.size/1024)}} KB <button type="button" class="bare-button" aria-label="Clear selected file" @click="clear">×</button></p></div>
</template>
