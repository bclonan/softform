<script>
/** SOFTFORM AGENT NOTE
 * A right-side native dialog for settings and contextual details. Its content is provided through slots.
 * Use for settings or supporting details that should slide in beside the task.
 * Use SfModal for a short decision that needs centered attention.
 * HTML tag: <sf-drawer> via @bclonan/softform/elements/SfDrawer.
 * Props, events, and a runnable example: docs/components/SfDrawer.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIconButton from './SfIconButton.vue';
export default {name:'SfDrawer',components:{SfIconButton},props:{modelValue:Boolean,title:{type:String,default:'Workspace settings'}},emits:['update:modelValue'],setup:dialogSetup};
</script>

<template>
<dialog ref="el" class="sf-dialog drawer" :aria-labelledby="titleId" @cancel.prevent="close" @close="close" @click="backdrop"><div class="dialog-header"><h3 :id="titleId">{{title}}</h3><sf-icon-button label="Close drawer" icon="close" size="small" @click="close"/></div><div class="dialog-body"><slot/></div><div v-if="$slots.footer" class="dialog-footer"><slot name="footer"/></div></dialog>
</template>
