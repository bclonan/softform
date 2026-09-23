import type { DefineComponent } from 'vue';
export interface SfStepperProps {
  modelValue?: number;
  min?: number;
  max?: number;
  label?: string;
}
declare const SfStepper: DefineComponent<SfStepperProps>;
export default SfStepper;
