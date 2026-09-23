/** Set complex values as DOM properties, not string attributes. */
export type SfCheckboxElement = HTMLElement & {
  modelValue?: boolean;
  label?: string;
  disabled?: boolean;
  value?: boolean;
};
export declare const tagName: 'sf-checkbox';
export declare function registerSfCheckbox(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfCheckboxElement };
