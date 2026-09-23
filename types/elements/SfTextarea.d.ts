/** Set complex values as DOM properties, not string attributes. */
export type SfTextareaElement = HTMLElement & {
  modelValue?: string;
  label?: string;
  placeholder?: string;
  maxlength?: number;
  value?: string;
};
export declare const tagName: 'sf-textarea';
export declare function registerSfTextarea(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfTextareaElement };
