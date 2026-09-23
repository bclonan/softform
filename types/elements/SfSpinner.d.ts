/** Set complex values as DOM properties, not string attributes. */
export type SfSpinnerElement = HTMLElement & {
  size?: string;
  label?: string;
};
export declare const tagName: 'sf-spinner';
export declare function registerSfSpinner(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfSpinnerElement };
