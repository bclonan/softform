import type { DefineComponent } from 'vue';
export interface SfBottomNavProps {
  modelValue?: string;
  items?: unknown[];
  motion?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  motionEasing?: string;
}
declare const SfBottomNav: DefineComponent<SfBottomNavProps>;
export default SfBottomNav;
