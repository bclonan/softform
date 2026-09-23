/** Set complex values as DOM properties, not string attributes. */
export type SfButtonElement = HTMLElement & {
  variant?: string;
  size?: string;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: string;
};
export declare const tagName: 'sf-button';
export declare function registerSfButton(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfButtonElement };
