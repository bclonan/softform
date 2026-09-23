/** Set complex values as DOM properties, not string attributes. */
export type SfRadioGroupElement = HTMLElement & {
  modelValue?: string;
  label?: string;
  options?: unknown[];
  value?: string;
};
export declare const tagName: 'sf-radio-group';
export declare function registerSfRadioGroup(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfRadioGroupElement };
