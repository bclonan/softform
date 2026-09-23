/** Set complex values as DOM properties, not string attributes. */
export type SfFabElement = HTMLElement & {
  icon?: string;
  label?: string;
};
export declare const tagName: 'sf-fab';
export declare function registerSfFab(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfFabElement };
