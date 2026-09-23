import type { DefineComponent } from 'vue';
export interface SfStatCardProps {
  label?: string;
  value?: string | number;
  change?: string;
  description?: string;
  icon?: string;
  loading?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  animateOnMount?: boolean;
}
declare const SfStatCard: DefineComponent<SfStatCardProps>;
export default SfStatCard;
