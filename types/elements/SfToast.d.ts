/** Set complex values as DOM properties, not string attributes. */
export type SfToastElement = HTMLElement & {
  as?: string;
  message?: string;
  dismissible?: boolean;
};
export declare const tagName: 'sf-toast';
export declare function registerSfToast(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfToastElement };
