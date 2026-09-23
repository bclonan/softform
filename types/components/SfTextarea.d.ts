import type { DefineComponent } from 'vue';
export interface SfTextareaProps {
  modelValue?: string;
  label?: string;
  placeholder?: string;
  maxlength?: number;
}
declare const SfTextarea: DefineComponent<SfTextareaProps>;
export default SfTextarea;
