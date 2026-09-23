/** Set complex values as DOM properties, not string attributes. */
export type SfClockElement = HTMLElement & {
  label?: string;
};
export declare const tagName: 'sf-clock';
export declare function registerSfClock(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfClockElement };
