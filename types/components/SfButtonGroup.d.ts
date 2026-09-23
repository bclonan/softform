import type { DefineComponent } from 'vue';
export interface SfButtonGroupProps {
  modelValue?: string;
  options?: unknown[];
  label?: string;
  motion?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  motionEasing?: string;
}
declare const SfButtonGroup: DefineComponent<SfButtonGroupProps>;
export default SfButtonGroup;
