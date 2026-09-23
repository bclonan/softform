/** Set complex values as DOM properties, not string attributes. */
export type SfModalElement = HTMLElement & {
  modelValue?: boolean;
  title?: string;
  code?: boolean;
  value?: boolean;
};
export declare const tagName: 'sf-modal';
export declare function registerSfModal(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfModalElement };
