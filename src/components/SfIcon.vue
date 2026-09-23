<script>
/** SOFTFORM AGENT NOTE
 * Hand-drawn inline SVG icons. Icons are decorative; provide the accessible label on the surrounding control.
 * Use for a decorative symbol next to text or inside a labeled control.
 * Do not use a bare icon as the only accessible action label.
 * HTML tag: <sf-icon> via @bclonan/softform/elements/SfIcon.
 * Props, events, and a runnable example: docs/components/SfIcon.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';

export default {name:'SfIcon',props:{name:{type:String,default:'circle'},size:{type:String,default:''}},setup:p=>()=>h('svg',{class:['sf-icon',p.size],viewBox:'0 0 24 24',fill:'none',stroke:'currentColor','stroke-width':1.65,'stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true',focusable:'false',innerHTML:ICONS[p.name]||ICONS.circle})};
</script>
