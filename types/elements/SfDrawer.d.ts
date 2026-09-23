/** Set complex values as DOM properties, not string attributes. */
export type SfDrawerElement = HTMLElement & {
  modelValue?: boolean;
  title?: string;
  value?: boolean;
};
export declare const tagName: 'sf-drawer';
export declare function registerSfDrawer(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfDrawerElement };
