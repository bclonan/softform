import type { DefineComponent } from 'vue';
export interface SfSegmentedProps {
  modelValue?: string;
  options?: unknown[];
  label?: string;
  motion?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  motionEasing?: string;
}
declare const SfSegmented: DefineComponent<SfSegmentedProps>;
export default SfSegmented;
