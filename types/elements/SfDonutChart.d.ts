/** Set complex values as DOM properties, not string attributes. */
export type SfDonutChartElement = HTMLElement & {
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
};
export declare const tagName: 'sf-donut-chart';
export declare function registerSfDonutChart(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfDonutChartElement };
