/** Set complex values as DOM properties, not string attributes. */
export type SfButtonGroupElement = HTMLElement & {
  modelValue?: string;
  options?: unknown[];
  label?: string;
  motion?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  motionEasing?: string;
  value?: string;
};
export declare const tagName: 'sf-button-group';
export declare function registerSfButtonGroup(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfButtonGroupElement };
