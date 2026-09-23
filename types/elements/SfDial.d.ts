/** Set complex values as DOM properties, not string attributes. */
export type SfDialElement = HTMLElement & {
  modelValue?: number;
  label?: string;
  value?: number;
};
export declare const tagName: 'sf-dial';
export declare function registerSfDial(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfDialElement };
