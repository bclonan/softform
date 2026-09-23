/** Set complex values as DOM properties, not string attributes. */
export type SfBarChartElement = HTMLElement & {
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
};
export declare const tagName: 'sf-bar-chart';
export declare function registerSfBarChart(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfBarChartElement };
