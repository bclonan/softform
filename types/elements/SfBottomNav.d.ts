/** Set complex values as DOM properties, not string attributes. */
export type SfBottomNavElement = HTMLElement & {
  modelValue?: string;
  items?: unknown[];
  motion?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  motionEasing?: string;
  value?: string;
};
export declare const tagName: 'sf-bottom-nav';
export declare function registerSfBottomNav(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfBottomNavElement };
