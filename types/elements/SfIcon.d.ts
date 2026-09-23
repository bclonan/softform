/** Set complex values as DOM properties, not string attributes. */
export type SfIconElement = HTMLElement & {
  name?: string;
  size?: string;
};
export declare const tagName: 'sf-icon';
export declare function registerSfIcon(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfIconElement };
