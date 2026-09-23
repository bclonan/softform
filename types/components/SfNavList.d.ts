import type { DefineComponent } from 'vue';
export interface SfNavListProps {
  modelValue?: string;
  items?: unknown[];
  label?: string;
  motion?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  motionEasing?: string;
}
declare const SfNavList: DefineComponent<SfNavListProps>;
export default SfNavList;
