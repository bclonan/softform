<script>
/** SOFTFORM AGENT NOTE
 * A set of physical-looking nodes joined by hairlines. Selection is controlled by the parent.
 * Use to show a short sequence of connected stages and the active stage.
 * Do not use it for a large editable flowchart.
 * HTML tag: <sf-workflow> via @bclonan/softform/elements/SfWorkflow.
 * Props, events, and a runnable example: docs/components/SfWorkflow.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
import SfSurface from './SfSurface.vue';
export default {name:'SfWorkflow',components:{SfIcon,SfSurface},props:{modelValue:{type:String,default:'adapt'},nodes:{type:Array,default:()=>[{id:'observe',icon:'eye',title:'Observe',description:'Bring your data into focus.'},{id:'adapt',icon:'flow',title:'Adapt',description:'One contract. Any source.'},{id:'render',icon:'layers',title:'Render',description:'Components take it from here.'}]}},emits:['update:modelValue']};
</script>

<template>
<div class="sf-workflow" role="group" aria-label="Connected workflow"><div class="workflow-node" v-for="node in nodes" :key="node.id"><button type="button" class="node-orb" :aria-label="node.title" :aria-pressed="modelValue===node.id" @click="$emit('update:modelValue',node.id)"><sf-icon :name="node.icon"/></button><span class="node-connector" aria-hidden="true"></span><sf-surface class="node-card"><strong>{{node.title}}</strong><p>{{node.description}}</p></sf-surface></div></div>
</template>
