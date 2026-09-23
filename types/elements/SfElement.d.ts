/** Set complex values as DOM properties, not string attributes. */
export type SfElementElement = HTMLElement & {
  as?: keyof HTMLElementTagNameMap | (string & {});
};
export declare const tagName: 'sf-element';
export declare function registerSfElement(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfElementElement };
