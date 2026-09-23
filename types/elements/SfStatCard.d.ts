/** Set complex values as DOM properties, not string attributes. */
export type SfStatCardElement = HTMLElement & {
  label?: string;
  value?: string | number;
  change?: string;
  description?: string;
  icon?: string;
  loading?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  animateOnMount?: boolean;
};
export declare const tagName: 'sf-stat-card';
export declare function registerSfStatCard(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfStatCardElement };
