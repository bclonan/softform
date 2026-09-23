import type { DefineComponent } from 'vue';
export interface SfMetricPanelProps {
  title?: string;
  total?: number;
  primary?: number;
  secondary?: number;
  loading?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  stagger?: number;
  animateOnMount?: boolean;
}
declare const SfMetricPanel: DefineComponent<SfMetricPanelProps>;
export default SfMetricPanel;
