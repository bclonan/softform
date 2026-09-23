/** Set complex values as DOM properties, not string attributes. */
export type SfMetricPanelElement = HTMLElement & {
  title?: string;
  total?: number;
  primary?: number;
  secondary?: number;
  loading?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  stagger?: number;
  animateOnMount?: boolean;
};
export declare const tagName: 'sf-metric-panel';
export declare function registerSfMetricPanel(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfMetricPanelElement };
