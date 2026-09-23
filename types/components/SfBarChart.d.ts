import type { DefineComponent } from 'vue';
export interface SfBarChartProps {
  values?: unknown[];
  labels?: unknown[];
  label?: string;
  unit?: string;
  highlight?: number;
  loading?: boolean;
  orientation?: 'vertical' | 'horizontal';
  accentColor?: string;
  motionDelay?: number;
  motionDuration?: number;
  stagger?: number;
  animateOnMount?: boolean;
}
declare const SfBarChart: DefineComponent<SfBarChartProps>;
export default SfBarChart;
