/** Set complex values as DOM properties, not string attributes. */
export type SfDividerElement = HTMLElement & {
  as?: string;
};
export declare const tagName: 'sf-divider';
export declare function registerSfDivider(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfDividerElement };
