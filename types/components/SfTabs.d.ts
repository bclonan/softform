import type { DefineComponent } from 'vue';
export interface SfTabsProps {
  modelValue?: string;
  options?: unknown[];
  label?: string;
  motion?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  motionEasing?: string;
}
declare const SfTabs: DefineComponent<SfTabsProps>;
export default SfTabs;
