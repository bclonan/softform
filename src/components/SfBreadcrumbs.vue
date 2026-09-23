<script>
/** SOFTFORM AGENT NOTE
 * A path with a current-page marker. Earlier items emit navigate events for your router or view state.
 * Use to show a location within a hierarchy and allow movement to ancestors.
 * Do not use for steps in a linear form.
 * HTML tag: <sf-breadcrumbs> via @bclonan/softform/elements/SfBreadcrumbs.
 * Props, events, and a runnable example: docs/components/SfBreadcrumbs.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
export default {name:'SfBreadcrumbs',components:{SfIcon},props:{items:{type:Array,default:()=>[]}},emits:['navigate']};
</script>

<template>
<nav class="sf-breadcrumbs" aria-label="Breadcrumb"><template v-for="(item,i) in items" :key="i"><sf-icon v-if="i" name="chevron" size="sm"/><span v-if="i===items.length-1" aria-current="page">{{item}}</span><button v-else type="button" @click="$emit('navigate',item)">{{item}}</button></template></nav>
</template>
