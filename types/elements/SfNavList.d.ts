/** Set complex values as DOM properties, not string attributes. */
export type SfNavListElement = HTMLElement & {
  modelValue?: string;
  items?: unknown[];
  label?: string;
  motion?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  motionEasing?: string;
  value?: string;
};
export declare const tagName: 'sf-nav-list';
export declare function registerSfNavList(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfNavListElement };
