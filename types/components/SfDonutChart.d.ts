import type { DefineComponent } from 'vue';
export interface SfDonutChartProps {
  value?: number;
  label?: string;
  primary?: string;
  secondary?: string;
  size?: number;
  thickness?: number;
  primaryColor?: string;
  secondaryColor?: string;
  loading?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  animateOnMount?: boolean;
}
declare const SfDonutChart: DefineComponent<SfDonutChartProps>;
export default SfDonutChart;
