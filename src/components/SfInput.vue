<script>
/** SOFTFORM AGENT NOTE
 * A native input inside an inset material, with explicit label, icon, hint, and error state.
 * Use for a labeled single-line value with hint or error feedback.
 * Use SfTextarea for longer writing.
 * HTML tag: <sf-input> via @bclonan/softform/elements/SfInput.
 * Props, events, and a runnable example: docs/components/SfInput.md.
 */
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, h, inject } from 'vue';
import { ICONS, uid, clamp, displayTime, dialogSetup } from '../helpers.js';
import SfIcon from './SfIcon.vue';
export default {name:'SfInput',components:{SfIcon},props:{modelValue:{type:[String,Number,Boolean,Object],default:''},label:String,placeholder:String,type:{type:String,default:'text'},icon:String,hint:String,error:String,disabled:Boolean,required:Boolean,readonly:Boolean,name:String,autocomplete:String,inputmode:String,min:{type:[String,Number],default:undefined},max:{type:[String,Number],default:undefined},step:{type:[String,Number],default:undefined},minlength:Number,maxlength:Number,pattern:String,multiple:Boolean,accept:String,capture:String,list:String,checkedValue:{type:String,default:'on'},size:Number,autofocus:Boolean,spellcheck:{type:[Boolean,String],default:undefined},enterkeyhint:String,src:String,alt:String,width:Number,height:Number,form:String,formaction:String,formenctype:String,formmethod:String,formnovalidate:Boolean,formtarget:String,dirname:String},emits:['update:modelValue'],setup(p,{emit}){function update(event){const input=event.target;const value=p.type==='file'?input.files:p.type==='checkbox'?input.checked:p.type==='radio'?p.checkedValue:input.value;emit('update:modelValue',value)}return{id:uid('input'),update}}};
</script>

<template>
<div class="sf-field" :class="{'sf-input-hidden':type==='hidden'}"><label v-if="label" :for="id">{{label}}</label><div class="sf-field-control" :class="[{invalid:error,filled:type!=='file' && String(modelValue ?? '').length>0},'sf-input-'+type]"><sf-icon v-if="icon" :name="icon" size="sm"/><input :id="id" :type="type" :value="type==='file'||type==='checkbox'||type==='radio'?undefined:modelValue" :checked="type==='checkbox'?!!modelValue:type==='radio'?modelValue===checkedValue:undefined" :placeholder="placeholder" :aria-label="label || placeholder || 'Input'" :aria-invalid="!!error" :aria-describedby="error || hint ? id+'-hint' : undefined" :disabled="disabled" :required="required" :readonly="readonly" :name="name" :autocomplete="autocomplete" :inputmode="inputmode" :min="min" :max="max" :step="step" :minlength="minlength" :maxlength="maxlength" :pattern="pattern" :multiple="multiple" :accept="accept" :capture="capture" :list="list" :size="size" :autofocus="autofocus" :spellcheck="spellcheck" :enterkeyhint="enterkeyhint" :src="src" :alt="alt" :width="width" :height="height" :form="form" :formaction="formaction" :formenctype="formenctype" :formmethod="formmethod" :formnovalidate="formnovalidate" :formtarget="formtarget" :dirname="dirname" @input="update"/><span v-if="type!=='file' && type!=='checkbox' && type!=='radio' && String(modelValue ?? '').length>0" class="sf-input-indicator" aria-hidden="true"></span></div><Transition name="sf-feedback"><p v-if="error || hint" :id="id+'-hint'" :class="error ? 'sf-field-error' : 'hint'">{{error || hint}}</p></Transition></div>
</template>
