/** Set complex values as DOM properties, not string attributes. */
export type SfTabsElement = HTMLElement & {
  modelValue?: string;
  options?: unknown[];
  label?: string;
  motion?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  motionEasing?: string;
  value?: string;
};
export declare const tagName: 'sf-tabs';
export declare function registerSfTabs(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfTabsElement };
