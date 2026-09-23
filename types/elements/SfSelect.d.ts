/** Set complex values as DOM properties, not string attributes. */
export type SfSelectElement = HTMLElement & {
  modelValue?: string;
  label?: string;
  options?: unknown[];
  value?: string;
};
export declare const tagName: 'sf-select';
export declare function registerSfSelect(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfSelectElement };
