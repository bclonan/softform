/** Set complex values as DOM properties, not string attributes. */
export type SfDropdownElement = HTMLElement & {
  label?: string;
  items?: unknown[];
};
export declare const tagName: 'sf-dropdown';
export declare function registerSfDropdown(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfDropdownElement };
