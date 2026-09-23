<script>
/** SOFTFORM AGENT NOTE
 * A native modal dialog with Escape, focus containment, focus restoration, and optional footer content.
 * Use for a focused decision or short form that needs modal focus handling.
 * Do not place a long browsing flow inside a modal.
 * HTML tag: <sf-modal> via @bclonan/softform/elements/SfModal.
 * Props, events, and a runnable example: docs/components/SfModal.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIconButton from './SfIconButton.vue';
export default {name:'SfModal',components:{SfIconButton},props:{modelValue:Boolean,title:{type:String,default:'A moment of clarity'},code:Boolean},emits:['update:modelValue'],setup:dialogSetup};
</script>

<template>
<dialog ref="el" class="sf-dialog" :class="{'code-dialog':code}" :aria-labelledby="titleId" @cancel.prevent="close" @close="close" @click="backdrop"><div class="dialog-header"><h3 :id="titleId">{{title}}</h3><sf-icon-button label="Close dialog" icon="close" size="small" @click="close"/></div><div class="dialog-body"><slot/></div><div v-if="$slots.footer" class="dialog-footer"><slot name="footer"/></div></dialog>
</template>
