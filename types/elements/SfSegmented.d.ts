/** Set complex values as DOM properties, not string attributes. */
export type SfSegmentedElement = HTMLElement & {
  modelValue?: string;
  options?: unknown[];
  label?: string;
  motion?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  motionEasing?: string;
  value?: string;
};
export declare const tagName: 'sf-segmented';
export declare function registerSfSegmented(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfSegmentedElement };
