import type { DefineComponent } from 'vue';
export interface SfProgressProps {
  value?: number;
  label?: string;
  tone?: string;
  loading?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  animateOnMount?: boolean;
}
declare const SfProgress: DefineComponent<SfProgressProps>;
export default SfProgress;
